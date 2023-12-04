import { Link } from "react-router-dom";
import { format } from "date-fns";

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        <strong>{character.name}</strong>
                    </Link>
                    <span> - {formatDate(new Date(character.modified))}</span>
                </li>
            ))}
        </ul>
    );
}

function formatDate(date) {
    return format(date, "MMMM dd, yyyy");
}
