import styled from 'styled-components'
import { pixelToRem } from '../utils/pixeltorem'

export const Container = styled.main`
  max-width: calc(1091px + 2rem);
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: ${pixelToRem(76)};
  margin-bottom: ${pixelToRem(41)};

  display: flex;
  justify-content: space-between;
  align-items: center;


  @media screen and (max-width: 930px ){
    flex-direction: column-reverse;
    margin-top: ${pixelToRem(0)};
    gap: 20px;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 554px;

  p:first-child{
    font-size: ${pixelToRem(20)};
    font-weight: 700;
    line-height: ${pixelToRem(30)};
    text-transform: uppercase;
  }

  h1 {
    max-width: 445px;
    font-size: ${pixelToRem(68)};
    font-weight: 900;
    line-height: ${pixelToRem(72.12)};
    margin-top: ${pixelToRem(14)};
    text-transform: uppercase;
  }

  p {
    max-width: ${pixelToRem(445)} ;
    font-size: ${pixelToRem(16)};
    font-weight: 400;
    line-height: ${pixelToRem(28.8)};
    margin-top: ${pixelToRem(25)};
  }

  // Buttons div
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${pixelToRem(46)};
    margin-left: 16px ;


    button {
      & + button {
        margin-left: 18px;
      }
  
      @media screen and (max-width: 480px) {
        &:last-child {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 930px ){
    align-self: center;
  }

  @media screen and (max-width: 480px ){
    h1 {
      font-size: ${pixelToRem(48)};
      line-height: ${pixelToRem(52)};
    }
  }
`

interface ButtonProps {
  bgOn?: Boolean;
}

export const Button = styled.button<ButtonProps>`
  color: var(--neutral);
  background: ${({ bgOn }) => bgOn ? 'var(--primary)' : 'transparent' };
  padding: ${pixelToRem(8)} ${pixelToRem(32)};
  border: 2px solid var(--primary);

  transform: skewX(-35deg);
  transition: .3s ease-in;

  img {
    width: ${pixelToRem(20)};
    height: ${pixelToRem(20)};
    margin-right: ${pixelToRem(10)};
  }

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
  }

  &:hover {
    filter: brightness(.9);
    background: ${({bgOn}) => ( !bgOn ? '#628E75' : '')};

    span {
      img {
        animation: shake 1s infinite alternate;
      }
    }

  }

  @keyframes shake {
    100% {
      transform: translateX(3px);
    }
    
  }
`
export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  .ghost-1{
    --animation: ease 3s infinite alternate;
    --animation-delay: 1s;

    width: ${pixelToRem(244)} ;
    height: ${pixelToRem(340)} ;
    position: relative;
    display: block;

    // ghost1 - mouth
    &:after { 
      content: '';
      position: absolute;
      z-index: 1;
      width: 5%;
      height: 1.5%;
      border-radius: 50%;
      background: var(--blue-900);
      top: 46.1%;
      left: 47.5%;
      opacity: 2%;
      
      animation: ghost1-mouth var(--animation);
      animation-delay: var(--animation-delay);
    }

    img {
      width: ${pixelToRem(244)} ;
      height: ${pixelToRem(340)} ;

      animation: ghost1 var(--animation) ;
      animation-delay: var(--animation-delay);
    }

  }

  .ghost-2 {
    width: ${pixelToRem(258)};
    height: ${pixelToRem(321)};
    position: relative;
    
    img {
      width: ${pixelToRem(258)};
      height: ${pixelToRem(321)};
      position: absolute;
      left: 0;
      top: 0;
      
      animation: ghost2 7s infinite;
    }
  }

  @keyframes ghost1 {
    100% {
      transform: translateY(-30px);
      opacity: 60%;
    }
  }

  @keyframes ghost1-mouth {
    100% {
      transform: translateY(-30px) scaleX(120%) scaleY(400%);
      opacity: 90%;
    }
  }

  @keyframes ghost2 {
    50% {
      transform: translate(-20%, -10%);
      opacity: 60%;
    }
    75% {
      transform: translate(5%, -12%);
      opacity: 80%;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 100%;
    }
  }

  @keyframes ghost2-eyes {
    100% {
      height: 8%;
    }
  }

  @media screen and (max-width: 930px){
    align-self: center;
    margin-top: 15px;

    .ghost-1 {
      width: ${pixelToRem(200)} ;
      height: ${pixelToRem(271)} ;

      img {
        width: ${pixelToRem(200)} ;
        height: ${pixelToRem(271)} ;
      }
    }

    .ghost-2 {
      width: ${pixelToRem(210)} ;
      height: ${pixelToRem(281)} ;

      img {
        width: ${pixelToRem(210)} ;
        height: ${pixelToRem(281)} ;
      }
    }
  }

  @media screen and (max-width: 480px){
    .ghost-1 {
      width: ${pixelToRem(158)} ;
      height: ${pixelToRem(221)} ;

      img {
        width: ${pixelToRem(158)} ;
        height: ${pixelToRem(221)} ;
      }
    }

    .ghost-2 {
      width: ${pixelToRem(168)} ;
      height: ${pixelToRem(231)} ;

      img {
        width: ${pixelToRem(168)} ;
        height: ${pixelToRem(231)} ;
      }
    }
  }

  
`