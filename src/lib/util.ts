import sanitize from 'sanitize-html';
import { IOracle } from 'src/components/models';

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const validTags = ['br', 'b', 'i', 'table', 'tr', 'td', 'th', 'ul', 'ol', 'li'];
export function stripTags(text: string): string {
  return sanitize(text, {
    allowedTags: validTags,
  });
}

export const oracleOpts = (o: IOracle): string[] => {
  const opts: string[] = [];

  o.table.forEach((item) => {
    opts.push(item.text);
  });

  return opts;
};

export const estimateHexW = (w: number, r: number): number => {
  const hw = r * 2; // width of 1 hex

  return Math.ceil(w / hw) + Math.ceil(w % hw);
};

export const estimateHexH = (h: number, r: number): number => {
  return Math.ceil(h / (r * 1.5));
};

export const now = (): string => {
  const fmt = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

  const d = new Date();
  const YYYY = d.getFullYear();
  const MM = fmt(d.getMonth() + 1);
  const DD = fmt(d.getDate());
  const hh = fmt(d.getHours());
  const mm = fmt(d.getMinutes());

  return `${YYYY}${MM}${DD}_${hh}${mm}`;
};

export const deepCopy = <T>(obj: T): T => JSON.parse(JSON.stringify(obj)) as T;
