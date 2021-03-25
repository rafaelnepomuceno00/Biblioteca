import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
    <Header/>
    <div className=' container background'>
  <div className='center'>
    <AppRoutes/>
  </div>

    </div>
      </BrowserRouter>
    </>
    );
}

export default App;
