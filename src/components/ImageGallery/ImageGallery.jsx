const { Component } = require("react");

class ImageGallery extends Component {
    state = {}

    componentDidUpdate(prevState, prevProps) {

        if (prevProps.searchText !== this.props.searchText) {
            fetch()
        }
    }

    render() {
        return 
    }
    
}
export default ImageGallery