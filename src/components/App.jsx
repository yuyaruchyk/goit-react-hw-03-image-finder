import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Container } from "./App.styled";



export class App extends Component {
  state = {
    image: [],
    searchQuery: '',
    
  }
  
  handleFormSubmit = query => {
    this.setState({ searchQuery: query })
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <Container>
        <Searchbar
          onSubmit={this.handleFormSubmit}
        />
        <ImageGallery
          searchQuery={searchQuery}
        />
        
      </Container>
    );
  }
};