import React from "react";
import { TagList } from "../styles/style";

interface category {
  id: number;
  name: string;
}
const categories = [
  {
    id: 1,
    name: "People",
  },
  {
    id: 2,
    name: "City",
  },
  {
    id: 3,
    name: "Sports",
  },
  {
    id: 4,
    name: "Natural",
  },
  {
    id: 5,
    name: "Technology",
  },
];

function Tag({onClickTag}: any) {
    
  const handleClickTag = (value :string) => {
      if(onClickTag) onClickTag(value)
  };

  return (
    <TagList>
      {categories.map((item: category) => (
        <li key={item.id} onClick={() => handleClickTag(item.name)}>
          {item.name}
        </li>
      ))}
    </TagList>
  );
}

export default Tag;
