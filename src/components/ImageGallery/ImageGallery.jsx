
import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import { GalleryList } from "./ImageGallery.styled";


export const List = ({ images }) => {
    return (
    <GalleryList>
      {images.map(image => {
        return (
          <GalleryItem
            key={image.id}
            img={image.webformatURL}
            largeImg={image.largeImageURL}
            tag={image.tags}
          />
        );
      })}
    </GalleryList>
  );
}


