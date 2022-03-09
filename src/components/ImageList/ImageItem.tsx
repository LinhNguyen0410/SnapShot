import { addToLikedList, likeState } from "@recoilState/likeState";
import {
  BoxModal,
  CloseButton,
  Image,
  ImageModal,
  LikeButton
} from "@styles/style";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

function ImageItem({ imageItem }: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [like, setLike] = useState<boolean>(false);

  // when like => set into liked list
  const [likedList, setLikedList] = useRecoilState(likeState);


  const handleClickLike = (imageItem: any) => {
    setLike(!like);
    const newLike = addToLikedList(likedList, imageItem);
    setLikedList(newLike);
  };

  const handleClickUnLike = () => {
    setLike(!like);
  };

  const handleImageClick = (url: string) => {
    setUrl(url);
    setShowModal(true);
  };

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <Image
          src={imageItem.urls.full}
          onClick={() => handleImageClick(imageItem.urls.full)}
        />

        {/* toggle like icon */}
        {like ? (
          <LikeButton onClick={handleClickUnLike}>
            <i className="fa-solid fa-heart liked"></i>
          </LikeButton>
        ) : (
          <LikeButton onClick={() => handleClickLike(imageItem)}>
            <i className="fa-regular fa-heart "></i>
          </LikeButton>
        )}
        {/* toggle like icon */}
      </div>

      {showModal && (
        <BoxModal>
          <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
          <ImageModal src={url} />
        </BoxModal>
      )}
    </>
  );
}

export default ImageItem;
