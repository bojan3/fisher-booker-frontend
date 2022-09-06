import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-ship-owner-page',
  templateUrl: './ship-owner-page.component.html',
  styleUrls: ['./ship-owner-page.component.css']
})
export class ShipOwnerPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openChart() {
    this.dialog.open(LineChartComponent)
  }

}
