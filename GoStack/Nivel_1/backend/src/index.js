const express = require('express')
const cors = require('cors')

const { uuid, isUuid } = require('uuidv4')

const app = express()

app.use(cors())
app.use(express.json())

/**
 * Métodos Http:
 *
 * GET: Buscar Informações back-end
 * POST: Criar uma informação no back-end
 * PUT/PATH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos De Parâmetros
 *
 * Query Params: Filtros e Paginação
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteudo na hora de Criar ou Editar um recurso (JSON)
 */

/**
 * Middleware
 *
 * Interceptador de requisições que pode interrompe totalmente a requisição ou alterar dados da requisição
 */

const projects = []

function logRequests(request, response, next) {
  const { method, url } = request

  const logLabel = `[${method.toUpperCase()}] ${url}`

  return next()
}

function validateProjectId(request, response, next) {
  const { id } = request.params

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'invalid project ID' })
  }

  return next()
}

app.use(logRequests)

app.get('/projects', (request, response) => {
  const { title } = request.query

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects

  return response.json(results)
})

app.post('/projects', (request, response) => {
  const { title, owner } = request.body

  const project = { id: uuid(), title, owner }

  projects.push(project)

  return response.json({ project })
})

app.put('/projects/:id', validateProjectId, (request, response) => {
  const { id } = request.params

  const { title, owner } = request.body

  const projectIndex = projects.findIndex((project) => project.id === id)

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' })
  }

  const project = {
    id: id,
    title: title,
    owner: owner,
  }

  projects[projectIndex] = project

  return response.json(project)
})

app.delete('/projects/:id', validateProjectId, (request, response) => {
  const { id } = request.params

  const projectIndex = projects.findIndex((project) => project.id === id)

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' })
  }

  projects.splice(projectIndex, 1)

  return response.status(204).send()
})

app.listen(3333, () => {
  console.log('Backend 👍')
})
