import { SqlResult } from './sql-result';

export interface QueryRun {
  date: Date;
  body: {content: string, type: 'sql'};
  result: SqlResult;
}
