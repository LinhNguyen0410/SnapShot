import styled from "styled-components";

// variables
const primaryColor = "#000044";


export const Container = styled.div`
  width: 95%;
  margin: 50px auto;
  padding: 30px 30px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`;

export const Title = styled.div`
  color: ${primaryColor};
  font-size: 4.5rem;
  font-weight: 700;
  font-style: italic;
`;

export const TextField = styled.input`
  color: #000;
  font-size: 2rem;
  width: 50rem;
  height: 4.5rem;
  border-radius: 1rem;
  padding: 0 1rem;
  margin-top: 1rem;

  &:focus {
    border: 2px solid #000;
  }
`;

export const ButtonSubmit = styled.button`
  font-size: 1.7rem;
  padding: 5px 10px;
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 2rem;

  &:active {
    opacity: 0.7;
  }
`;

export const TagTitle = styled.h4`
  font-size: 2.4rem ;
  font-weight : 500;
  color: ${primaryColor} ;
  margin-top: 3rem ;
`;

export const TagList = styled.ul`
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
  list-style-type: none;

  & > li {
    font-size: 1.7rem;
    color: #fff;
    border-radius: 1rem;
    background-color: ${primaryColor};
    padding: 5px 15px;
    cursor: pointer;
    &:active {
      opacity: 0.7;
    }
  }
`;

export const SearchText = styled.span`
  margin-top: 4rem;
  font-size: 3rem;
  color: ${primaryColor};
  font-weight: 700;
  text-decoration: underline;
  text-transform: capitalize;
`;

export const ImagesWrap = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
`;

export const Image = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s linear;
  
  &:hover {
    transform: scale(1.1) ;
  }
`;

export const BoxModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 550px;
  background-color: #fff;
  border-radius: 10px;
  border: 10px solid #ccc;
  overflow: hidden;
  z-index:99999999
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  padding: 5px 10px;
  border-bottom-left-radius: 15px;
`;

export const ImageModal = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
