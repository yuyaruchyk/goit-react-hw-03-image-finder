import React, { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreButton from './LoadMoreBtn/LoadMore';

class App extends Component {
  state = {
    images: [],
    searchText: '',
    isLoading: false,
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <Container>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery searchText={this.state.searchText} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <LoadMoreButton loadMoreBtnClick={this.onLoadMoreClick} />
        )}
      </Container>
    );
  }
}

export default App;
