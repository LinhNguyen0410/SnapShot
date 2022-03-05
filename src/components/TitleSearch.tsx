import React from 'react';
import { SearchText } from '../styles/style';

interface Title{
    searchTerm : string
}

function TitleSearch({searchTerm} : Title) {
    return (
        <SearchText>
            {searchTerm ? `${searchTerm} Pictures` : ``  }
        </SearchText>
    );
}

export default TitleSearch;