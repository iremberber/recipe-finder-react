import styled from 'styled-components';
import {styledHeader as Header,AppNameComponent, AppIcon, SearchComponent,SearchIcon, SearchInput }  from'./components/headerComponent';

const Container = styled.div`
display: flex;
flex-direction: column;
`;



function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/hamburger.svg" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="Search Recipe"/>
        </SearchComponent>
      </Header>
      



    </Container>
  );
}

export default App;
