'use client'
import { UserInfosContext } from '@/lib/UserInfos'
import React, { useContext } from 'react'
import Button from '../Button'
import Link from 'next/link'

export default function StartSession() {
  const { isLogged } = useContext(UserInfosContext)

  if (isLogged) return null

  return (
    <section className="bg-white rounded-2xl md:absolute md:-top-8 max-w-[40rem] w-full mt-8 md:mt-0 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-5 gap-2">
        <h3 className="text-sm text-primary font-semibold">
          Faça login para ficar por dentro de todo o conteúdo
        </h3>
        <Link href="/login">
          <Button>Fazer login</Button>
        </Link>
      </div>
    </section>
  )
}
