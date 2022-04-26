import React from 'react';
import * as Styled from './mainstyle';


const App = () => {
 return (
  <Styled.Container>
    <Styled.Header>
      <Styled.InnerItem>
        header
      </Styled.InnerItem>
    </Styled.Header>

    <Styled.Main>
      <Styled.H1>Patrick Lucas</Styled.H1>

      <Styled.RowSection>
        
        <Styled.Article>

        </Styled.Article>

        <Styled.Article>

        </Styled.Article>

        <Styled.Article>
          <Styled.H2>Desenvolvedor front-end</Styled.H2>
          <Styled.P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Styled.P>
        </Styled.Article>

      </Styled.RowSection>
    </Styled.Main>

  </Styled.Container>
 );
}

export default App;