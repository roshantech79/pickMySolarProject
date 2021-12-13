import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  index: number;
  details: any;
  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.details = this.data.DetailData;
    console.log("this.details --", this.details);

    this.index = this.data.filterData.findIndex(p => p.model_id == this.data.DetailData.model_id);
  }

  onPrevious() {
    if (this.index > 0) {
      this.index--;
      this.details = this.data.filterData[this.index];
    }
  }

  onNext() {
    if (this.index < this.data.filterData.length - 1) {
      this.index++;
      this.details = this.data.filterData[this.index];
    }
  }
  closePopUp() {
    this.dialogRef.close();
  }

}
