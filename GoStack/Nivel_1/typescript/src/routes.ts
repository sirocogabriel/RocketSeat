import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'sirocogabriel@gmail.com',
    password: '123456',
    tech: ['C', 'Java', 'HTML', { name: 'JS', XP: 20 }],
  })

  return response.json(user)
}
