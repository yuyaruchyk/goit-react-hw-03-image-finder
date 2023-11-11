import { Component } from 'react';
import { SearchForm, Header, SearchBtn, SearchInput } from './Searchbar.styled';



export default class Searchbar extends Component {
  state = {
    initialQuery: '',
  };

  handleInputChange = e => {
    this.setState({ initialQuery: e.currentTarget.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const initialQuery = this.state.initialQuery.trim();
    if (!initialQuery || initialQuery === '') {
      alert('Insert some text please');
      return;
    }

    this.props.onSubmit(initialQuery);
   
  };
  render() {
    const { initialQuery } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchBtn type="submit">
           
            <SearchInput />
          </SearchBtn>

          <input
            
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={initialQuery}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
