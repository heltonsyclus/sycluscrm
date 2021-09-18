<template>
  <BarraLayout
    @OnClick="OnClickValor"
    :ConteudoBtn="Grupos"
    :ConteudoApp="GrupoCardsOpcionais"
  />
  <q-page class="flex">
    <CardBase
      class="q-ma-xs"
      v-for="(ObjCard, index) in GrupoCards"
      :key="index"
      :id="ObjCard.id_card"
      :card="ObjCard.card"
      :ordem="ObjCard.ordem"
      :btn_comando="ObjCard.btn_comando"
    />
  </q-page>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BarraLayout },
  name: "Ocorrencia",
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
      '{"id_dashboard":4,"dashboard":"Ocorrencia","grupos":[{"id_grupo":1,"grupo":"Filtro","icone":"filter_list","cards":[{"id_card":31,"card":"card ocorrencia","ordem":1 }],"cards_opcionais":[{"id_card":31,"card":"card ocorrencia","ordem":1,"icone":"search","cor":"primary"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>
