<template>
  <div>
    <BarraLayout
      @OnClick="OnClickValor"
      :ConteudoBtn="Grupos"
      :ConteudoApp="GrupoCardsOpcionais"
    />
    <div class="row">
      <CardBase
        class="q-ma-xs"
        v-for="(ObjCard, index) in GrupoCards"
        :key="index"
        :id="ObjCard.id_card"
        :card="ObjCard.card"
        :ordem="ObjCard.ordem"
        cor_header="bg-primary"
        :btn_comando="ObjCard.btn_comando"
        :tipo_card="ObjCard.tipo_card"
        :sub_tipo="ObjCard.sub_tipo"
        :conteudo_card="ObjCard.conteudo_card"
        :formato_card="ObjCard.formato_card"
      />
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
import CardBase from "src/components/CardBase.vue";
import BarraLayout from "src/layouts/BarraLayout.vue";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  components: { BarraLayout, CardBase },
  name: "Index",
  setup() {
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
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
    OnClickValor(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCards = this.Grupo["cards"];
      this.GrupoCardsOpcionais = this.Grupo["cards_opcionais"];
    }
  },
  created() {
    const json =
      '{"id_dashboard":1,"dashboard":"Dashboard Principal","grupos":[{"id_grupo":1,"grupo":"Atividades","icone":"assignment_turned_in","cards":[{"id_card":12,"card":"Minhas execuções","ordem":1,"tipo_card":"Slide"},{"id_card":10,"card":"Minhas atividades","ordem":2,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["atividade 1","atividade 2"]},{"id_card":8,"card":"Meus projetos","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["projeto 1","projeto 2"]},{"id_card":6,"card":"Agenda","ordem":4,"tipo_card":"Agenda"},{"id_card":4,"card":"Atividades atrasadas","ordem":5,"btn_comando":"btn-itens","tipo_card":"Expansao"},{"id_card":2,"card":"Gráficos","ordem":5,"btn_comando":"btn-itens","tipo_card":"Grafico"},{"id_card":1,"card":"Execuções Gerais","ordem":6,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["execução 1","execução 2"]}],"cards_opcionais":[{"id_card":12,"card":"Minhas execuções","ordem":1,"icone":"assignment_turned_in","cor":"primary"},{"id_card":10,"card":"Minhas atividades","ordem":2,"icone":"description","cor":"orange"},{"id_card":8,"card":"Meus projetos","ordem":3,"icone":"article","cor":"red-5"},{"id_card":6,"card":"Agenda","ordem":4,"icone":"article","cor":"pink-5"},{"id_card":4,"card":"Atividades atrasadas","ordem":5,"icone":"folder","cor":"purple-5"},{"id_card":2,"card":"Gráficos","ordem":6,"icone":"leaderboard","cor":"deep-purple-5"},{"id_card":1,"card":"Execuções Gerais","ordem":7,"icone":"work_outline","cor":"indigo-5"}]},{"id_grupo":2,"grupo":"Projetos","icone":"article","cards":[{"id_card":8,"card":"Meus projetos","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["projeto 1","projeto 1"]},{"id_card":11,"card":"Atividade de projeto","ordem":2,"tipo_card":"Expansao"},{"id_card":9,"card":"Duração por projeto","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["projeto a","projeto b"]},{"id_card":6,"card":"Agenda","ordem":4,"cor_header":"bg-light-blue-3","tipo_card":"Agenda"},{"id_card":5,"card":"Projetos Atrasados","ordem":5,"tipo_card":"Expansao"},{"id_card":2,"card":"Gráficos","ordem":6,"btn_comando":"btn-filtro","tipo_card":"Grafico"},{"id_card":9,"card":"Coboradores por projeto","ordem":7,"btn_comando":"btn-itens","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["execução 1","execução 1"]}],"cards_opcionais":[{"id_card":8,"card":"Meus projetos","ordem":1,"icone":"article","cor":"orange"},{"id_card":11,"card":"Atividade de projeto","ordem":2,"icone":"description","cor":"indigo-5"},{"id_card":9,"card":"Duração por projeto","ordem":3,"icone":"article","cor":"blue-5"},{"id_card":6,"card":"Agenda","ordem":4,"icone":"article","cor":"primary"},{"id_card":3,"card":"Projetos atrasadas","ordem":5,"icone":"folder","cor":"cyan-5"},{"id_card":2,"card":"Gráficos","ordem":6,"icone":"leaderboard","cor":"teal-5"},{"id_card":9,"card":"Coboradores por projeto","ordem":7,"icone":"work_outline","cor":"green-5"}]},{"id_grupo":3,"grupo":"Estatisticas","icone":"assignment_turned_in","cards":[{"id_card":13,"card":"Revisão de atividades","ordem":1,"cor_header":"bg-light-blue-1","btn_comando":"btn-filtro","tipo_card":"Grafico"},{"id_card":14,"card":"Gráfico de comparação","cor_header":"bg-light-blue-2","ordem":2,"tipo_card":"Grafico"},{"id_card":15,"card":"Gráfico de atividades","cor_header":"bg-light-blue-3","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Grafico"}],"cards_opcionais":[{"id_card":13,"card":"Revisão de atividades","ordem":1,"icone":"signal_cellular_alt","cor":"amber-9"},{"id_card":14,"card":"Gráfico de comparação","ordem":2,"icone":"leaderboard","cor":"amber-5"},{"id_card":15,"card":"Gráfico de atividades","ordem":3,"icone":"auto_graph","cor":"brown-8"}]},{"id_grupo":4,"grupo":"Financeiro","icone":"paid","cards":[{"id_card":22,"card":"Atividade Rápida","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Input","sub_tipo":"input-padrao","formato_card":"my-card-s-360-304"},{"id_card":21,"card":"Atividades Fiscais","ordem":2,"btn_comando":"btn-itens","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["fiscal 1","fiscal 2"]},{"id_card":20,"card":"Gráficos de atendimento","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Grafico"},{"id_card":19,"card":"Pesquisa de cliente","ordem":4,"tipo_card":"Input","sub_tipo":"input-pesquisa"},{"id_card":18,"card":"Repasse de atividade","ordem":5,"btn_comando":"btn-filtro","tipo_card":"Secao","sub_tipo":"secao-repasse"},{"id_card":23,"card":"Ultimas atividades","ordem":8,"tipo_card":"Secao","sub_tipo":"secao-padrao"},{"id_card":16,"card":"Atendimentos","ordem":7,"btn_comando":"btn-filtro","tipo_card":"Grafico"},{"id_card":17,"card":"Minhas ocorrências","ordem":6,"btn_comando":"btn-filtro","tipo_card":"Secao","sub_tipo":"secao-padrao"}],"cards_opcionais":[{"id_card":22,"card":"Atividade Rápida","ordem":1,"icone":"mode_edit","cor":"grey-8"},{"id_card":21,"card":"Atividades Fiscais","ordem":2,"icone":"monetization_on","cor":"blue-grey-8"},{"id_card":20,"card":"Gráficos de atendimento","ordem":3,"icone":"show_chart","cor":"yellow-12"},{"id_card":19,"card":"Pesquisa de cliente","ordem":4,"icone":"query_stats","cor":"orange-12"},{"id_card":18,"card":"Repasse de atividade","ordem":5,"icone":"sync_alt","cor":"light-green-7"},{"id_card":17,"card":"Minhas ocorrências","ordem":6,"icone":"task","cor":"orange-8"},{"id_card":16,"card":"Atendimentos","ordem":7,"icone":"ring_volume","cor":"cyan-13"},{"id_card":23,"card":"Ultimas atividades","ordem":8,"icone":"drive_file_rename_outline","cor":"cyan-9"}]},{"id_grupo":5,"grupo":"Triagem","icone":"support_agent","cards":[{"id_card":24,"card":"Atividade Rápida","ordem":1,"tipo_card":"Input","sub_tipo":"input-padrao","formato_card":"my-card-s-360-304"},{"id_card":25,"card":"Notificação cliente","ordem":2,"btn_comando":"btn-itens","tipo_card":"Input","sub_tipo":"input-notificacao","formato_card":"my-card-s-500-304"},{"id_card":26,"card":"Eventos","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Secao","sub_tipo":"secao-contexto"},{"id_card":27,"card":"Encaminhar","ordem":4,"tipo_card":"Secao","sub_tipo":"secao-contexto"},{"id_card":28,"card":"Cobrança","ordem":5,"btn_comando":"btn-itens","tipo_card":"Secao","sub_tipo":"secao-contexto"},{"id_card":29,"card":"Controle de triagem","ordem":6,"btn_comando":"btn-filtro"}],"cards_opcionais":[{"id_card":24,"card":"Atividade Rápida","ordem":1,"icone":"mode_edit","cor":"grey-8"},{"id_card":25,"card":"Notificação cliente","ordem":2,"icone":"notifications","cor":"green-6"},{"id_card":26,"card":"Eventos","ordem":3,"icone":"event_available","cor":"teal-7"},{"id_card":27,"card":"Encaminhar","ordem":4,"icone":"sync","cor":"orange-8"},{"id_card":18,"card":"Cobrança","ordem":5,"icone":"dangerous","cor":"red-12"},{"id_card":29,"card":"Controle de triagem","ordem":6,"icone":"record_voice_over","cor":"light-blue-5"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>
