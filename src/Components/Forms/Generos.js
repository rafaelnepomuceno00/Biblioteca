import React, { useState } from 'react';

function FormGenero() {
  const [Generos, SetGeneros] = useState('');

  return (
      
    <form className="Form" >
      <div>
        <h1>Cadastro de Genero</h1>
        <div className="form-group">
          <label htmlFor="Genero">Genero</label>
          <input
            required
            type="text"
            name="Genero"
            id="Genero"
            className="form-control"
            value={Generos}
            onChange={(e) => SetGeneros(e.target.value)}
          />
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

export default FormGenero;
