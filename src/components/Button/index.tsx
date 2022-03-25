
import { ReactElement } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  children: ReactElement
  onClick: (boolean) => void;
  bgOn?: boolean;
}

export function Button({onClick, bgOn, children}: ButtonProps ){
  return(
    <ButtonContainer onClick={onClick} bgOn={bgOn}>
      {children}
    </ButtonContainer>
  )
}