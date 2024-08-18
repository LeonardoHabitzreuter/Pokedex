import { useState, useCallback } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Container } from './styles'

type Props = {
  placeholder: string
  value: string
  onChange(value: string): void
}

export default function SearchInput ({ placeholder, value, onChange }: Props) {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  return (
    <Container $isFocused={isFocused}>
      <SearchIcon />
      <input
        placeholder={isFocused ? '' : placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  )
}