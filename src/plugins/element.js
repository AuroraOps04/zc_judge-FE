import Vue from "vue";
import {
  Button,
  Dialog,
  Row,
  Col,
  Message,
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Select,
  Scrollbar,
  Menu,
  Switch,
  MenuItem,
  MenuItemGroup,
  Submenu
} from "element-ui";

Vue.use(Dialog);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Switch);
Vue.use(Menu);
Vue.use(Scrollbar);
Vue.use(Select);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tooltip);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);

Vue.prototype.$message = Message;
