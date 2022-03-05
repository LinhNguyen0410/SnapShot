import React from 'react';
import { SearchText } from '../styles/style';

interface Title{
    searchTerm : string
}

function TitleSearch({searchTerm} : Title) {
    return (
        <SearchText>
            {searchTerm ? `${searchTerm} Image` : ``  }
        </SearchText>
    );
}

export default TitleSearch;