
import { GalletyBtn, BtnContainer } from './LoadMoreBtn.styled'; 

const LoadMoreButton = ({ onClick, disabled }) => (
    <BtnContainer>
    <GalletyBtn onClick={onClick} disabled={disabled}>
    {disabled ? 'Loading...' : 'Load More'}
  </GalletyBtn>

    </BtnContainer>
  
);

export default LoadMoreButton;