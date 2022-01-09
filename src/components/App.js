import Hero from './Hero/Hero';
import SearchForm from './SearchForm/SearchForm';
import List from './List/List';
import Container from './Container/Container';
import NavBar from './NavBar/NavBar';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </main>
  );
};

export default App;
