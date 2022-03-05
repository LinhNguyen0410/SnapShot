import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Search";
import Logo from "./components/Logo";
import { Container } from "./styles/style";
import Tag from "./components/Tags";
import TitleSearch from "./components/TitleSearch";
import ImageList from "./components/ImageList/ImageList";
import imageApi from "./apis/imageApi";
import { AxiosResponse } from "axios";

function App() {
  const [image, setImage] = useState<AxiosResponse | [] | void>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // call API
  useEffect(() => {
    (async () => {
      try {
        const responseUrl = await imageApi.getAll();
        setImage(responseUrl.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (searchTerm) {
          const getImageByName = await imageApi.getWithSearch(searchTerm);
          setImage(getImageByName.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchTerm]);

  // event
  const handleTagClick = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <Container>
      <Logo />
      <Input />
      <Tag onClickTag={handleTagClick} />
      <TitleSearch searchTerm = {searchTerm} />
      <ImageList imageData={image} />
    </Container>
  );
}

export default App;
