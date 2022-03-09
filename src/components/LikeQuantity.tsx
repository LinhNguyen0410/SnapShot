import { totalLiked } from '@recoilState/likeState';
import { LikeTotal } from '@styles/style';
import React from 'react';
import { useRecoilValue } from 'recoil';

function LikeQuantity() {
  const likeQuantity:any = useRecoilValue(totalLiked);

    return (
         <LikeTotal>
            {`Your Liked : ${likeQuantity || 0} Images 🍄`}
        </LikeTotal>
       
    );
}

export default LikeQuantity;