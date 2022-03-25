import ReactModal from "react-modal"
import { VideoContainer } from "./VideoContainer"
import { IoCloseSharp } from 'react-icons/io5'

interface VideoModalProps {
  videoModalIsOpen: boolean;
  handleVideoModalClose: () => void;
  trailer: boolean
}

ReactModal.setAppElement('#__next')

export function VideoModal({ videoModalIsOpen, handleVideoModalClose, trailer }: VideoModalProps){

  return (
    <ReactModal 
      isOpen={videoModalIsOpen}
      onRequestClose={handleVideoModalClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      preventScroll={true}
    >
      <button 
        className="react-modal-close"
        onClick={() => {handleVideoModalClose()}}
      >
        <IoCloseSharp color="#F9F9F9"/>
      </button>
      <VideoContainer trailer={trailer}/>
    </ReactModal>
  )
}