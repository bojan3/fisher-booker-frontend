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
import { DatePeriodDTO } from 'src/app/entity/DTO/DatePeriodDTO';
import { RealEstateType } from 'src/app/entity/RealEstateType';
import { Stats } from 'src/app/entity/Stats';
import { AccountService } from 'src/app/services/account.service';
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
  selectedMonth: number = 1;
  showSelect = false;
  showChart = false;
  period: DatePeriodDTO = new DatePeriodDTO(new Date(), new Date());
  years: number[] = [];
  stats: Stats[] = [];
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  currentTab = 0;
  type!: RealEstateType

  constructor(private statsService: StatsService, private accountService: AccountService) {
    switch(this.accountService.currentUser.role){
      case "ROLE_COTTAGE_OWNER": {
        this.type = RealEstateType.COTTAGE
        break;
      }
      case "ROLE_SHIP_OWNER": {
        this.type = RealEstateType.SHIP
        break;
      }
    }
   }

  ngOnInit(): void {

    this.statsService.getYears(this.type).subscribe((years) => {
      console.log("godine", years);
      
      this.years = years;
      this.showSelect = true;
      this.selectedYear = years[0];

      this.statsService.getYearlyStats(this.selectedYear, this.type).subscribe((stats) => {
        this.stats = stats;
        this.showChart = true;
        this.buildChart();

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
    switch (this.currentTab) {
      case 0: {
        this.statsService.getYearlyStats(this.selectedYear, this.type).subscribe((stats) => {
          this.stats = stats;
          this.buildChart();
        })
        break;
      }
      case 1: {
        this.statsService.getMonthlyStats(this.selectedYear, this.selectedMonth, this.type).subscribe((stats) => {
          this.stats = stats;
          this.buildChart();
        })
        break;
      }
      case 2: {
        this.statsService.getArbitrarilyStats(this.period, this.type).subscribe((stats) => {
          this.stats = stats;
          this.buildChart();
        })
        break;
      }
    }

  }

  tabChanged(event: any) {
    this.currentTab = event.index;
    switch (event.index) {
      case 0: {
        this.statsService.getYearlyStats(this.selectedYear, this.type).subscribe((stats) => {
          this.stats = stats;
          this.buildChart();
        })
        break;
      }

      case 1: {
        this.statsService.getMonthlyStats(this.selectedYear, this.selectedMonth, this.type).subscribe((stats) => {
          this.stats = stats;
          this.buildChart();
        })
        break;
      }

      case 2: {
        this.statsService.getArbitrarilyStats(this.period, this.type).subscribe((stats) => {
          this.stats = stats;
          this.buildChart();
        })
        break;
      }
    }
  }

}
