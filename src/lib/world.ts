import { ECellStatus, IDenizens, ILocation, IMap, IMapCell, INPC, ISite } from 'src/components/models';
import { NewProgressTrack } from './tracks';

export const NewNPC = (): INPC => {
  return {
    name: '',
    kin: '',
    role: '',
    goal: '',
    descriptor: '',
    disposition: '',
    activity: '',
    notes: '',
  };
};

export const NewLocation = (): ILocation => {
  return {
    name: '',
    region: '',
    type: '',
    descriptor: '',
    trouble: '',
    notes: '',
  };
};

export const NewSite = (): ISite => {
  return {
    name: '',
    objective: '',
    theme: '',
    domain: '',
    track: NewProgressTrack(),
    notes: '',
    denizens: <IDenizens>{},
  };
};

export const NewCell = (id: string, name?: string): IMapCell => {
  return {
    id: id,
    name: name ? name : id,
    stat: ECellStatus.Empty,
    sites: [],
    locations: [],
    npcs: [],
  };
};

export const CellLabel = (c: IMapCell): string => {
  return c.name;
};

export const NewMap = (image: string, name?: string): IMap => {
  return {
    name: name ? name : '',
    image: image,
    height: 1100,
    width: 825,
    hexSize: 10,
    cells: {},
  };
};
