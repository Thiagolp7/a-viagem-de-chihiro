import { Container, SocialLinks } from "./styles";

export function Header(){
  return (
    <Container>
        <img src="/assets/logo.svg" alt="logo" />
        <SocialLinks>
          <a href="#">
            <img src="/assets/facebook.svg" alt="Facebook Logo" />
          </a>
          <a href="#">
            <img src="/assets/instagram.svg" alt="Instagram Logo" />
          </a>
          <a href="#">
            <img src="/assets/twitter.svg" alt="Twitter Logo" />
          </a>
          <a href="#">
            <img src="/assets/youtube.svg" alt="Youtube Logo" />
          </a>
        </SocialLinks>
    </Container>
  )
}