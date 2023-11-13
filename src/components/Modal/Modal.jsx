import Modal from 'react-modal';
import { LargeImage } from './Modal.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },

  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    border: 'none',
    background: 'transparent',
  },
};

Modal.setAppElement('#root');

export const ModalImage = ({ modalIsOpen, closeModal, largeImg, topic }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Gallery Modal"
    >
      <div>
        <LargeImage src={largeImg} alt={topic} />
      </div>
    </Modal>
  );
};