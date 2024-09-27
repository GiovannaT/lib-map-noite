import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

interface Props{
    title: string;
}


export const Botao = ({title}: Props) => {

  const getBooks = useCallback(async ()=>{
    const response = await axios('https://potterapi-fedeperin.vercel.app/pt/books');
    console.log(response.data);

  },[])

  useEffect(()=>{
    console.log('teste');
    getBooks();
  }, [])

  return (
    <button type='button'>{title}</button>
  )
}