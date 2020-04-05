import React, { useState } from "react";
import CocktailList from "../../components/CocktailList";
import { useFetchAPI, getQueryString } from '../../hooks';
import Loader from "../../components/Loader";

export default function HomePage() {
  const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  const [firstLetter, setFirstLetter] = useState('a');
  const { isLoading, isError, data, setUrl } = useFetchAPI(`${baseUrl}?${getQueryString({ f: firstLetter})}`);

  return (
    <>
      {isLoading && <Loader />}
      {data && <CocktailList drinks={data.drinks}/>}
    </>
  );
}
