import { VidWrapper, VidContainer } from "./styles";

interface VideoContainerProps {
  trailer: boolean;
}


export function VideoContainer({trailer}: VideoContainerProps){
  const videoSrc = 
    trailer 
    ? 'https://www.youtube.com/embed/ByXuk9QqQkk' // trailer link
    : 'https://www.youtube.com/embed/gx-cQj-3KVI' // video link
  
  return (
    <VidWrapper>
      <VidContainer>
        <iframe 
          src={videoSrc} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          >
        </iframe>
      </VidContainer>
    </VidWrapper>
  )
}