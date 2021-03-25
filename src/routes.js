import React from 'react'
import { Route, Routes } from 'react-router'
import Generos from './Components/Tabelas/Conteudos/Generos'
import Home from './Components/Home'
import Livros from './Components/Tabelas/Conteudos/Livros'
import Tabela from './Components/Tabelas/Tabela'
import FormLivros from './Components/Forms/Livros'
import FormGenero from './Components/Forms/Generos'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='livros' element={<Livros/>}/>
            <Route path='generos' element={<Generos/>}/>
            <Route path='cadastro-livro' element={<FormLivros/>}/>
            <Route path='cadastro-genero' element={<FormGenero/>}/>
        </Routes>
        )
}

export default AppRoutes
