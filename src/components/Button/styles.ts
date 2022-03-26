
import styled from 'styled-components'
import { pixelToRem } from '../../utils/pixeltorem'

interface ButtonContainerProps {
  bgOn?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: var(--neutral);
  background: ${({ bgOn }) => bgOn ? 'var(--primary)' : 'transparent' };

  padding: ${pixelToRem(8)} ${pixelToRem(32)};
  border: 2px solid var(--primary);

  transform: skewX(-35deg);
  transition: .3s ease-in;

  span {
    display: inline-block;
    font-size: ${pixelToRem(16)};
    line-height: ${pixelToRem(28.8)};
    font-weight: 500;
    white-space: nowrap;


    transform: skewX(35deg);
    text-transform: uppercase;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: ${pixelToRem(20)};
      height: ${pixelToRem(20)};
      margin-right: ${pixelToRem(10)};
      animation: shake .6s infinite alternate;

    }
  }

  &:hover {
    filter: brightness(.9);
    background: ${({bgOn}) => ( !bgOn ? '#628E75' : '')};

    span {
      img {
        animation: none
      }
    }
  }

  @keyframes shake {
    100% {
      transform: translateX(3px);
    }
  }
`