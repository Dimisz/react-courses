import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Glpj-JAbFk5zxELT1jIhfm9Rvecg0sKPfc6sKHa5gd4'
    },
    params: {
      query: term
    }
  });
  
  return response.data.results;
};

export default searchImages;