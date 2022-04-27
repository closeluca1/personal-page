import React from 'react';
import * as Styled from './mainstyle';
import EuLogo from './assets/eucortado.png';
import Social from './components/social';



const App = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.InnerItem>
          ...
        </Styled.InnerItem>
      </Styled.Header>

      <Styled.Main>

        <Styled.RowSection>

          <Styled.Article>
            <Styled.H1>
              Patrick Lucas
              <hr />
            </Styled.H1>

            <Styled.H2>Desenvolvedor front-end</Styled.H2>
            <Styled.P>Comecei a estudar programação no terceiro trimeste de 2018, e até novembro de 2019 consegui publicar alguns apps e jogos para mobile, o que me ajudou a aprender muito sobre lógica de programação. No começo de 2020 voltei minha atenção para programação web e é onde estou até os dias de hoje.</Styled.P>

            <Social/>

          </Styled.Article>

          <Styled.Article>
            <Styled.Box>
              <Styled.Inner>
                <Styled.Img src={EuLogo} />
              </Styled.Inner>
            </Styled.Box>
          </Styled.Article>

        </Styled.RowSection>
      </Styled.Main>

    </Styled.Container>
  );
}

export default App;