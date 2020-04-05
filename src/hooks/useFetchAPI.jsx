import { useState, useEffect, useReducer, useRef } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}

const handleError = (response) => {
  if (response.ok) return response.json();
  throw Error(response.statusText);
}

export const getQueryString = (params) => {
  return Object.keys(params).map(key => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  }).join('&');
}

export default function useFetchAPI(initialUrl, options = {}) {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: null
  }); 
  const refOptions = useRef(options);
  
  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = () => {
      dispatch({ type: 'FETCH_INIT'});
      fetch(url, { ...refOptions.current, signal: abortController.signal })
        .then(handleError)
        .then(responseJson => {
          dispatch({ type: 'FETCH_SUCCESS', payload: responseJson });
        })
        .catch(error => {
          if (error.name !== 'AbortError')
            dispatch({ type: 'FETCH_FAILURE'});
        });
    }
    fetchData();
    
    return () => {
      abortController.abort();
    }
  }, [url])

  return {...state, setUrl}
  
}