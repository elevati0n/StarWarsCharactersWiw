import { ResourceType, ResourceUrl, Resource} from "./Base"
import { Film } from "./Film"
import { PagedResult } from "./PagedResults"
import { People } from "./People"
import { Planets } from "./Planet"
import { Species } from "./Species"

import { FILMS, PEOPLE, PLANETS, SPECIES } from "./SW_API_KEYS"

export const SW_API_TYPES = {
  BASE: {ResourceType, ResourceUrl, Resource},
  [PEOPLE]: People,
  [PLANETS]: Planets,
  [SPECIES]: Species,
  [FILMS]: Film,
  RESPONSE: PagedResult
}