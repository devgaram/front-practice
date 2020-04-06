import React from "react";
import IntersectionObserver from "../Image/IntersectionObserver";
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
        <IntersectionObserver imageUrl={strDrinkThumb} imageAlt={strDrink} className="photo" />
        <div className="category">{strCategory}</div>
      </div>
      <div className="description">
        <ul>
          <li>
            <h2>{strDrink}</h2>            
          </li>
          <li>
            <span className="tag primary">#{strAlcoholic}</span>
            <span className="tag primary">#{strGlass}</span>
          </li>
          <li>
            <div className="tags">{strTags && strTags.split(",").map((tag, index) => <span className="tag purple" key={`${strDrink}-${tag}`}>#{tag}</span>)}</div>
          </li>
          <li>
            <p className="instruction">{strInstructions}</p>
          </li>
        </ul>
      </div>
    </article>
  );
}
