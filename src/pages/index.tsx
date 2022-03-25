import Head from 'next/head'
import { useState } from 'react'
import { VideoModal } from '../components/VideoModal'
import {  Button, Container, Content, ImgContainer } from '../styles/home.styles'

export default function Home() {
  const [videoModalIsOpen, setVideMOdalIsOpen] = useState(false);
  const [trailer, setTrailer] = useState(false);

  function handleVideoModalOpen(trailer: boolean){
    setVideMOdalIsOpen(true)
    trailer ? setTrailer(true) : setTrailer(false)
  }
  
  function handleVideoModalClose(){
    setVideMOdalIsOpen(false)
  }

  return (
    <>
      <Head>
        <title>A Viagem de Chihiro</title>
      </Head>
      <VideoModal 
        videoModalIsOpen={videoModalIsOpen} 
        handleVideoModalClose={handleVideoModalClose}
        trailer={trailer}  
      />
      <Container>
        <Content>
          <p>HAYAO MIYAZAKI</p>
          <h1>A viagem de Chihiro</h1>
          <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
          <div>    
            <Button bgOn={true} onClick={() => handleVideoModalOpen(false)}>
              <span>
                <img src="/assets/play.svg" alt="Play logo" />
                Assitir Agora
              </span>
            </Button>
            <Button onClick={() => handleVideoModalOpen(true)}>
              <span>Assista o trailer</span>
            </Button>
          </div>
        </Content>

        <ImgContainer>
          <div className='ghost-1'>
            <img 
              src="/assets/ghost-1.svg" 
              alt="fantasma chihiro" 
              className='ghost-1'
            />
          </div>
          <div className='ghost-2'>
            <img 
              src="/assets/ghost-2.svg" 
              alt="fantasma chihiro" 
              className='ghost-2'
            />
          </div>
        </ImgContainer>
      </Container>
    </>
  )
}
