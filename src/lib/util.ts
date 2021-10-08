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
