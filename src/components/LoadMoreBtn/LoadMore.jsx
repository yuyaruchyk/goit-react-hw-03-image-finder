
import { GalletyBtn } from './LoadMoreBtn.styled'; 

const LoadMoreButton = ({ onClick, disabled }) => (
  <GalletyBtn onClick={onClick} disabled={disabled}>
    {disabled ? 'Loading...' : 'Load More'}
  </GalletyBtn>
);

export default LoadMoreButton;