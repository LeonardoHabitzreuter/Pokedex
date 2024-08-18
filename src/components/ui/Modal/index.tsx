import { Container, ModalStyled } from './styles'

type Props = {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
}

export default function Modal ({ open, children, handleClose }: Props) {
  return (
    <ModalStyled open={open} onClose={handleClose}>
      <Container>{children}</Container>
    </ModalStyled>
  )
}
