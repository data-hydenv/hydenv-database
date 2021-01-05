import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as localforage from 'localforage';
import { cloneDeep } from 'lodash-es';

import { QueryRun } from './models/query-run.model';
import { SqlResult } from './models/sql-result';


@Injectable({
  providedIn: 'root'
})
export class QueryHistoryService {
  // main container for queries
  private historyCache: QueryRun[] = [];

  // subjects for all and last 10
  public history = new BehaviorSubject<QueryRun[]>(this.historyCache);
  public last10 = new BehaviorSubject<QueryRun[]>(this.historyCache);

  // service logic
  enabled = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  /**
   * Initialize the Service. This is not done in the constructor
   * to disable the query history if needed
   */
  public init() {
    this.enabled.next(true);
    // use the .then() if some initialization should happen after the data was loaded
    this.loadAllFromStorage();
  }

  public storeQuery(sql: string, result?: SqlResult): Promise<void> {
    // if not enabled, return
    if (!this.enabled.getValue()) return Promise.resolve()

    // create the entry
    const queryRun = {
      date: new Date(),
      body: {content: sql, type: 'sql'},
    } as QueryRun;

    if (result) {
      queryRun.result = result;
    }

    // append
    this.historyCache.unshift(cloneDeep(queryRun));
    this.history.next(this.historyCache);
    this.last10.next(this.historyCache.sort((a, b) => +a.date - +b.date).slice(0, 10))

    // persist
    return this.saveAllToStorage();
  }

  /**
   * Delete the History. You can set `keepLast` to keep e.g. the
   * latest 50 entries.
   * @param keepLast number - keep the latest X entries in the history
   */
  public deleteHistory(keepLast= 0): Promise<void> {
    return localforage.removeItem('queryHistory').then(async () => {
      // check if we want to keep some items
      if (keepLast > 0) {
        const keepHistory = cloneDeep(this.historyCache.sort((a, b) => +a.date - +b.date).slice(0, keepLast));
        await localforage.setItem('queryHistory', keepHistory);
      }

    })
    // finally load the current localStorage state (either [] or keepHistory) and publish to application
    .then(() => {
      this.loadAllFromStorage().then(() => Promise.resolve())
    });
  }


  private saveAllToStorage(): Promise<void> {
    // if not enabled, return
    if (!this.enabled.getValue()) return Promise.resolve()

    return localforage.setItem('queryHistory', this.historyCache).then(() => Promise.resolve());
  }
  /**
   * Load the full query history from local storage
   */
  private loadAllFromStorage(): Promise<void> {
    return localforage.getItem<QueryRun[]>('queryHistory').then((history: QueryRun[]) => {
      // save the new cache
      this.historyCache = history ? history : [];

      const last10 = history.sort((a, b) => +a.date - +b.date).slice(0, 10)

      // publish all
      this.history.next(this.historyCache);
      this.last10.next(last10);
    });
  }
}
