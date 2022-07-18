import { ITableItem, ICustomOracle } from 'src/components/models';
import { useOracles } from 'src/store/oracles';
import { d } from '../roll';
import { uid } from 'quasar';

export const NewCustomOracle = (name: string): ICustomOracle => {
  return {
    $id: 'Ironsworn/Oracles/Custom/' + uid(), // Ensure IDs are unique
    name: name,
    Dice: '1d100',
    d: 0,
    //Display: <IDisplayOracle>{},
    //Category: 'Custom',
    //Source: <ISource>{},
    table: <ITableItem[]>[],
  };
};

export const rollCustom = (id: string): string => {
  const oracles = useOracles();
  let out = 'No match found';

  const o = oracles.data.find((o) => o.$id === id);
  if (o) {
    const splitD = o.Dice.split('d');
    let n = 0;

    for (let i = 0; i < +splitD[0]; i++) {
      n += d(+splitD[1]);
    }

    const res = o.table.find((r) => r.match[0] <= n && r.match[1] >= n)?.text;
    if (res) out = res;
  }

  return out;
};
