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

  updatePeopleList(people: Array<People>) {
    this.people = people
    return this
  }

  addPersonByName(name: string, data: any) {
    this.people[this.characterNameToId[name]] = data
    return this.asSwRepo()
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
  asSwRepo(): { films: any[]; species: any[]; repo: any; homeworlds: any[]; people: Array<People> } {
    return {
      people: this.people,
      homeworlds: this.homeworlds,
      films: this.films,
      species: this.species,
      repo: this
    }
  }
}