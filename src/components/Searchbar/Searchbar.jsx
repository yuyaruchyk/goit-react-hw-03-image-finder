
import { SearchForm, Header, SearchBtn, SearchInput } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';



export const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={event => {
        event.preventDefault()
          onSubmit(event.target[1].value);
          event.target[1].value = '';
        }}>
        <SearchBtn type="submit">
            <AiOutlineSearch style={{ height: 24, width: 24 }} />
        </SearchBtn>
        <SearchInput 
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};







