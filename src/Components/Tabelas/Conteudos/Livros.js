import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../../App.css'

function Livros() {
    const [Livros, setLivros] = useState([])
    useEffect(() => {
        async function getLivros(){
            const res = await axios.get('http://localhost:3000/livros?_expand=author')
            setLivros(res.data)
        }
        getLivros()
    }, [])

    if(Livros.length===0){
        return(<div className="d-flex justify-content-center" role="status">
        <span class="sr-only"></span>
      </div>)
    }
    return (
        <>
        <thead className='THead'>
               <tr >
                <th className='text-center'>Nome</th>
                <th className='text-center'>Genero</th>
                <th className='text-center'>Autor</th>
                <th className='text-center'>Editar</th>
                <th className='text-center'>Excluir</th>
               </tr>
            </thead>
            <tbody className='tabela-corpo'>
         {Livros.map(Livro=>(
            <tr key={Livro.id}>
                <td className='text-center'>{Livro.nomeLivro}</td>
                <td className='text-center'>{Livro.author.genero}</td>
                <td className='text-center'>{Livro.author.nome}</td>
                <td className='text-center'><button className='btn btn-warning' >Editar</button></td>
                <td className='text-center'><button className='btn btn-danger' >Excluir</button></td>
            </tr>
        ))}
        </tbody>
        </>
        )
}

export default Livros
