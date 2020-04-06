import React, { useEffect } from "react";
import CocktailItem from "../../components/CocktailItem";
import { lazyLoadHandler } from "../../utils/dom";

export default function CocktailList({ drinks }) {

  useEffect(() => {    
    lazyLoadHandler();
  }, [])
  
  return (
    <section className="cockTailList">
      { !drinks && <h2>검색 결과가 없습니다.</h2> }
      { drinks && drinks.map((drink) => <CocktailItem key={drink.idDrink} drink={drink}/>)}      
    </section>
  );
}
