
import './App.css';
import Favourite from './components/favourites';
import Meals from './components/meals';
import Modal from './components/modal';
import Search from './components/search';
import { useContext } from 'react';
import { AppContext } from './context';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const {showModal, favourite, clicked}= useContext(AppContext);
  return (
    <main className='px-[3rem] py-2 bg-gradient-to-b from-sky-400 via-white to-indigo-400 to-90% max-[426px]:px-[1.5rem] max-[250px]:px-2'>
      <Header/>
      <Search/>
      {favourite.length > 0 && <Favourite/>}
      {showModal && <Modal/>}
      {console.log(clicked)}
      {(clicked && <Meals/>)} 
      
      <Footer/>
      
    </main>
  );
}

export default App;
