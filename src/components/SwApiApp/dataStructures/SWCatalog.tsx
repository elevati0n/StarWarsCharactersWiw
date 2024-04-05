import People from "../types/models--swapi-typescript/People"

export default class SWCatalog {
  people: Array<People>
  homeworlds: any[]
  films: any[]
  species: any[]

  constructor() {
    this.people = []
    this.homeworlds = []
    this.films = []
    this.species = []
    //because we consume them in order, our arrays double as maps.
  }

  getPeopleList() {
    return this.people
  }

  updatePeopleList(people: Array<People>) {
    this.people = people
  }

  // @ts-ignore
  addPerson({ person }) {
    // alert(JSON.stringify(person))
    this.people[person.uid] = person
  }

  // getPersonByName(name: string) {
  //   // @ts-ignore
  //   return this.people[this.characterNameToId[name]]
  // }

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
        // need to bind this if we want to pass just update handle
        getPeopleList: this.getPeopleList.bind(this),
        updatePeopleList: this.updatePeopleList.bind(this),
        addPerson: this.addPerson.bind(this)
    }
  }
}