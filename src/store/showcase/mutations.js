export const numeroNotificacao = (state, notificar) => {
  state.notificacao = notificar;
};

export const updateDrawerState = (state, payload) => {
  state.arrModels = payload;
};

export const getWorkflow = (state, payload) => {
  state.arrWorkflow = payload;
};
