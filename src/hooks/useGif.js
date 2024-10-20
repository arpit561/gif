import axios from 'axios';
import { useEffect, useState } from 'react'

 
const useGif = (tag) => {
       const [gif, setGif] = useState('');
      const [loading, setLoading]= useState('false');
      const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=bpCBQ6wgHh6Wx6HxDfe0JaFTWizMWVyJ&tag=${tag}`;
    const randomUrl=  `https://api.giphy.com/v1/gifs/random?api_key=bpCBQ6wgHh6Wx6HxDfe0JaFTWizMWVyJ`;


      const fetchData = async (tag) => {   
      try {
      setLoading(true);
      const { data } = await axios.get(tag ? (tagUrl) : (randomUrl));
      const imageSource = data?.data?.images?.downsized_large?.url || 'default-image-url';
      setGif(imageSource);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching the GIF:', error);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  return {gif, loading, fetchData}
}

export default useGif;
