import { IDenizens, ILocation, IMap, IMapCell, INPC, ISite } from 'src/components/models'
import { NewProgressTrack } from './tracks'

export const NewNPC = (): INPC => {
  return {
    name: 'New NPC',
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
    name: 'New Location',
    region: '',
    type: '',
    descriptor: '',
    trouble: '',
    notes: ''
  }
}

export const NewSite = (): ISite => {
  return {
    name: 'New Site',
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
    sites: [],
    locations: [],
    npcs: []
  }
}

export const NewMap = (image: string): IMap => {
  return {
    name: '',
    image: image,
    height: 400,
    width: 400,
    cells: {}
  }
}