import { Button, Tabs, Space } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { App } from "vue";
export function registerAntd(app: App) {
  app.use(Button);
  app.use(Tabs);
  app.use(Space);
}
