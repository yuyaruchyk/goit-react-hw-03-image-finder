import { Component } from 'react';

import { SearchBar } from './Searchbar/Searchbar';
import { List } from './ImageGallery/ImageGallery';
import  LoadMoreButton  from './LoadMoreBtn/LoadMore';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';
import { fetchImages } from 'services/getImages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    valueSearch: '',
    page: 1,
    isLoading: false,
    isError: false,
  };

  handleSubmit = value => {
    if (value.trim() === '') {
      return;
    } else {
      this.setState({
        valueSearch: `${Date.now()}/${value}`,
        page: 1,
        images: [],
      });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { valueSearch, page } = this.state;
    if (prevState.valueSearch !== valueSearch || prevState.page !== page) {
      const valueAfterSlash = valueSearch.split('/').pop();
      try {
        this.setState({ isLoading: true, isError: false });
        const response = await fetchImages(valueAfterSlash, page);
        const newImages = response.data.hits;
        const totalHits = response.data.totalHits;

        if (newImages.length === 0) {
          toast.error('No more images');
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...newImages],
            totalHits,
          }));
        }
      } catch (error) {
        toast.error('Oops! Something went wrong! Try reloading the page!');
        this.setState({ isError: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images, isLoading, totalHits } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleSubmit} />
        {images.length > 0 && <List images={images} />}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && totalHits > images.length && (
          <LoadMoreButton onClick={this.handleLoadMore} />
        )}
       
        <ToastContainer />
      </Container>
    );
  }
}

export default App;