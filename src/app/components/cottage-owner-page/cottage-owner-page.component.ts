import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-cottage-owner-page',
  templateUrl: './cottage-owner-page.component.html',
  styleUrls: ['./cottage-owner-page.component.css']
})
export class CottageOwnerPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openChart() {
    this.dialog.open(LineChartComponent)
  }

}
