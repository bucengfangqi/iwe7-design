import { BoardComponent } from './board/board.component';
import { BoardSettingComponent } from './board-setting/board-setting.component';

export const component = {
  title: '图表',
  name: 'board',
  show: true,
  setting: BoardSettingComponent,
  preview: BoardComponent,
  props: {
    name: 'board',
    title: '标题文本',
    titleColor: '#FFF',
    titleBg: '#7f6235',
    titlePosition: 'center',
    titleFontSize: 22,
    titlelineHeight: 45,
    style: {
      display: 'block',
      [`background-color`]: '#efefef',
    },
    props: []
  }
};
