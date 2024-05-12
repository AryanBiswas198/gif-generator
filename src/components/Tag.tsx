import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState<string>("car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="flex flex-col items-center bg-white border-2 border-gray-300 rounded-xl p-4 h-96 w-3/4 mb-10 ">
      <h3 className="text-xl font-semibold tracking-wider mb-4">
        Random Tag Generator
      </h3>

      <div className="flex justify-center items-center mb-4 h-60 w-96">
        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} alt="Random Tag GIF" className="h-80 w-96" />
        )}
      </div>

      <input
        type="text"
        placeholder="Enter Tag"
        onChange={(e) => setTag(e.target.value)}
      />

      <button
        onClick={() => fetchData()}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
