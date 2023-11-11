import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    images: [

    ],
    searchText: '',
    
  };



  handleSearch = (searchText) => {
    this.setState({searchText})

  }






  render() {
    const { searchQuery } = this.state;
    

    return (
      <Container>
        <Searchbar handleSearch={this.handleSearch}></Searchbar>
        <ImageGallery searchText={this.state.searchText}></ImageGallery>
       
      </Container>
    );
  }
}

export default App;
