import { BoardComponent } from "./board/board.component";
import { BoardSettingComponent } from "./board-setting/board-setting.component";

export const component = {
  title: "图表",
  name: "board",
  show: true,
  setting: BoardSettingComponent,
  preview: BoardComponent,
  props: {
    name: "board",
    title: "请输入大标题",
    style: {
      display: 'block',
      [`background-color`]: '#efefef'
    },
    props: []
  }
};
