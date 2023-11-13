import React, { Component } from 'react';
import { fetchImages } from 'services/getImages';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import Loader from 'components/Loader/Loader';
import LoadMoreButton from 'components/LoadMoreBtn/LoadMore';
import { ImageGalleryList } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    page: 1,
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      try {
        this.setState({ isLoading: true, page: 1 });
        const images = await fetchImages(this.props.searchText, 1);

        if (images.length === 0) {
          alert('Sorry, there are no images matching your search.');
          return;
        }

        this.setState({ images });
      } catch (error) {
        console.error('Error fetching images:', error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  loadMore = async () => {
    try {
      this.setState(prevState => ({
        isLoading: true,
        page: prevState.page + 1,
      }));
      const newImages = await fetchImages(
        this.props.searchText,
        this.state.page + 1
      );
      const imgPerPage = 12;
      if (newImages.length > 0) {
        this.setState(prevState => ({
          images: [...(prevState.images || []), ...newImages],
        }));
      }

      if (newImages.length < imgPerPage) {
        alert("You've reached the end of search results.");
      }
    } catch (error) {
      alert('Error fetching more images:', error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        {isLoading && <Loader />}
        {images && (
          <>
            <ImageGalleryList>
              {images.map(image => (
                <GalleryItem  key={image.id}
            img={image.webformatURL}
            largeImg={image.largeImageURL}
            tag={image.tags}
          />
              ))}
            </ImageGalleryList>
            {images.length > 0 && (
              <LoadMoreButton onClick={this.loadMore} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Load More'}
              </LoadMoreButton>
            )}
          </>
        )}
      </div>
    );
  }
}

export default ImageGallery;
