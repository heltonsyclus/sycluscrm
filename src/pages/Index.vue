<template>
  <div>
    <BarraLayout
      @OnClick="OnClickBarraLayout"
      :ConteudoBtn="this.ObjDashboardPrincipal['grupos']"
      :ConteudoApp="GrupoCardsOpcionais"
      Aplicacao="AplicativosPadrao"
    />
    <div class="row">
      <CardBase
        class="q-ma-xs"
        v-for="(ObjCard, index) in ObjDashboardPrincipal.grupos[
          this.IndexGrupoAtual
        ].cards"
        :key="index"
        :id="ObjCard.id_card"
        :card="ObjCard.card"
        :ordem="ObjCard.ordem"
        cor_header="bg-primary"
        :btn_comando="ObjCard.btn_comando"
        :tipo_card="ObjCard.tipo_card"
        :sub_tipo="ObjCard.sub_tipo"
        :layout_lin_col="ObjCard.layout_lin_col"
        :link_item="ObjCard.link_item"
        :conteudo_cards="ObjCard.conteudo_card"
        :formato_card="ObjCard.formato_card"
      />
      {{ this.login }}
      <q-page-sticky position="bottom-right" :offset="fabPos">
        <q-fab
          icon="add"
          direction="up"
          color="primary"
          :disable="draggingFab"
          v-touch-pan.prevent.mouse="moveFab"
        >
          <q-fab-action
            color="blue-14"
            @click="$router.push({ name: 'projeto' })"
            icon="description"
          />
          <q-fab-action
            color="green-14"
            @click="$router.push({ name: 'atividade' })"
            icon="assignment"
          />
        </q-fab>
      </q-page-sticky>
    </div>
  </div>
</template>

