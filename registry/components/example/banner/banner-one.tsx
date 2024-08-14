import React from "react";

const Banners = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-black p-4 text-white">
      <div className="absolute left-4 top-4 text-lg">
        <p className="text-4xl font-bold">Explore the Future</p>
      </div>
      <div className="relative mb-4 h-64 w-64 md:h-96 md:w-96">
        <img
          src="https://media.istockphoto.com/id/1055437944/photo/abstract-3d-rendering-of-polygonal-human-face.jpg?s=612x612&w=0&k=20&c=BFUMnmKulLF9uA0C2v6XCyrgyRJ4rIxLj_qbGQ8nB3U="
          alt="3D Blue Bust"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-4 right-4 text-lg">
        <p className="text-4xl font-bold">Discover UI/UX Excellence</p>
      </div>
    </div>
  );
};

export default Banners;
