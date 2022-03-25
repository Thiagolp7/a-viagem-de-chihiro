import styled from 'styled-components'

export const VidWrapper = styled.div`
  width: 100%;
  max-width: inherit;
`

export const VidContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 0;
  padding-bottom: 56.35%; /* 720/1280 */
  position: relative;

  iframe, 
  video {
    width: 100%;
    max-width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
  }

`