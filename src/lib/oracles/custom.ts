import { ICustomOracle, IRow } from 'src/components/models';
import { useOracles } from 'src/store/oracles';
import { d } from '../roll';
import { uid } from 'quasar';

export const NewCustomOracle = (name: string): ICustomOracle => {
  return {
    $id: 'Ironsworn/Oracles/Custom/' + uid(), // Ensure IDs are unique
    Name: name,
    Dice: '1d100',
    Display: {},
    Category: 'Custom',
    Source: {},
    Table: <IRow[]>[],
  };
};

export const rollCustom = (id: string): string => {
  const oracles = useOracles();
  let out = 'No match found';

  const o = oracles.data.find((o) => o.$id === id);
  if (o) {
    const splitD = o.Dice?.split('d') as string[];
    let n = 0;

    for (let i = 0; i < +splitD[0]; i++) {
      n += d(+splitD[1]);
    }

    const res = o.Table?.find((r) => r.Floor <= n && r.Ceiling >= n)?.Result;
    if (res) out = res;
  }

  return out;
};
