import styled from 'styled-components';
import colors from './Colors';


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${colors.light};
`;

export const Header = styled.header`
  width: 100%;
  padding: 1rem 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerItem = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  hr {
    width: clamp(1rem, 10vw, 3.5rem);
    height: 4px;
    border: none;
    margin-top: .5rem;
    background: ${colors.primary};
  }
`;

export const H1 = styled.h1`
  font-size: clamp(1.2rem, 10vw, 3rem);
  font-weight: 500;
  text-aling: center;
  margin-bottom: 1rem;
  color: ${colors.dark};
`;

export const RowSection = styled.section`
  width: 90%;
  max-width: 1080px;
  display: flex;
  aling-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap-reverse;
`;

export const Article = styled.article`
  width: 100%;
  height: auto;
  
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;

  @media(min-width: 720px) {
    width: clamp(340px, 44vw, 520px);
  }
`

export const H2 = styled.h2`
  font-size: clamp(1rem, 10vw, 1.5rem);
  font-weight: 500;
  text-aling: center;
  margin-bottom: 1rem;
  color: ${colors.dark};
`;

export const P = styled.p`
  font-size: clamp(.9em, 10vw, 1rem);
  font-weight: 400;
  line-height: 1.5rem;
  color: ${colors.secondary};
`;

export const Box = styled.div`
  width: 470px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 55% 45% 56% 44% / 30% 30% 70% 70%;
  background: ${colors.primary};

  @media(max-width: 800px) {
    width: 325px;
    height: 246px;
  }
`;

export const Inner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;
  overflow: hidden;
  border-radius: 55% 45% 56% 44% / 30% 30% 70% 70%;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
