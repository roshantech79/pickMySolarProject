import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServices } from './api.service';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rangeData: number = 50;
  data: any;
  filteredData: any;
  constructor(
    private apiServices: ApiServices,
    public dialog: MatDialog) { }
  ngOnInit() {
    this.getData();

  }

  getData() {
    this.apiServices.getRepos().subscribe(res => {
      this.data = res.data.quotes.product_quotes;
      this.valueChanged(this.rangeData);
    })
  }

  valueChanged(value) {
    this.rangeData = value;
    this.filteredData = this.data.filter(a => a.volume <= value);
    console.log("filteredData--", this.filteredData);

  }

  openDialog(data) {
    this.dialog.open(DetailsComponent, {
      width: '70vw',
      height: '98vh',
      data: { DetailData: data, filterData: this.filteredData }
    });


  }

}
