import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  position: relative;
  padding: 30px 80px;

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
`
