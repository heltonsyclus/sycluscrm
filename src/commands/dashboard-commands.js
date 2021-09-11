export const DashBoard = {
  data() {
    return {
      Dashboards: [
        {
          titulo: "Atividades",
          id_etapa: 0,
          card_dashboard: [
            {
              Titulo: "Atividade executada",
              Btn_Comando: "btn-filtro"
            },
            {
              Titulo: "Projeto",
              Btn_Comando: "btn-itens"
            },
            {
              Titulo: "Agenda",
              Btn_Comando: "btn-itens"
            }
          ]
        },
        {
            titulo: "Projetos",
            id_etapa: 1,
            card_dashboard: [
              {
                Titulo: "Projeto1",
                Btn_Comando: "btn-filtro"
              },
              {
                Titulo: "Projeto2",
                Btn_Comando: "btn-itens"
              },
              {
                Titulo: "Projeto3",
                Btn_Comando: "btn-itens"
              }
            ]
          },
          {
            titulo: "estatísticas",
            id_etapa:2,
            card_dashboard: [
              {
                Titulo: "estatísticas1",
                Btn_Comando: "btn-filtro"
              },
              {
                Titulo: "estatísticas2",
                Btn_Comando: "btn-itens"
              },
              {
                Titulo: "estatísticas3",
                Btn_Comando: "btn-itens"
              }
            ]
          },
          {
            titulo: "finaceiro",
            id_etapa: 3,
            card_dashboard: [
              {
                Titulo: "finaceiro",
                Btn_Comando: "btn-filtro"
              },
              {
                Titulo: "finaceiro2",
                Btn_Comando: "btn-itens"
              },
              {
                Titulo: "finaceiro3",
                Btn_Comando: "btn-itens"
              }
            ]
          },
          {
            titulo: "Triagem",
            id_etapa: 4,
            card_dashboard: [
              {
                Titulo: "Triagem1",
                Btn_Comando: "btn-filtro"
              },
              {
                Titulo: "Triagem2",
                Btn_Comando: "btn-itens"
              },
              {
                Titulo: "Triagem3",
                Btn_Comando: "btn-itens"
              }
            ]
          },
      ]
    };
  }
};
