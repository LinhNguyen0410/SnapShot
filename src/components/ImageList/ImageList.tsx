import React from "react";
import { ImagesWrap } from "../../styles/style";
import ImageItem from "./ImageItem";

function ImageList({ imageData }: any) {
  return (
    <>
      <ImagesWrap>
        {imageData.map((image: object, index: number) => (
          <ImageItem key={index} imageItem={image} />
        ))}
      </ImagesWrap>
    </>
  );
}

export default ImageList;
