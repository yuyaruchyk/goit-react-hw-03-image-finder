import React, { Component } from 'react';
import { fetchImages } from 'services/getImages';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import Loader from 'components/Loader/Loader';
import { ImageGalleryList } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      try {
        this.setState({ isLoading: true });
        const images = await fetchImages(this.props.searchText);

        this.setState({ images });
      } catch (error) {
        console.error('Error fetching images:', error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        {isLoading && <Loader/>}
        {images && (
          <ImageGalleryList>
            {images.map((image) => (
              <GalleryItem key={image.id} image={image} />
            ))}
          </ImageGalleryList>
        )}
      </div>
    );
  }
}

export default ImageGallery;