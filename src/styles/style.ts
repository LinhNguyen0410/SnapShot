import styled from "styled-components";

const primaryColor = "#000044";

export const Container = styled.div`
  width: 95%;
  background-color: #ccc;
  margin: 50px auto;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
`;

export const SearchText = styled.span`
  margin-top: 4rem;
  font-size: 3rem;
  color: ${primaryColor};
  font-weight: 700;
  text-decoration: underline;
`;

export const ImagesWrap = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 25px;
`;

export const Image = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 10px ;
`;
