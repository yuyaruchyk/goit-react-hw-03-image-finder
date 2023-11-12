import React, { Component } from 'react';
import { fetchImages } from 'services/getImages';

class ImageGallery extends Component {
    state = {
        images: null,
    };

    async componentDidUpdate(prevProps) {
        if (prevProps.searchText !== this.props.searchText) {
            try {
                const images = await fetchImages(this.props.searchText);

        
                this.setState({ images });
            } catch (error) {
                console.error('Error fetching images:', error.message);
            }
        }
    }

 render() {
    
    const { images } = this.state;

  return (
      <div>
        

        {images && (
          <ul>
                  {images.map((image) => (
                
              <li key={image.id}>
                <img src={image.webformatURL} alt={images.id} />
                
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ImageGallery;
