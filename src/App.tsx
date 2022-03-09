import imageApi from "@apis/imageApi";
import ImageList from "@components/ImageList/ImageList";
import LikeQuantity from "@components/LikeQuantity";
import Logo from "@components/Logo";
import Input from "@components/Search";
import Tag from "@components/Tags";
import TitleSearch from "@components/TitleSearch";
import { imageListState } from "@recoilState/imageState";
import { Container } from "@styles/style";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import "./App.css";

function App() {

  // const [image, setImage] = useState<AxiosResponse | [] | void>([]);
  const [images,setImages] = useRecoilState(imageListState)
  const [searchTerm, setSearchTerm] = useState<string>("");

  // call API
  useEffect(() => {
    (async () => {
      try {
        const responseUrl = await imageApi.getAll();
        setImages(responseUrl.data);
      } catch (error) {
        console.log('Image Not Found', error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (searchTerm) {
          const getImageByName = await imageApi.getWithSearch(searchTerm);
          setImages(getImageByName.data.results);
        }
      } catch (error) {
        console.log('Image Not Found', error);
      }
    })();
  }, [searchTerm]);

  // event
  const handleTagClick = (value: string) => {
    setSearchTerm(value);
  };

  const handleInputChange = (value :string) => {
    setSearchTerm(value)
  }
  return (
    <Container>
      <Logo />
      <Input onChange = {handleInputChange} />
      <Tag onClickTag={handleTagClick} />
      <LikeQuantity/>
      <TitleSearch searchTerm = {searchTerm} />
      <ImageList imageData={images} />
    </Container>
  );
}

export default App;
