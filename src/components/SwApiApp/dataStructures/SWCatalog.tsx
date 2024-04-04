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
}