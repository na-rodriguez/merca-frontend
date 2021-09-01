import React from "react";
import Character from './Character'

export default function CharacterList({ characters, searchTerm, order }) {
  return (
    <>
    {
      filterBySearchTerm(searchTerm, characters)
      .sort(order==='DESC' ? compareDesc : compareAsc )
      .map(
          character =>
              <Character key={character.id} character={character} />
    )}
    </>
  );
}

const filterBySearchTerm = (searchTerm, characters) => {
  return characters.filter( character => {
    if( searchTerm === ""){
      return character;
    } else if (character.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return character;
    }
  })
}

function compareAsc (a, b) {
  if (a.name > b.name) { return 1; }
  if (a.name < b.name) { return -1; }
  return 0;
}

function compareDesc (a, b) {
  if (a.name < b.name) { return 1; }
  if (a.name > b.name) { return -1; }
  return 0;
}
