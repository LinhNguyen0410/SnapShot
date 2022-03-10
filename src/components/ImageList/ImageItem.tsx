import { addToLikedList, handleUnliked, likeState } from "@recoilState/likeState";
import {
  BoxModal,
  CloseButton,
  Image,
  ImageModal,
  LikeButton
} from "@styles/style";
import React, { useState } from "react";
import { useRecoilState } from "recoil";


function ImageItem({ imageItem }: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [like, setLike] = useState<boolean>(false);

  const [likedList, setLikedList] = useRecoilState(likeState);

  // when like => set into liked list
  const handleClickLike = (idLike: string) => {
    setLike(true)

    const newLike = addToLikedList(likedList, idLike);
    setLikedList(newLike);
  };

  // when unlike => filter and ignore image unliked get out liked list..
  const handleClickUnLike = (idUnLike: string) => {
    setLike(false);

    const newLikedList = handleUnliked(likedList, idUnLike)
    setLikedList(newLikedList);
  };

  // show modal
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
          <LikeButton onClick={() => handleClickUnLike(imageItem.id)}>
            <i className="fa-solid fa-heart liked"></i>
          </LikeButton>
        ) : (
          <LikeButton onClick={() => handleClickLike(imageItem.id)}>
            <i className="fa-regular fa-heart"></i>
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
