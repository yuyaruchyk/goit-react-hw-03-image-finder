const GalleryItem = ({ image }) => (
  <li key={image.id}>
    <img src={image.webformatURL} alt={image.tags} />
    <p>{image.tags}</p>
  </li>
);

export default GalleryItem;