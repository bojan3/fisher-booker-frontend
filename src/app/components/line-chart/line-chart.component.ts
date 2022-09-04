import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import { Stats } from 'src/app/entity/Stats';
import { StatsService } from 'src/app/services/stats.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<any>;

  selectedYear!: number;
  selectedMonth!: number;
  showSelect = false;
  showChart = false;
  years: number[] = [];
  stats: Stats[] = [];

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {

    this.statsService.getYears().subscribe((years) => {
      this.years = years;
      this.showSelect = true;
      this.selectedYear = years[0];

      this.statsService.getYearlyStats(this.selectedYear).subscribe((stats) => {
        this.stats = stats;
        this.buildChart();
        this.showChart = true;
      })
    })

  }

  buildChart() {

    var names = [];
    var income = [];
    var people = [];

    for (let stat of this.stats) {
      names.push(stat.realEstate);
      income.push(stat.income);
      people.push(stat.numOfPeople);
    }

    this.chartOptions = {
      series: [
        {
          name: "Zarada",
          data: income
        },
        {
          name: "Broj ljudi",
          data: people
        },
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: names
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }

  onChange() {
    this.statsService.getYearlyStats(this.selectedYear).subscribe((stats) => {
      this.stats = stats;
      this.buildChart();
    })
  }

  tabChanged(event: any) {
    console.log(event);
  }

}
