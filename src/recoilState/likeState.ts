import { atom, selector } from "recoil";

interface LikedInterface {
  id: string;
  quantity: number;
}
// save state at here...........
export const likeState = atom({
  key: "Liked List",
  default: [],
});

export const totalLiked = selector({
  key: "Get Liked List",
  get: ({ get }) => {
    
    const likedList: object[] = get(likeState);
    return likedList.reduce((total:number,likeItem :any) => {
      return total += (likeItem.quantity)
    },0);
  },
});

// this func nhận vào list đã thích hiện tại + id image moi like => return ds đã thích mới nhất...
export const addToLikedList = (currentListLiked: any[], newLiked: string) => {
  const newListLiked: any = [...currentListLiked];

  const foundIndex = currentListLiked.findIndex((item) => item.id === newLiked);

  if (foundIndex <= 0) {
    newListLiked.push({
      id: newLiked,
      quantity: 1,
    });
  }
  return newListLiked;
};

export const handleUnliked = (
  currentListLiked: any[],
  idUnliked: string
) => {
  const newListLiked: any = [...currentListLiked];
  return newListLiked.filter((image: LikedInterface) => image.id !== idUnliked);
};
