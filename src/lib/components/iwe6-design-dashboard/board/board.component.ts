import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  HostBinding
} from "@angular/core";
import {
  Iwe7DesignSettingComponent,
  Iwe7DesignComponent
} from "../../interface";

import { EChartOption } from 'echarts';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent extends Iwe7DesignComponent implements OnInit {

  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() { }

  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  }


}
