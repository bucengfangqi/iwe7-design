import { RadioComponent } from "./radio/radio.component";
import { RadioSettingComponent } from "./radio-setting/radio-setting.component";

export const component = {
  title: "单选项目",
  name: "radio",
  show: false,
  setting: RadioSettingComponent,
  preview: RadioComponent,
  props: {
    name: "radio",
    code: "xiangmu0",
    value: "0",
    label: "项目0",
    disabled: false,
    checked: false,
    color: '',
    class: {
    },
    style: {},
    props: []
  }
};
