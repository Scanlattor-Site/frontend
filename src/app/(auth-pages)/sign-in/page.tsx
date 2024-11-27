// import { signInAction } from '@/app/actions'
import { FormMessage, Message } from '@/components/FormMessage'
/* import { SubmitButton } from '@/components/SubmitButton'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label' */
import Link from 'next/link'

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams
  return (
    <div className='h-full flex items-center justify-center'>
      <form className="flex-1 flex flex-col md:min-w-[360px] md:max-w-[23rem] w-full max-w-xs bg-secondary pt-14 px-6 pb-7 divide-y">
        <div className='mb-6'>
          <h1 className="text-base font-bold text-center text-white">
            Bem-vindo(a) de volta
          </h1>
          <p className="text-white text-center font-medium text-base">
            Inicie a sessão para continuar desfrutando das melhores histórias em
            português.
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            {/* <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="seu@exemplo.com" required />
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Senha</Label>
              <Link
                className="text-xs text-foreground underline"
                href="/forgot-password"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Sua senha"
              required
            />
            <SubmitButton pendingText="Iniciando..." formAction={signInAction}>
              Iniciar sessão
            </SubmitButton>
            <FormMessage message={searchParams} /> */}
          </div>
        </div>
      
        <h3 className="text-base font-bold text-center leading-8">
          Ainda não tem uma conta? <br />
          <Link className="font-medium underline" href="/sign-up">
            Cadastre-se
          </Link>
        </h3>
      </form>
    </div>
  )
}
