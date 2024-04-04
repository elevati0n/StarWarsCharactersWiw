// @ts-ignore
import { useSwapi } from "react-swapi";
import React, { createContext, useContext } from "react"

const SwApiContext = createContext({
  data: {
    characters: [],
    homeworlds: [],
    films: [],
    species: []
  }
})

export const useSwApiContext = () => {
  const {data: {
    characters,
    homeworlds,
    films,
    species
  }} = useContext(SwApiContext)

  return {
    characters,
    homeworlds,
    films,
    species
  }
}

// @ts-ignore
const useSwapiResource = ({resource= "", options}) => {
  // Inside your component
  const { data, isLoading, error } = useSwapi(resource, options);
  return { data, isLoading, error}
}

export const SwApiApp = () => {
  const localData = useContext(SwApiContext)

  const { data, isLoading, error } = useSwapiResource({resource: "people", options: {}});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <SwApiContext.Provider value={localData}>
      {error ?
        <p>error: {error}</p>: null
      }
      {isLoading ?
        <p>isLoading: LOOOOOADING!!</p>: null
      }
      <p>data: {JSON.stringify(data)}</p>

    </SwApiContext.Provider>

  )
}