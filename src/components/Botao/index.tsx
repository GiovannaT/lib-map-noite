import React from 'react'

interface Props{
    title: string;
}

export const Botao = ({title}: Props) => {
  return (
    <button type='button'>{title}</button>
  )
}
