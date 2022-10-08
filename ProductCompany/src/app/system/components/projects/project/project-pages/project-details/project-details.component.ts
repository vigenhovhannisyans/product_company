import {Component, OnInit, ViewChild} from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {CheckIsMobileService} from "../../../../../../core/services/check-is-mobile.service";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public pieChartType: ChartType = 'bar';
  public pieChartPlugins = [ DatalabelsPlugin ];
  constructor(
    private isMobileService: CheckIsMobileService
  ) { }

  ngOnInit(): void {
  }
  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },

    }
  };
  public pieChartData: ChartData<'bar', number[], string | string[]> = {
    labels: [
      'In progress',
      'Under review',
      'To do'
    ],
    datasets: [ {
      data: [ 50, 100, 100 ],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
    } ],
  };

  isMobile(): boolean{
    return this.isMobileService.isMobile();
  }
}
