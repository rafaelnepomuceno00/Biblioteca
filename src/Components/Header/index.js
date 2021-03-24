import React from 'react'
import '../../App'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark Header ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Gerenciamento de Biblioteca <span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</a>
        <div className="dropdown-menu headerBg" aria-labelledby="dropdown08">
          <a className="dropdown-item" href="#">Lista</a>
          <a className="dropdown-item" href="#"> Cadastro de Livros</a>
          <a className="dropdown-item" href="#"> Cadastro de Autores</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header
