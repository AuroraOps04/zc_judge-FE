import Vue from "vue";
import { Button, Dialog, Row, Col, Message } from "element-ui";

Vue.use(Dialog);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);

Vue.prototype.$message = Message;
