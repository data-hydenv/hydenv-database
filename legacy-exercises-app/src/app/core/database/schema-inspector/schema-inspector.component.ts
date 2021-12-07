import { Component, OnDestroy, OnInit } from '@angular/core';
import { toLower } from 'lodash';
import { Subscription } from 'rxjs';
import { ExerciseService } from '../../exercise.service';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-schema-inspector',
  templateUrl: './schema-inspector.component.html',
  styleUrls: ['./schema-inspector.component.scss']
})
export class SchemaInspectorComponent implements OnInit, OnDestroy {
  // subscribe to the backend status
  isOnline = false;
  backendSubscription: Subscription;

  // the SQL used to gain the info
  sql = "select table_schema as schema, table_name as table, column_name as column, data_type as type from information_schema.columns where table_schema not in ('pg_catalog', 'information_schema')";

  // container for the actual tree data
  tree: any = {};

  constructor(private settings: SettingsService, private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    // get the backend status
    this.backendSubscription = this.settings.isConnected.subscribe({
      next: status => {
        this.isOnline = status;
        if (this.isOnline) this.getSchemaInformation();
      }
    });
  }

  ngOnDestroy(): void {
    this.backendSubscription.unsubscribe();
  }

  public connectBackend(): void {
    this.settings.requestBackendConnect();
  }

  private getSchemaInformation(): void {
    const t: any = {};
    this.exerciseService.executeSql(this.sql).then(res => {
      // if successfull
      if (res.data) {
        res.data.forEach(row => {
          // add schema and table if necessary
          if (!t[row.schema]) t[row.schema] = {}
          if (!t[row.schema][row.table]) t[row.schema][row.table] = {}

          // add the column
          t[row.schema][row.table][row.column] = {name: row.column, type: row.type};
        });
        this.tree = t;
        console.log(t);
      }
    });
  }

}
