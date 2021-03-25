import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../App.css';

function FormLivros() {
  const [Generos, setGeneros] = useState([]);
  const [NomeLivro, setNomeLivro] = useState('');
  const [Autor, setAutor] = useState('');
  const [GeneroId, setGeneroId] = useState('');

  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      async function getLivro() {
        const res = await axios.get(
          `http://localhost:3000/livros/${params.id}`,
        );

        setNomeLivro(res.data.nomeLivro);
        setAutor(res.data.autor);
        setGeneroId(res.data.generoId);
      }
      getLivro();
    }
  }, [params.id]);

  useEffect(() => {
    async function getGeneros() {
      const res = await axios.get('http://localhost:3000/generos');
      setGeneros(res.data);
    }
    getGeneros();
  }, []);

  async function submeterFormulario(e) {
    e.preventDefault();
    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/livros', {
          nomeLivro: NomeLivro,
          autor: Autor,
          generoId: Number(GeneroId),
        });
      } else {
        await axios.put(`http://localhost:3000/livros/${params.id}`, {
          nomeLivro: NomeLivro,
          autor: Autor,
          generoId: Number(GeneroId),
        });
      }

      setNomeLivro('');
      setAutor('');
      setGeneroId('');
      alert('Salvo com sucesso');
    } catch (error) {
      alert('Erro ao salvar');
    }
  }

  return (
    <form className="Form" onSubmit={submeterFormulario}>
      <div>
        <h1>Cadastro de Livros</h1>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            required
            type="text"
            name="nome"
            id="nome"
            className="form-control"
            value={NomeLivro}
            onChange={(e) => setNomeLivro(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="NomeAutor">Autor</label>
          <input
            required
            type="text"
            name="NomeAutor"
            id="NomeAutor"
            className="form-control"
            value={Autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genero">Gênero</label>
          <select
            name="genero"
            id="genero"
            className="form-control"
            onChange={(e) => setGeneroId(e.target.value)}
          >
            <option selected>Selecione um Gênero</option>
            {Generos.map((gnr) => (
              <option key={gnr.id} value={gnr.id}>
                {gnr.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="centerButton">
          <button type="submit" className="btn btn-success btn-3">
            Adicionar
          </button>
        </div>
      </div>
    </form>
  );
}
export default FormLivros;
