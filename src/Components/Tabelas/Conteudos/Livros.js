import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../../App.css'
import Tabela from '../Tabela'

function Livros() {
    const [Livros, setLivros] = useState([])

    useEffect(() => {
        async function getLivros(){
            const res = await axios.get('http://localhost:3000/livros?_expand=genero')
            setLivros(res.data)
        }
        getLivros()
    }, [])
    
console.log(Livros);
    if(Livros.length===0){
        return(<div className="d-flex justify-content-center" role="status">
        <span className="sr-only"></span>
      </div>)
    }
    return (
        <Tabela>

        <thead className='THead'>
               <tr >
                <th >Nome</th>
                <th >Genero</th>
                <th >Autor</th>
                <th >Editar</th>
                <th >Excluir</th>
               </tr>
            </thead>
            <tbody className='tabela-corpo'>
         {Livros.map(Livro=>(
             <tr key={Livro.id}>
                <td >{Livro.nomeLivro}</td>
                <td >{Livro.genero.nome}</td>
                <td >{Livro.autor}</td>
                <td ><button className='btn btn-warning btn-1' >Editar</button></td>
                <td ><button className='btn btn-danger btn-2' >Excluir</button></td>
            </tr>
        ))}
        </tbody>
        </Tabela>
        )
    }
    
export default Livros
