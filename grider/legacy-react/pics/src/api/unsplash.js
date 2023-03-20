import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID A1-zsd0dL9DR4yG-PD7fKA3dmGEW0bpAUfJhaLP1XN8'
  }
});