export const numeroNotificacao = (state, notificar) => {
  state.notificacao = notificar;
};

export const updateDrawerState = (state, payload) => {
  state.drawerState = payload
}

export const abrirTelaPesquisa = (state, opened) => {
  state.showDrawer = opened
}