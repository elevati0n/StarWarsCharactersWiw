import People from "../types/models--swapi-typescript/People"

export default class SWCatalog {
  people: Array<People>
  homeworlds: any[]
  films: any[]
  species: any[]
  characterNameToId: any

  constructor() {
    this.people = []
    this.homeworlds = []
    this.films = []
    this.species = []
    this.characterNameToId = {}
  }

  getPeopleList() {
    return this.people
  }

  updatePeopleList(people: Array<People>) {
    this.people = people
  }

  addPersonByName(name: string, data: any) {
    this.people[this.characterNameToId[name]] = data
  }
  getPersonByName(name: string) {
    return this.people[this.characterNameToId[name]]
  }
  getHomeworld() {
    return this.homeworlds
  }
  getSpecies() {
    return this.species
  }
  // use this method to store the catalog as an object suitable for useState
  // ts-ignore

  // ts-ignore
  asSwRepo() {
    return {
      people: this.people,
      homeworlds: this.homeworlds,
      films: this.films,
      species: this.species,
      repo: this
    }
  }

  getAccessMethods() {
    return {
      people: {
        // need to bind this if we want to pass just update handle
        getPeopleList: this.getPeopleList.bind(this),
        updatePeopleList: this.updatePeopleList.bind(this)
      }
    }
  }
}