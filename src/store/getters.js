const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  role: state => state.user.role,
  errorLogs: state => state.errorLog.logs || [],
  permission_routes: state => state.permission.routes,
  addRouters: state => state.permission.addRouters
};
export default getters;
