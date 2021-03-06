import Head from 'next/head'
import { useState } from 'react'
import { VideoModal } from '../components/VideoModal'
import { Button } from '../components/Button'
import { Container, Content, ImgContainer } from '../styles/home.styles'
import { GetStaticProps } from 'next'


export default function Home() {
  const [videoModalIsOpen, setVideMOdalIsOpen] = useState(false);
  const [trailer, setTrailer] = useState(false);

  function handleVideoModalOpen(trailer: boolean){
    setVideMOdalIsOpen(true)
    setBodyScroll(false)
    trailer ? setTrailer(true) : setTrailer(false)
  }
  
  function handleVideoModalClose(){
    setVideMOdalIsOpen(false)
    setBodyScroll(true)
  }

  function setBodyScroll(scroll: true| false){
    if(scroll){
      document.body.style.overflow = 'initial';
    }
    if(!scroll){
      document.body.style.overflow = 'hidden';
      return
    }
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
            <Button 
              onClick={() => handleVideoModalOpen(true)}>
              <span>
                Assita o Trailer
              </span>
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

export const getStaticProps: GetStaticProps = async() => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 //24 hours
  }
}

