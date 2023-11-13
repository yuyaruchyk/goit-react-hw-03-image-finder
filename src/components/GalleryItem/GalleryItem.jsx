import { Component } from 'react';
import React from 'react';
import { ModalImage } from 'components/Modal/Modal';
import { GalleryLi, GalleryImage } from './GalleryItem.styled';

class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { img, largeImg, tag } = this.props;

    return (
      <GalleryLi>
        <GalleryImage onClick={this.openModal} src={img} alt={tag} />

        {isModalOpen && (
          <ModalImage
            modalIsOpen={isModalOpen}
            closeModal={this.closeModal}
            largeImg={largeImg}
            topic={tag}
          />
        )}
      </GalleryLi>
    );
  }
}

export default GalleryItem;
