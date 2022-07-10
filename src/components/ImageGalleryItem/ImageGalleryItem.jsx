import PropTypes from 'prop-types';
import 'styles.css';

export const ImageGalleryItem = ({
  image: { webformatURL, tags },
  onClick,
}) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     })
//   ),
// };
