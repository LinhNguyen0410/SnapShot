import React from 'react';
import { BoxModal, CloseButton } from '../../styles/style';

interface UrlProps{
    url :string
}

function Modal({url} :UrlProps) {
    console.log('modal', url);
    
    return (
       <BoxModal>
           <CloseButton>Cancel</CloseButton>
       </BoxModal>
    );
}

export default Modal;