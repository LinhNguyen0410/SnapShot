import React from "react";
import { TagList, TagTitle } from "../styles/style";

interface category {
  id: number;
  name: string;
}
const categories = [
  {
    id: 1,
    name: "VietNam ",
  },
  {
    id: 2,
    name: "Thailand ",
  },
  {
    id: 3,
    name: "Singapore ",
  },
  {
    id: 4,
    name: "China ",
  },
  {
    id: 5,
    name: "Colombia ",
  },
];

function Tag({ onClickTag }: any) {
  const handleClickTag = (value: string) => {
    if (onClickTag) onClickTag(value);
  };

  return (
    <>
      <TagTitle>Where do you want to go 🌴...</TagTitle>
      <TagList>
        {categories.map((item: category) => (
          <li key={item.id} onClick={() => handleClickTag(item.name)}>
            {item.name}
          </li>
        ))}
      </TagList>
    </>
  );
}

export default Tag;
