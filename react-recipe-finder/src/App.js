import styled from 'styled-components';
import {styledHeader as Header,AppNameComponent, AppIcon, SearchComponent,SearchIcon, SearchInput }  from'./components/headerComponent';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 20px;
justify-content: space-evenly;

`;

const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
gap: 20px;
width: 300px;
box-shadow: 0 3px 10px 0 #aaa; 
`;

const CoverImage = styled.img`
object-fit: cover;
height: 200px;
`

const RecipeName = styled.span`
font-size: 18px;
font-weight: bold;
color: #ff5d8f;
margin: 10px 0;
`

const IngredientsText = styled.span`
font-size: 18px;
border: solid 1px #a480cf;
color: black;
cursor: pointer;
padding: 10px 15px;
border-radius: 4px;
color: #a480cf;
text-align: center;
margin-bottom: 12px;
`

const SeeMoreText = styled(IngredientsText)`
color: #779be7;
border: solid 1px #779be7;
`

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

      <RecipeListContainer>
        <RecipeContainer>
          <CoverImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7FWdTYt8rNMC0EFqnElMQ26fUJV1mt71Kpw&s'/>
          <RecipeName>Matar Paneer</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
      </RecipeListContainer>


    </Container>
  );
}

export default App;
