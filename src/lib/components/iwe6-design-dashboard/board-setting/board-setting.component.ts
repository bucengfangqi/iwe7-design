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

@Component({
  selector: 'app-board-setting',
  templateUrl: './board-setting.component.html',
  styleUrls: ['./board-setting.component.scss']
})
export class BoardSettingComponent extends Iwe7DesignSettingComponent  implements OnInit {
  constructor(ele: ElementRef, render: Renderer2) {
    super(ele, render);
  }

  ngOnInit() {}

}
