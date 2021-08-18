const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApi = async () => {
  try {
    const response = await fetch(END_POINT);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApi;
