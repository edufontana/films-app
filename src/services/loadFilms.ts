import axios from 'axios';

export const loadFilms = async () => {
  try {
    const req = await axios.get('https://api.b7web.com.br/cinema/');
    return req;
  } catch (err) {
    return err;
  }
};
