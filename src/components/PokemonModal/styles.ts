import styled, { css } from 'styled-components'
import { Typography, Grid } from '@mui/material'

type WithColor = {
  color: string
}

type TitleProps = {
  $white?: boolean
}

type BarProps = {
  size: number
}

export const Container = styled(Grid)`
  height: 100%;
`

export const List = styled.ul`
  padding: 0;
  margin-top: 35px;
  margin-bottom: 15px;
  
  li {
    padding: 10px 0;
  }
`

export const Bar = styled.div<BarProps>`
  height: 4px;
  background: ${({ theme }) => theme.colors.background.gray};
  width: 150px;
  position: relative;
  border-radius: 15px;
  &:after {
    width: ${(props) => props.size / 1.5}%;
    height: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.background.success};
    content: '';
    border-radius: 15px;
  }
`

export const CustomTitle = styled(Typography)`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.white};
  font-size: 32px;
  text-transform: capitalize;
`

export const CustomSubTitle = styled(Typography)<TitleProps>`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.success};
  font-size: 18px;

  ${(props) =>
    props.$white &&
    css`
      color: ${({ theme }) => theme.colors.text.white};
    `}
`

export const Left = styled(Grid)<WithColor>`
  background: ${(props) => props.color};
  padding: 50px 35px;
  text-align: center;
  position: relative;

  &:before {
    position: absolute;
    z-index: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url('/assets/pokeball.svg');
    background-repeat: no-repeat;
    background-position: top 106px center;
    background-size: 100px;
    left: 0;
    top: 0;
    opacity: 0.1;
  }
`

export const Relative = styled.div`
  position: relative;
`

export const Right = styled(Grid)`
  color: ${({ theme }) => theme.colors.text.gray};
  padding: 50px 35px;
`

export const ListAbilities = styled.ul<WithColor>`
  padding: 0;
  margin-top: 25px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;

  li {
    background: ${(props) => props.color};
    padding:5px;

    color: ${({ theme }) => theme.colors.text.white};
    border-radius: 5px;
    text-align: center;
  }
`

export const Img = styled.img`
  margin-bottom: 35px;
  margin-top: 15px;
`
