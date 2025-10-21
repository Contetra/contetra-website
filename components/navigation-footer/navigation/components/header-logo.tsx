import Image from 'next/image'
import React from 'react'
import ContetraMainLogo from "@/public/assets/images/logo/contetra-main-logo.png"

export const HeaderLogo = () => {
  return (
    <Image src={ContetraMainLogo} width={180} alt='contetra-logo' />
  )
}
