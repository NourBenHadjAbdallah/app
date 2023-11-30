import { Component, ViewChild } from '@angular/core';
import { MetaDataComponent } from '../meta-data/meta-data.component';
import { ParsedDataComponent } from '../parsed-data/parsed-data.component';
import { CSVExportService } from '../csvexport.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent {
  selectedComponent: string | undefined;

  @ViewChild('metadatacomponent', { static: false }) metadatacomponent: MetaDataComponent | undefined;
  @ViewChild('parseddatacomponent', { static: false }) parseddatacomponent: ParsedDataComponent | undefined;
  dataService: any;

  onComponentSelect(componentName: string): void {
    this.selectedComponent = componentName;
  }
  
  

constructor(private csvExportService: CSVExportService, dataService : DataService ){}
exportDataToCsv(): void {
  const data = this.dataService.getData();
  if (data && data.length > 0) {
    this.csvExportService.exportToCsv(data, 'exported_data.csv');
  }
}


}
