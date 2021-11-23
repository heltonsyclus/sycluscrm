<template>
  <div>
    <BarraLayout
      @OnClick="OnClickValor"
      :ConteudoBtn="Grupos"
      :ConteudoApp="GrupoCardsOpcionais"
      Aplicacao="AplicativosPadrao"
    />
    <CardCalendario />
  </div>
</template>

<script>
import CardCalendario from "src/components/Cards/CardCalendario.vue";
import BarraLayout from "src/layouts/BarraLayout.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BarraLayout, CardCalendario },
  name: "Agenda",

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
      '{"id_dashboard":6,"dashboard":"Agenda","grupos":[{"id_grupo":1,"grupo":"Calendário","icone":"edit_calendar"}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>

<style scoped>
.filtros {
  position: absolute;
  top: 2;
  right: 0;
  margin-right: 50px;
  padding-top: 12px;
}
</style>
