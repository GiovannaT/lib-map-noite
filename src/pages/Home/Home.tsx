import Cabecalho from '../../components/cabecalho';
import BookList from '../../components/Home/BookList'
import Filters from '../../components/Home/Filters'
import './Home.css'; 

const Home = () => {
  return (
      <div className="home">
          <Filters />
          <Cabecalho />
          <BookList />
      </div>
  );
};

export default Home;
