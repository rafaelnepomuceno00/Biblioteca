import './App.css';
import Header from './Components/Header';
import Livros from './Components/Tabelas/Conteudos/Livros';
import Tabela from './Components/Tabelas/Tabela';

function App() {
  return (
    <>
    <Header/>
    <div className=' container background'>
  <div className='center'>
  <Tabela>
      <Livros></Livros>
    </Tabela>
  </div>

    </div>
    </>
    );
}

export default App;
