import { BoardComponent } from "./board/board.component";
import { BoardSettingComponent } from "./board-setting/board-setting.component";

export const component = {
  title: "图表",
  name: "board",
  show: true,
  setting: BoardSettingComponent,
  preview: BoardComponent,
  props: {
    decode: true,
    name: 'board',
    text: "测试label",
    class: {
      [`iwe7-design-text`]: true
    },
    style: {
      display: "block"
    },
    props: []
  }
};
