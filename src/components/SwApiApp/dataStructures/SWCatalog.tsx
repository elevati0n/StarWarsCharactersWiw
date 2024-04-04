export default class SWCatalog {
  people: any[]
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
  addPersonByName(name: string, data: any) {
    this.people[this.characterNameToId[name]] = data
    return this.people
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
  asSwRepo(): { films: any[]; species: any[]; homeworlds: any[]; people: any[]} {
    return {
      people: this.people,
      homeworlds: this.homeworlds,
      films: this.films,
      species: this.species,
    }
  }
}