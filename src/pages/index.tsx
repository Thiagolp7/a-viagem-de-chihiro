import Head from 'next/head'
import {  Button, Container, Content, ImgContainer } from '../styles/home.styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>A Viagem de Chihiro</title>
      </Head>

      <Container>
        <Content>
          <p>HAYAO MIYAZAKI</p>
          <h1>A viagem de Chihiro</h1>
          <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
          <div>    
            <Button bgOn={true} >
              <span>
                <img src="/assets/play.svg" alt="Play logo" />
                Assitir Agora
              </span>
            </Button>
            <Button>
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
