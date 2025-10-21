import Image from 'next/image'
import React from 'react'
import ContetraMainLogo from "@/public/assets/images/logo/contetra-main-logo.png"
import Link from 'next/link'

export const HeaderLogo = () => {
  return (
    <Link href={"/"}>
    <Image src={ContetraMainLogo} width={180} alt='contetra-logo' />
    </Link>
  )
}
