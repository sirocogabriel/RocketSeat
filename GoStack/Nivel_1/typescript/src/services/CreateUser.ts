interface techObject {
  name: string
  XP: number
}

interface CreateUserData {
  name?: string
  email: string
  password: string
  tech: Array<string | techObject>
}

export default function createUser({
  name = '',
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }
}
