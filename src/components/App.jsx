import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [

    ],
    searchQuery: '',
  };

  updateQuery = newQuery => {
    this.setState(() => {
      return {
        searchQuery: newQuery,
      };
    });
  };






  render() {
    const { searchQuery } = this.state;
    

    return (
      <Container>
        <Searchbar></Searchbar>
       
      </Container>
    );
  }
}

export default App;
