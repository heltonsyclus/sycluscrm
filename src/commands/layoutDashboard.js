export function layoutDashBoardPrincipal() {}

export function layoutDashBoardCliente() {
  const json = {
    id_dashboard: 4,
    dashboard: "Cliente",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Helpdesk",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Pendentes",
            ordem: 1,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            conteudo_card: {
              bodyGrupo: "bodyAtividesPendentesPorTipo",
              bodyItem: "bodyAtividesPendentesPorClienteTipo"
            }
          },
          {
            id_card: 2,
            card: "Atrasadas",
            ordem: 1,
            tipo_card: "Lista",
            sub_tipo: "lista-padrao",
            conteudo_card: {
              bodyGrupo: "",
              bodyItem: ""
            }
          },
          {
            id_card: 3,
            card: "Finalizadas",
            ordem: 1,
            tipo_card: "Lista",
            sub_tipo: "lista-padrao",
            conteudo_card: []
          },
          {
            id_card: 4,
            card: "Projetos Ativos",
            ordem: 1,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            conteudo_card: {
              bodyGrupo: "bodyProjetosAtivosPorTipo",
              bodyItem: "bodyProjetosAtivosPorClienteTipo"
            }
          },
          {
            id_card: 5,
            card: "Prioridades",
            ordem: 1,
            tipo_card: "Lista",
            sub_tipo: "lista-padrao",
            conteudo_card: []
          },
          {
            id_card: 6,
            card: "Integração",
            ordem: 1,
            tipo_card: "Expansao",
            conteudo_card: []
          }
        ],
        cards_opcionais: [
          {
            id_card: 1,
            card: "Pendentes",
            ordem: 1,
            icone: "pending_actions",
            cor: "primary"
          },
          {
            id_card: 2,
            card: "Atrasadas",
            ordem: 2,
            icone: "watch_later",
            cor: "red"
          },
          {
            id_card: 3,
            card: "Finalizadas",
            ordem: 3,
            icone: "add_task",
            cor: "green"
          },
          {
            id_card: 4,
            card: "Projetos Ativos",
            ordem: 4,
            icone: "post_add",
            cor: "secondary"
          },
          {
            id_card: 5,
            card: "Prioridades",
            ordem: 5,
            icone: "warning_amber",
            cor: "orange"
          },
          {
            id_card: 6,
            card: "Integração",
            ordem: 6,
            icone: "integration_instructions",
            cor: "accent"
          }
        ]
      }
    ]
  };

  //const json = `{"id_dashboard":4,"dashboard":"Cliente","grupos":[{"id_grupo":1,"grupo":"Helpdesk","icone":"assignment_turned_in","cards":[{"id_card":1,"card":"Pendentes","ordem":1,"tipo_card":"Expansao","conteudo_card":[{ "tipo_atividade": "DESENVOLVIMENTO" }, { "tipo_atividade": "FORMACAO" }, { "tipo_atividade": "GERAIS" }, { "tipo_atividade": "PROJETOS" }, { "tipo_atividade": "SUPORTE" } ]},{"id_card":2,"card":"Atrasadas","ordem":1,"tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":[]},{"id_card":3,"card":"Finalizadas","ordem":1,"tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":[]},{"id_card":4,"card":"Projetos Ativos","ordem":1,"tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":[]},{"id_card":5,"card":"Prioridades","ordem":1,"tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":[]},{"id_card":6,"card":"Integração","ordem":1,"tipo_card":"Expansao","conteudo_card":[]}],"cards_opcionais":[{"id_card":1,"card":"Pendentes","ordem":1,"icone":"pending_actions","cor":"primary"},{"id_card":2,"card":"Atrasadas","ordem":2,"icone":"pending_actions","cor":"primary"},{"id_card":3,"card":"Finalizadas","ordem":3,"icone":"pending_actions","cor":"primary"},{"id_card":4,"card":"Pendentes","ordem":4,"icone":"pending_actions","cor":"primary"},{"id_card":5,"card":"Projetos Ativos","ordem":5,"icone":"pending_actions","cor":"primary"},{"id_card":6,"card":"Integração","ordem":6,"icone":"pending_actions","cor":"primary"}]}]}`;
  return json;
  //return lzw_encode(JSON.stringify(json));
}
