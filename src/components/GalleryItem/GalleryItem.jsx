import { GalleryLi, GalleryImage } from "./GalleryItem.styled";

const GalleryItem = ({ image }) => (
  <GalleryLi key={image.id}>
    <GalleryImage src={image.webformatURL} alt={image.tags} />
    
  </GalleryLi>
);

export default GalleryItem;