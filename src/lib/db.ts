import { IConfig, ICampaign, IAsset, ICustomOracle } from 'components/models';
import Dexie from 'dexie';

export class IronJournalDB extends Dexie {
  config: Dexie.Table<IConfig, number>;
  campaign: Dexie.Table<ICampaign, string>;
  assets: Dexie.Table<IAsset, string>;
  oracles: Dexie.Table<ICustomOracle, string>;

  constructor() {
    super('IronJournalDB');
    this.version(1).stores({
      config: '&id',
      campaign: '&id',
    });

    this.version(2).stores({
      config: '&id',
      campaign: '&id',
      assets: '&id',
    });

    this.version(3).stores({
      config: '&id',
      campaign: '&id',
      assets: '&id',
      oracles: '&$id',
    });

    this.config = this.table('config');
    this.campaign = this.table('campaign');
    this.assets = this.table('assets');
    this.oracles = this.table('oracles');
  }
}

export const db = new IronJournalDB();
