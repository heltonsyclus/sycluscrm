export const numeroNotificacao = (state, notificar) => {
  state.notificacao = notificar;
};

export const updateDrawerState = (state, payload) => {
  state.arrModels = payload;
};

export const getWorkflow = (state, payload) => {
<<<<<<< HEAD
  state.arrWorkflow = payload;
};

export const selectAgenda = (state, payload) => {
  state.calendarioAtual = payload;
};

export const selectStatusAgenda = (state, payload) => {
  state.calendarioEventos = payload;
};
export const autenticacaoLogin = (state, payload) => {
  state.login = payload;
};
=======
  state.arrWorkflow = payload
}

export const eventosAgenda = (state, payload) => {
  state.events = payload
}
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
