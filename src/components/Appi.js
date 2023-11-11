import axios from 'axios';



async function getImageApi(searchQuery, page = 1) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=39665010-09a2b6cf277e8f7a3d78ab77d&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}

export default getImageApi;

