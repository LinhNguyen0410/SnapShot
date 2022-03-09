import { atom, selector } from "recoil";

interface LikeItem {
  id: string;
  quantity: number;
}
// save state at here...........
export const likeState = atom({
  key: "Like List",
  default: [],
});

export const totalLiked = selector({
  key: "Increase Liked",
  get: ({ get }) => {
    const likedList: any = get(likeState);
    return likedList.length;
  },
});


// this func nhận vào list đã thích hiện tại và return ds đã thích mới nhất...
export const addToLikedList = (currentListLiked: any[], newLiked: any) => {
  const newListLiked: any = [...currentListLiked];
  const foundIndex = currentListLiked.findIndex(item => item.id === newLiked.id);
  

 if(foundIndex <=0){
  newListLiked.push({
    id: newLiked.id,
    quantity: 1,
  });
  return newListLiked;
 }
};
