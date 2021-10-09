<template>
   <BarraLayout
    @OnClick="OnClickValor"
    :ConteudoBtn="Grupos"
    Aplicacao="AplicativosPesquisa"
  />
  <div class="column ContainerCardRetangular">
    <CardRetangulo
      v-for="(ObjCardRetangulo, index) in GrupoCardsRetangular"
      :key="index"
      :card="ObjCardRetangulo.card"
      :tipo_card_retangulo="ObjCardRetangulo.tipo_card_retangulo"
      :sub_tipo="ObjCardRetangulo.sub_tipo"
    />
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardRetangulo from "src/components/Cards/CardRetangulo.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BarraLayout, CardRetangulo },
  name: "Ocorrencia",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupo: [],
      Grupos: [],
      GrupoCardsRetangular: []
    };
  },
  methods: {
    OnClickValor(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCardsRetangular = this.Grupo["cards_retangulo"];
    }
  },
  created() {
    const json =
      '{"id_dashboard":4,"dashboard":"Ocorrências","grupos":[{"id_grupo":1,"grupo":"Filtro","icone":"filter_list","cards_retangulo":[{"id_card":1,"card":"Atividade1","tipo_card_retangulo":"RetanguloOcorrencia"},{"id_card":2,"card":"Atividade2","tipo_card_retangulo":"RetanguloOcorrencia"},{"id_card":3,"card":"Atividade3","tipo_card_retangulo":"RetanguloOcorrencia"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>

<style>
.ContainerCardRetangular {
  width: 95%;
}
</style>
