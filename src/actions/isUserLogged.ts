'use server'
import { cookies } from 'next/dist/client/components/headers'

export default async function isUserLogged() {
  const token = cookies().get('token')
  if (token) {
    return true
  }
  return false
}
