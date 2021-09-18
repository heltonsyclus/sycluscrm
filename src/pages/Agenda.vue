<template>
  <BarraLayout
    @OnClick="OnClickValor"
    :ConteudoBtn="Grupos"
    :ConteudoApp="GrupoCardsOpcionais"
  />

  <q-page class="row">
    <div class="col-3 window-height bg-grey-4">
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
      />
    </div>
  </q-page>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardBase from "src/components/CardBase.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BarraLayout, CardBase },
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
      '{"id_dashboard":6,"dashboard":"Agenda","grupos":[{"id_grupo":1,"grupo":"Eventos","icone":"assignment_turned_in","cards":[{"id_card":35,"card":"Eventos","ordem":1 }],"cards_opcionais":[{"id_card":35,"card":"Eventos","ordem":1,"icone":"search","cor":"primary"}]},{"id_grupo":2,"grupo":"Projetos","icone":"search","cards":[{"id_card":36,"card":"Projetos","ordem":1 }],"cards_opcionais":[{"id_card":36,"card":"Projetos","ordem":1,"icone":"search","cor":"orange"}]},{"id_grupo":3,"grupo":"Atividades","icone":"assignment_turned_in","cards":[{"id_card":40,"card":"Atividades","ordem":1 }],"cards_opcionais":[{"id_card":40,"card":"Atividades","ordem":1,"icone":"search","cor":"primary"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>
