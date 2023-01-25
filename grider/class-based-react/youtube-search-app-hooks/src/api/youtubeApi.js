import axios from 'axios';

const KEY = 'AIzaSyDWPvJD-5tQD1eSIJlsyw_2Ijc5Nw7oDdE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});