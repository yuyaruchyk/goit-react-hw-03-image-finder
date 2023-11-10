import { Component } from 'react';

import { SearchForm, Header, SearchBtn, SearchInput } from './Searchbar.styled';






export default class Searchbar extends Component {
  state = {
    txt: '',
  };

  handleInputChange = e => {
    this.setState({ txt: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const txt = this.state.txt.trim();
    if (!txt || txt === '') {
      toast.warn('Insert some text please');
      return;
    }

    this.props.onSubmit(txt);
   
  };
  render() {
    const { txt } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
           
            <SearchInput />
          </SearchBtn>

          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={txt}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
