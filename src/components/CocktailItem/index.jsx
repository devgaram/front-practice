import React from "react";

export default function CocktailItem({ drink }) {
  const { 
    idDrink,
    strDrink,
    strCategory,
    strTags,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb
  } = drink || {};
  return (
    <article className="cockTailItem">
      <div className="meta">
        <img
          className="photo"
          alt=""
          src={`${strDrinkThumb}?bl-30,q-50`}
        />
        <div class="category">{strCategory}</div>
      </div>
      <div className="description">
        <ul>
          <li>
            <h2>{strDrink}</h2>            
          </li>
          <li>
            <span class="tag primary">#{strAlcoholic}</span>
            <span class="tag primary">#{strGlass}</span>
          </li>
          <li>
            <div class="tags">{strTags && strTags.split(",").map((tag, index) => <span class="tag purple" key={`${strDrink}-${tag}`}>#{tag}</span>)}</div>
          </li>
          <li>
            <p class="instruction">{strInstructions}</p>
          </li>
        </ul>
      </div>
    </article>
  );
}
