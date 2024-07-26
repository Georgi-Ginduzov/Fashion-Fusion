import { useEffect, useState } from "react";
import axios from "axios";
import Slide from "../header/slideshow/slide/Slide";
import PropTypes from 'prop-types';

const DropboxImage = ({ accessToken, path }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');
  
    useEffect(() => {
      const checkPathAndFetchImage = async () => {
        try {
          const metadataResponse = await axios.post(
            'https://api.dropboxapi.com/2/files/get_metadata',
            { path },
            {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            }
          );
  
          if (metadataResponse.data) {
            const linkResponse = await axios.post(
              'https://api.dropboxapi.com/2/files/get_temporary_link',
              { path },
              {
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                  'Content-Type': 'application/json',
                },
              }
            );
            setImageUrl(linkResponse.data.link);
          }
        } catch (error) {
          console.error('Error fetching image URL:', error);
          if (error.response) {
            console.error('Response data:', error.response.data);
            if (error.response.status === 409) {
              setError('Error: Path not found. Please check the file path in Dropbox.');
            } else {
              setError(`Error: ${error.response.status} - ${error.response.data.error_summary}`);
            }
          } else if (error.request) {
            setError('Error: No response received from the server');
          } else {
            setError(`Error: ${error.message}`);
          }
        }
      };
  
      if (path) {
        checkPathAndFetchImage();
      }
    }, [accessToken, path]);
  
    if (error) {
      return <p>{error}</p>;
    }
  
    return (
        <Slide>
            {imageUrl ? <img src={imageUrl} alt="Dropbox" loading="lazy" /> : <p>Loading...</p>}
        </Slide>
    );
};

DropboxImage.propTypes = {
    accessToken: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default DropboxImage;