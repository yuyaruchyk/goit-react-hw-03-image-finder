import { Component } from "react";
import { Container } from "./App.styled";
import Searchbar from "./Searchbar/Searchbar";





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
       
        
      </Container>
    );
  }
};