
// import axios from "axios";
// import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  // const [gif, setGif] = useState('');
  // const [loading, setLoading]= useState('false');

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=bpCBQ6wgHh6Wx6HxDfe0JaFTWizMWVyJ`;
  //     const { data } = await axios.get(url);
  //     const imageSource = data?.data?.images?.downsized_large?.url || 'default-image-url';
  //     setGif(imageSource);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching the GIF:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // },[]);

  const {gif, loading, fetchData}= useGif();
  const clickHandler = () => {
    fetchData();
  };

  return (
    <div className="w-1/2 bg-slate-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-3xl uppercase underline font-bold">A Random Gif</h1>
      {loading? (<Spinner/>) : (<img src={gif} width="450" alt="Random Gif"/>)}
      <button onClick={clickHandler} className="w-10/12 bg-red-500 text-lg py-2 rounded-lg mb-[20px]">
        Generate
      </button>
    </div>
  );
}
