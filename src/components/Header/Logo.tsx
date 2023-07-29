import Image from 'next/image'

const SCAN_NAME = process.env.NEXT_PUBLIC_SCAN_NAME

export default function LogoAndName() {
  return (
    <section className="flex items-center gap-2 drop-shadow-md">
      <Image src="/logo.png" height="40" width="40" alt="Logo" />
      <h2 className="text-white text-3xl font-bold">{SCAN_NAME}</h2>
    </section>
  )
}
