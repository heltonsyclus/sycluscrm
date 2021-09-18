<template>
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
    />
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardBase from "src/components/CardBase.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BarraLayout, CardBase },
  name: "Projeto",
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
      '{"id_dashboard":3,"dashboard":"Projeto","grupos":[{"id_grupo":1,"grupo":"Criar projeto","icone":"assignment_turned_in","cards":[{"id_card":31,"card":"Criar Projeto","ordem":1,"altura":300,"comprimento":250,"tipo_card":"Botao","sub_tipo":"lista-padrao","conteudo_card":["Crie sua Projeto de forma rápida e eficaz."]}],"cards_opcionais":[{"id_card":31,"card":"Criar Projeto","ordem":1,"icone":"search","cor":"primary"}]},{"id_grupo":2,"grupo":"Pesquisa","icone":"search","cards":[{"id_card":32,"card":"Pesquisa","ordem":1,"tipo_card":"Botao","sub_tipo":"lista-padrao","conteudo_card":["Pesquisa de Projeto."]}],"cards_opcionais":[{"id_card":32,"card":"Meus projetos","ordem":1,"icone":"search","cor":"orange"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>
