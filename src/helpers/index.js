import React from "react";

export const highLightText = (name, search) => {
  const highLighter = name.split("").map((character, index) => {
    return search
      .toLowerCase()
      .split("")
      .includes(character.toLowerCase()) ? (
      <mark key={index}>{character}</mark>
    ) : (
      <span key={index}>{character}</span>
    );
  });
  return highLighter;
};

export const highLightTextNew = (name, search) => {
  let searched = name.match(search);
  return name.replace(searched[0], `<mark>${searched[0]}</mark>`);
};
