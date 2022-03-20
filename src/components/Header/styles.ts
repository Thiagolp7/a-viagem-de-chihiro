import styled from "styled-components";

export const Container = styled.header`
  max-width: calc(1091px + 2rem);
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 41px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
    height: 48.11px;
  }
`

export const SocialLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    /* padding: 13px; */

    & + a {
      margin-left: 28px;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }



`