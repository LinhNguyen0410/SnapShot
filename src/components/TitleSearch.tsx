import { SearchText } from '@styles/style';
import React from 'react';

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