import { ECellStatus, IDenizens, ILocation, IMap, IMapCell, INPC, ISite } from 'src/components/models'
import { NewProgressTrack } from './tracks'

export const NewNPC = (): INPC => {
  return {
    name: '',
    kin: '',
    role: '',
    goal: '',
    descriptor: '',
    disposition: '',
    activity: '',
    notes: ''
  }
}

export const NewLocation = (): ILocation => {
  return {
    name: '',
    region: '',
    type: '',
    descriptor: '',
    trouble: '',
    notes: ''
  }
}

export const NewSite = (): ISite => {
  return {
    name: '',
    objective: '',
    theme: '',
    domain: '',
    track: NewProgressTrack(),
    notes: '',
    denizens: <IDenizens>{}
  }
}

export const NewCell = (): IMapCell => {
  return {
    name: '',
    stat: ECellStatus.Empty,
    sites: [],
    locations: [],
    npcs: []
  }
}

export const CellLabel = (c: IMapCell): string => {
  return c.name
}

export const NewMap = (image: string, name?: string): IMap => {
  return {
    name: name ? name: '',
    image: image,
    height: 825,
    width: 1100,
    cells: {}
  }
}