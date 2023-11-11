import { fetchImages } from 'services/getImages';

const { Component } = require('react');

class ImageGallery extends Component {
  state = {};

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      fetchImages(this.props.searchText);
    }
  }

  render() {
    return;
  }
}
export default ImageGallery;
