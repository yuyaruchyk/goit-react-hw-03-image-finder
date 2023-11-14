import { Component } from "react";
import { GalleryImage, Image } from "./GalleryItem.styled";
import { ModalImage } from '../Modal/Modal';

export class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { img, tags, largeImg } = this.props;
    return (
    <GalleryImage>
        <Image src={img} alt={tags} onClick={this.openModal}/>
        <ModalImage
          isOpen={isModalOpen}
          onClose={this.closeModal}
          largeImage={largeImg}
          tags={tags}
        />
    </GalleryImage>
    )
  }
}