import { Component } from 'react';
import { SearchForm, Header, SearchBtn, SearchInput } from './Searchbar.styled';



export default class Searchbar extends Component {
  state = {
    value: '',
    };
    

    handleChange = ({ target: { value } }) => {
    this.setState({ value });
    };
    

  handleSubmit = (e) => {
    e.preventDefault();
    const initialQuery = this.state.value.trim();
    if (!initialQuery || initialQuery === '') {
      alert('Insert some text please');
      return;
    }

    this.props.onSubmit(initialQuery);
   
    };
    

  render() {
    
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
           
            <SearchInput />
          </SearchBtn>

          <input
            
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
