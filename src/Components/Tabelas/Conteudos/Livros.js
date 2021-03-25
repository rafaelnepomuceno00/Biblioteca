import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../../App.css'
import Tabela from '../Tabela'
import { Link } from 'react-router-dom'

function Livros() {
    const [Livros, setLivros] = useState([])

    useEffect(() => {
        async function getLivros(){
            const res = await axios.get('http://localhost:3000/livros?_expand=genero')
            setLivros(res.data)
        }
        getLivros()
    }, [])
    
    async function removerLivro(id){
        if(window.confirm('Tem certeza que deseja excluir o livros?')){
            try {
                await axios.delete(`http://localhost:3000/livros/${id}`)
                setLivros(Livros.filter(livro=>livro.id !== id))
            } catch (error) {
                alert('Problema ao remover o livros, tente novamente')
            }

        }
    }
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
                <th >Gênero</th>
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
                <td > <Link to={`cadastrolivro/${Livro.id}`} className='btn btn-warning btn-1'>Editar</Link></td>
                <td >  <button className='btn btn-danger btn-2'onClick={()=>{removerLivro(Livro.id)}} >Excluir</button></td>
            </tr>
        ))}
        </tbody>
        </Tabela>
        )
    }
    
export default Livros
