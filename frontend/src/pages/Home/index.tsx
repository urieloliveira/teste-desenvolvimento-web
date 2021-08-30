import React, { ReactNode, useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Slider,
  Switch,
  Typography,
} from '@material-ui/core';
import { ChevronLeft, ChevronRight, Search } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { fetchPokemonRequest } from '../../store/ducks/pokemon/actions';
import { RootState } from '../../store/ducks/rootReducer';
import { Container } from './styles';

import { CustomButton, CustomIconButton } from '../../components/CustomButton';
import CustomSelect from '../../components/CustomSelect';
import PokemonCard from '../../components/PokemonCard';
import CustomInput from '../../components/CustomInput';

interface IFilter {
  id: number;
  name: string;
  render: () => ReactNode;
  onClick?: string;
}

const Home = () => {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector(
    (state: RootState) => state.pokemon,
  );
  const [search, setSearch] = useState('');

  const searchQuery = (text: string) => {
    setSearch(text);
    dispatch(fetchPokemonRequest());
  };

  useEffect(() => {
    dispatch(fetchPokemonRequest());
  }, []);

  return (
    <Container>
      <div className="header">
        <CustomInput
          id="search"
          name="search"
          type="text"
          value={search}
          onChange={event => searchQuery(event.target.value)}
          placeholder="Pesquise por um Pokemon"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <CustomSelect
                  style={{ margin: '0px 4px' }}
                  label="Filtros"
                  content={
                    <div>
                      <div style={{ padding: 16 }}>
                        <FormControlLabel
                          labelPlacement="start"
                          label={
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                              style={{ maxWidth: 250 }}
                            >
                              Somente acomodações que oferecem flexibilidade de
                              cancelamento serão exibidas
                            </Typography>
                          }
                          control={<Switch />}
                        />
                      </div>
                      <Divider />
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: 16,
                        }}
                      >
                        <Typography>Limpar</Typography>
                        <CustomButton variant="contained">Salvar</CustomButton>
                      </div>
                    </div>
                  }
                />
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="subtitle1">
          Mais de {data?.meta.total} pokemons
        </Typography>
      </div>
      <section>
        {loading && <CircularProgress />}
        {!loading && error && (
          <Alert severity="warning">Houve um error com a busca!</Alert>
        )}
        {!loading &&
          !error &&
          data &&
          data?.data.length > 0 &&
          data?.data.map(pokemon => <PokemonCard data={pokemon} />)}
      </section>
    </Container>
  );
};

export default Home;
