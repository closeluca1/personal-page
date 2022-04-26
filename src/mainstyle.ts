import styled from 'styled-components';

export type colors = {
  colors: Object;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #efefee;
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
  min-height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: clamp(1.2rem, 10vw, 3rem);
  font-weight: 500;
  text-aling: center;
  margin-bottom: 5rem;
  color: #303030;
`;

export const RowSection = styled.section`
  width: 100%;
  max-width: 1080px;
  display: flex;
  aling-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Article = styled.article`
  width: 100%;
  min-height: 50px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
`

export const H2 = styled.h2`
  font-size: clamp(1rem, 10vw, 1.5rem);
  font-weight: 500;
  text-aling: center;
  margin-bottom: 1rem;
  color: #303030;
`;

export const P = styled.p`
  font-size: clamp(.9em, 10vw, 1rem);
  font-weight: 400;
  color: #cac6bb;
`;