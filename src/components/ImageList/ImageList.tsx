import React from "react";
import ImageItem from "./ImageItem";
import { ImagesWrap } from "../../styles/style";

function ImageList({ imageData }: any) {
  return (
    <ImagesWrap>
      {imageData.map((image:object,index:number) => (
        <ImageItem key={index} imageItem = {image} />
      ))}
    </ImagesWrap>
  );
}

export default ImageList;
