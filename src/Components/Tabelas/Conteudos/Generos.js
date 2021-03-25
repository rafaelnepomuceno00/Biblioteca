import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../../App.css'
import Tabela from '../Tabela'

function Generos() {
    const [generos, setGeneros] = useState([])
    useEffect(() => {
        async function getGeneros(){
            const res = await axios.get('http://localhost:3000/generos')
            setGeneros(res.data)
        }
        getGeneros()
    }, [])

    if(generos.length===0){
        return(<div className="d-flex justify-content-center" role="status">
        <span className="sr-only"></span>
      </div>)
    }
    return (
        <Tabela>

        <thead className='THead'>
               <tr >
                <th >Genero</th>
                <th >Editar</th>
                <th >Excluir</th>
               </tr>
            </thead>
            <tbody className='tabela-corpo'>
         {generos.map(genero=>(
             <tr key={genero.id}>
                <td>{genero.nome}</td>
                <td><button className='btn btn-1 btn-warning' >Editar</button></td>
                <td><button className='btn btn-2 btn-danger' >Excluir</button></td>
            </tr>
        ))}
        </tbody>
        </Tabela>
    )
}

export default Generos
