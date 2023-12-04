import React from 'react';
import { format } from 'date-fns';

function CharacterDetail({ character = {} }) {
    // Format the modified date
    const formattedDate = character.modified
        ? format(new Date(character.modified), 'MMMM d, yyyy')
        : '';

    return (
        <div>
            <h2>{character.name}</h2>
            {
                // If character.thumbnail is not null, then render the image
                character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
            }
            <p>{character.description}</p>
            <p>{formattedDate}</p>
        </div>
    );
}

export default CharacterDetail;

