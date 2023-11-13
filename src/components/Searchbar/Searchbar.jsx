import React, { Component } from 'react';
import { SearchForm, Header, SearchBtn, SearchInput } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };


  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <AiOutlineSearch size={30} />
          </SearchBtn>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

