import Container from './Container/Container';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Favorite from './Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import List from './List/List';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/list/:listId' element={<List />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
