import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark Header ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-md-start" id="navbarsExample08">
    <ul className="navbar-nav">
      <li className="HeaderLink nav-item active">
     
      </li>
      
      <li className="nav-item dropdown ">
        <a className="nav-link dropdown-toggle " href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</a>
        <div className="divHeader dropdown-menu headerBg dropdown-menu-lg-left" aria-labelledby="dropdown08">
        <NavLink className='HeaderLink' activeClassName='HeaderLinkActive' to='/' end> Home</NavLink>
        <br/>
        <NavLink className='HeaderLink' activeClassName='HeaderLinkActive' to='/livros' end> Livros</NavLink>
        <br/>
        <NavLink className='HeaderLink' activeClassName='HeaderLinkActive' to='/generos' end> Gêneros</NavLink>
        <br/>
        <NavLink className='HeaderLink' activeClassName='HeaderLinkActive' to='cadastro-livro' end> Cadastro de Livros</NavLink>
        <br/>
        <NavLink className='HeaderLink' activeClassName='HeaderLinkActive' to='/cadastro-genero' end> Cadastro de Gênero</NavLink>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header
