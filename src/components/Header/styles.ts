import styled from "styled-components";
import { pixelToRem } from '../../utils/pixeltorem'

export const Container = styled.header`
  max-width: calc(1091px + 2rem);
  min-width: 360px;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: ${pixelToRem(41)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: ${pixelToRem(100)};
    height: ${pixelToRem(48.11)};
  }

  @media screen and (max-width: 480px){
    margin-top: ${pixelToRem(14)};
  }
`

export const SocialLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    & + a {
      margin-left: ${pixelToRem(28)};
    }

    img {
      width: ${pixelToRem(24)};
      height: ${pixelToRem(24)};
    }

    @media (min-width: 930px) {
      &:hover {
        img {
          animation: fadeInSocial 1s infinite alternate;
        }
      }

      @keyframes fadeInSocial {
        100% {
          transform: translateY(-5px);
          opacity: 50%;
        }
      }
    }
  }
`