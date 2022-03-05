import React, { useState } from "react";
import { BoxModal, CloseButton, Image, ImageModal } from "../../styles/style";


function ImageItem({ imageItem }: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const handleImageClick = (url: string) => {
    setUrl(url);
    setShowModal(true);
  };
  return (
    <>
     <div style={{overflow:'hidden', borderRadius:'10px'}}>
     <Image
        src={imageItem.urls.full}
        onClick={() => handleImageClick(imageItem.urls.full)}
      />
     </div>
      {showModal && (
        <BoxModal>
          <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
          <ImageModal src={url}/>
        </BoxModal>
      )}
    </>
  );
}

export default ImageItem;
