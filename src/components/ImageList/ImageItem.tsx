import { log } from 'console';
import React from 'react';
import { Image } from '../../styles/style';

function ImageItem({imageItem} : any) {
    
    return (
        <>
        <Image src={imageItem.urls.full}/>
        </>
    );
}

export default ImageItem;