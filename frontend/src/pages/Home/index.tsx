import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonRequest } from '../../store/ducks/pokemon/actions';
import { RootState } from '../../store/ducks/rootReducer';
import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector(
    (state: RootState) => state.pokemon,
  );
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const searchCity = () => {
    if (search.length > 2) {
      dispatch(fetchPokemonRequest(search));
      setIsSearch(true);
    }
  };

  return (
    <Container>
      <h1>Pokemon</h1>
    </Container>
  );
};

export default Home;
