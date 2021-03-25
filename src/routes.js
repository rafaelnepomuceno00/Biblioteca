import React from 'react'
import Home from './Components/Home'
import Livros from './Components/Tabelas/Conteudos/Livros'
import { Route, Routes } from 'react-router'
import FormLivros from './Components/Forms/Livros'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='livros' element={<Livros/>}/>
            <Route path='livros/cadastrolivro/:id' element={<FormLivros/>}/>
            <Route path='cadastrolivro' element={<FormLivros/>}/>
        </Routes>
        )
}

export default AppRoutes
