import React, {useState, useEffect} from 'react';
import {loadFilms} from '../../services/loadFilms';

import {
  Container,
  Content,
  Button,
  Text,
  LoadingIcon,
  FlatList,
  FlatView,
  Image,
  ViewMovies,
} from './styles';

export function Home() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleLoadButton = async () => {
    setLoading(true);
    const {data} = await loadFilms();

    if (data) {
      setMovies(data);
      setLoading(false);
    } else {
      console.log('errs:', data);
      setLoading(false);
      alert('Error');
    }
  };

  return (
    <Container>
      <Content>
        <Button onPress={handleLoadButton}>
          <Text>Carregar filmes</Text>
        </Button>
      </Content>
      {loading ? (
        <LoadingIcon color={'green'} />
      ) : (
        <FlatView>
          <FlatList
            data={movies}
            renderItem={({item}) => (
              <ViewMovies>
                <Text>{item.titulo}</Text>
                <Image source={{uri: item.avatar}} />
              </ViewMovies>
            )}
            keyExtractor={item => item.titulo}
          />
        </FlatView>
      )}
    </Container>
  );
}
