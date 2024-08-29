import styled from 'styled-components';
import icon from '/search-icon.svg';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Header = styled.div`
  color: white;
  background-color: #ea9ab2;
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-size : 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #e27396;
  
`;

const AppNameComponent = styled.div`

`;

const SearchComponent = styled.div``;

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>Recipe Finder</AppNameComponent>
        <SearchComponent>
          <img src={icon} />
        </SearchComponent>
      </Header>
      irem
    </Container>
  );
}

export default App;
