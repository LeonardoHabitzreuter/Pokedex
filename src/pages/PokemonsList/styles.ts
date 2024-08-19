import styled from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: end;
`

export const PokemonsGrid = styled.ul`
  padding: 0;
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
`
