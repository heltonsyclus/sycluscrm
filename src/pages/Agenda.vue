<template>
  <div>
    <BarraLayout
      @OnClick="OnClickValor"
      :ConteudoBtn="Grupos"
      :ConteudoApp="GrupoCardsOpcionais"
      Aplicacao="AplicativosPadrao"
    />
    <div class="filtros">
      <q-select label="Filtro" v-model="filtro" :options="options" />
    </div>
    <CardCalendario :filtro_calendario="filtro" />
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
      filtro: "Diário",
      options: ["Diário", "Semanal", "Mensal"],
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
      '{"id_dashboard":6,"dashboard":"Agenda","grupos":[{"id_grupo":1,"grupo":"Eventos","icone":"assignment_turned_in","cards":[{"id_card":35,"card":"Eventos","ordem":1 }],"cards_opcionais":[{"id_card":35,"card":"Eventos","ordem":1,"icone":"search","cor":"primary"}]},{"id_grupo":2,"grupo":"Projetos","icone":"search","cards":[{"id_card":36,"card":"Projetos","ordem":1 }],"cards_opcionais":[{"id_card":36,"card":"Projetos","ordem":1,"icone":"search","cor":"orange"}]},{"id_grupo":3,"grupo":"Atividades","icone":"assignment_turned_in","cards":[{"id_card":40,"card":"Atividades","ordem":1 }],"cards_opcionais":[{"id_card":40,"card":"Atividades","ordem":1,"icone":"search","cor":"primary"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>

<style scoped>
.filtros {
  position: absolute;
  top: 3;
  right: 0;
  margin-right: 65px;
}
</style>
