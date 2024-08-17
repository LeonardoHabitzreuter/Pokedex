import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 30px 80px;

  > h1 {
    font-weight: bold;
    font-size: 50px;

    color: ${({ theme }) => theme.colors.text.black};
  }

  > svg {
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: -1;
    height: 100vh;
    width: auto;
  }

  ${media.lessThan('large')`
    padding: 10px;
  `};
`;

export const PokemonsList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;

  ${media.lessThan('huge')`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 50px;
  `};
`;
