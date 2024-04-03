// @ts-ignore
import { useSwapi } from "react-swapi";
import React from "react"

export function SwApiApp() {
  const { data, isLoading, error } = useSwapi("people", { name: "skywalker" });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{JSON.stringify(data)}</div>;
}