<script>
import { layoutDashBoardPrincipal } from "src/commands/layoutDashboard.js";
import CardBase from "src/components/CardBase.vue";
import BarraLayout from "src/layouts/BarraLayout.vue";
import { defineComponent } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BarraLayout, CardBase },
  name: "dashboard",
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login
    });
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
      login,
      fabPos,
      draggingFab,
      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y
        ];
      }
    };
  },
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupos: [],
      GrupoCards: [],
      GrupoCardsOpcionais: []
    };
  },
  methods: {
    OnClickBarraLayout(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
    }
  },
  created() {
<<<<<<< HEAD
    this.ObjDashboardPrincipal = layoutDashBoardPrincipal();
=======
    const json =
      '{"id_dashboard":1,"dashboard":"Dashboard Principal","grupos":[{"id_grupo":1,"grupo":"Atividades","icone":"assignment_turned_in","cards":[{"id_card":12,"card":"Minhas execuções","ordem":1,"tipo_card":"Slide"},{"id_card":10,"card":"Minhas atividades","ordem":2,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Criando Dashboard","Tela Figma"]},{"id_card":8,"card":"Meus projetos","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Scrum","Implantação"]},{"id_card":6,"card":"Agenda","ordem":4,"tipo_card":"Agenda"},{"id_card":4,"card":"Atividades atrasadas","ordem":5,"btn_comando":"btn-itens","tipo_card":"Expansao"},{"id_card":2,"card":"Gráficos de atividade","ordem":5,"btn_comando":"btn-itens","tipo_card":"Grafico","sub_tipo":"grafico_padrao"},{"id_card":1,"card":"Execuções Gerais","ordem":6,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Area Tecnica 2021","Projeto Hidrosolo"]},{"id_card":9,"card":"Gráfico Tempo","ordem":7,"btn_comando":"btn-itens","tipo_card":"Grafico","sub_tipo":"grafico_linha"}],"cards_opcionais":[{"id_card":12,"card":"Minhas execuções","ordem":1,"icone":"assignment_turned_in","cor":"primary"},{"id_card":10,"card":"Minhas atividades","ordem":2,"icone":"description","cor":"orange"},{"id_card":8,"card":"Meus projetos","ordem":3,"icone":"article","cor":"red-5"},{"id_card":6,"card":"Agenda","ordem":4,"icone":"article","cor":"pink-5"},{"id_card":4,"card":"Atividades atrasadas","ordem":5,"icone":"folder","cor":"purple-5"},{"id_card":2,"card":"Gráficos Atividades","ordem":6,"icone":"leaderboard","cor":"deep-purple-5"},{"id_card":1,"card":"Execuções Gerais","ordem":7,"icone":"work_outline","cor":"indigo-5"},{"id_card":2,"card":"Gráfico Tempo","ordem":6,"icone":"auto_graph","cor":"deep-purple-7"}]},{"id_grupo":2,"grupo":"Projetos","icone":"article","cards":[{"id_card":8,"card":"Meus projetos","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Scrum","Implantação"]},{"id_card":11,"card":"Atividade de projeto","ordem":2,"tipo_card":"Expansao"},{"id_card":9,"card":"Duração por projeto","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["projeto A","projeto B"]},{"id_card":6,"card":"Agenda","ordem":4,"cor_header":"bg-light-blue-3","tipo_card":"Agenda"},{"id_card":5,"card":"Projetos Atrasados","ordem":5,"tipo_card":"Expansao"},{"id_card":2,"card":"Gráficos","ordem":6,"btn_comando":"btn-filtro","tipo_card":"Grafico","sub_tipo":"grafico_update"},{"id_card":9,"card":"Coboradores por projeto","ordem":7,"btn_comando":"btn-itens","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["execução 1","execução 1"]}],"cards_opcionais":[{"id_card":8,"card":"Meus projetos","ordem":1,"icone":"article","cor":"orange"},{"id_card":11,"card":"Atividade de projeto","ordem":2,"icone":"description","cor":"indigo-5"},{"id_card":9,"card":"Duração por projeto","ordem":3,"icone":"article","cor":"blue-5"},{"id_card":6,"card":"Agenda","ordem":4,"icone":"article","cor":"primary"},{"id_card":3,"card":"Projetos atrasadas","ordem":5,"icone":"folder","cor":"cyan-5"},{"id_card":2,"card":"Gráficos","ordem":6,"icone":"leaderboard","cor":"teal-5"},{"id_card":9,"card":"Coboradores por projeto","ordem":7,"icone":"work_outline","cor":"green-5"}]},{"id_grupo":3,"grupo":"Estatisticas","icone":"assignment_turned_in","cards":[{"id_card":13,"card":"Revisão de atividades","ordem":1,"cor_header":"bg-light-blue-1","tipo_card":"Grafico","sub_tipo":"grafico_update","formato_card":"my-card-s-310-380"},{"id_card":14,"card":"Gráfico de comparação","cor_header":"bg-light-blue-2","ordem":2,"tipo_card":"Grafico","sub_tipo":"grafico_linha","formato_card":"my-card-s-310-380"},{"id_card":15,"card":"Gráfico de atividades","cor_header":"bg-light-blue-3","ordem":3,"tipo_card":"Grafico","sub_tipo":"grafico_pontos","formato_card":"my-card-s-310-380"}],"cards_opcionais":[{"id_card":13,"card":"Revisão de atividades","ordem":1,"icone":"signal_cellular_alt","cor":"amber-9"},{"id_card":14,"card":"Gráfico de comparação","ordem":2,"icone":"leaderboard","cor":"amber-5"},{"id_card":15,"card":"Gráfico de atividades","ordem":3,"icone":"auto_graph","cor":"brown-8"}]},{"id_grupo":4,"grupo":"Financeiro","icone":"paid","cards":[{"id_card":24,"card":"Atividade Rápida","ordem":1,"tipo_card":"Input","layout_lin_col":[{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"Digite o CPF"}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-selecao","label":"Modelo","opcao":["Administrativo","Desenvolvimento","Contas","Comercial","Projetos"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-selecao","label":"Tags","opcao":["Syclus 1.0","Syclus 2.0","Manutenção","Pagamentos","POP"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"Descricao"}]},{"heigth":15,"colunas":[{"width":50,"sub_tipo":"input-selecao","label":"Situação","opcao":["Administrativo","Desenvolvimento","Contas","Comercial","Projetos"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-adicao","label":"Colaborador","opcao":["Helton","Henrique","João Pedro","João Paulo","Pedro"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-btn","label":"Enviar"}]}],"formato_card":"my-card-s-500-304"},{"id_card":21,"card":"Atividades Fiscais","ordem":2,"btn_comando":"btn-itens","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["fiscal 1","fiscal 2"]},{"id_card":20,"card":"Gráficos de atendimento","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Grafico","sub_tipo":"grafico_pontos"},{"id_card":19,"card":"Pesquisa de cliente","ordem":4,"tipo_card":"Input","layout_lin_col":[{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"Digite o nome ou CNPJ"}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-selecao","label":"Workflow","opcao":["Administrativo","Desenvolvimento","Contas","Comercial","Projetos"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-btn","label":"Enviar"}]}]},{"id_card":18,"card":"Repasse de atividade","ordem":5,"btn_comando":"btn-filtro","tipo_card":"Secao","sub_tipo":"secao-repasse"},{"id_card":23,"card":"Ultimas atividades","ordem":8,"tipo_card":"Secao","sub_tipo":"secao-padrao"},{"id_card":16,"card":"Atendimentos","ordem":7,"btn_comando":"btn-filtro","tipo_card":"Grafico","sub_tipo":"grafico_padrao"},{"id_card":17,"card":"Minhas ocorrências","ordem":6,"btn_comando":"btn-filtro","tipo_card":"Secao","sub_tipo":"secao-padrao"}],"cards_opcionais":[{"id_card":22,"card":"Atividade Rápida","ordem":1,"icone":"mode_edit","cor":"grey-8"},{"id_card":21,"card":"Atividades Fiscais","ordem":2,"icone":"monetization_on","cor":"blue-grey-8"},{"id_card":20,"card":"Gráficos de atendimento","ordem":3,"icone":"show_chart","cor":"yellow-12"},{"id_card":19,"card":"Pesquisa de cliente","ordem":4,"icone":"query_stats","cor":"orange-12"},{"id_card":18,"card":"Repasse de atividade","ordem":5,"icone":"sync_alt","cor":"light-green-7"},{"id_card":17,"card":"Minhas ocorrências","ordem":6,"icone":"task","cor":"orange-8"},{"id_card":16,"card":"Atendimentos","ordem":7,"icone":"ring_volume","cor":"cyan-13"},{"id_card":23,"card":"Ultimas atividades","ordem":8,"icone":"drive_file_rename_outline","cor":"cyan-9"}]},{"id_grupo":5,"grupo":"Triagem","icone":"support_agent","cards":[{"id_card":24,"card":"Atividade Rápida","ordem":1,"tipo_card":"Input","layout_lin_col":[{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"Digite o CPF"}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-selecao","label":"Modelo","opcao":["Administrativo","Desenvolvimento","Contas","Comercial","Projetos"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-selecao","label":"Tags","opcao":["Syclus 1.0","Syclus 2.0","Manutenção","Pagamentos","POP"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"Descricao"}]},{"heigth":15,"colunas":[{"width":50,"sub_tipo":"input-selecao","label":"Situação","opcao":["Administrativo","Desenvolvimento","Contas","Comercial","Projetos"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-adicao","label":"Colaborador","opcao":["Helton","Henrique","João Pedro","João Paulo","Pedro"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-btn","label":"Enviar"}]}],"formato_card":"my-card-s-500-304"},{"id_card":25,"card":"Notificação cliente","ordem":2,"btn_comando":"btn-itens","tipo_card":"Input","layout_lin_col":[{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"CNPJ,CPF,nome"}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"Título"}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-selecao","label":"Modelo","opcao":["Administrativo","Desenvolvimento","Contas","Comercial","Projetos"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"Link"}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"Observações ..."}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-btn","label":"Enviar"}]}],"formato_card":"my-card-s-500-304"},{"id_card":26,"card":"Eventos","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Secao","sub_tipo":"secao-contexto"},{"id_card":27,"card":"Encaminhar","ordem":4,"tipo_card":"Secao","sub_tipo":"secao-contexto"},{"id_card":28,"card":"Cobrança","ordem":5,"btn_comando":"btn-itens","tipo_card":"Secao","sub_tipo":"secao-contexto"},{"id_card":29,"card":"Controle de triagem","ordem":6,"btn_comando":"btn-filtro","tipo_card":"Grafico","sub_tipo":"grafico_update"}],"cards_opcionais":[{"id_card":24,"card":"Atividade Rápida","ordem":1,"icone":"mode_edit","cor":"grey-8"},{"id_card":25,"card":"Notificação cliente","ordem":2,"icone":"notifications","cor":"green-6"},{"id_card":26,"card":"Eventos","ordem":3,"icone":"event_available","cor":"teal-7"},{"id_card":27,"card":"Encaminhar","ordem":4,"icone":"sync","cor":"orange-8"},{"id_card":18,"card":"Cobrança","ordem":5,"icone":"dangerous","cor":"red-12"},{"id_card":29,"card":"Controle de triagem","ordem":6,"icone":"record_voice_over","cor":"light-blue-5"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
  }
});
</script>
