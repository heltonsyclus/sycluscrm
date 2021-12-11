<template>
  <BarraLayout
    @OnClick="OnClickValor"
    :ConteudoBtn="Grupos"
    Aplicacao="AplicativosSalvar"
  />
  <CardTabela
    v-for="(ObjCardTabela, index) in GrupoCardsTabela"
    :key="index"
    :card="ObjCardTabela.card"
    :tipo_card_tabela="ObjCardTabela.tipo_card_tabela"
  />
  <div class="flex">
    <div class="column q-mr-lg" :class="ContainerCardRetangular">
      <CardRetangulo
        v-for="(ObjCardRetangulo, index) in GrupoCardsRetangular"
        :key="index"
        :card="ObjCardRetangulo.card"
        :tipo_card_retangulo="ObjCardRetangulo.tipo_card_retangulo"
        :sub_tipo="ObjCardRetangulo.sub_tipo"
      />
    </div>
    <div class="q-pl-sm container-card">
      <CardBase
        class="q-ml-xs"
        v-for="(ObjCard, index) in GrupoCards"
        :key="index"
        :id="ObjCard.id_card"
        :card="ObjCard.card"
        :ordem="ObjCard.ordem"
        cor_header="bg-primary"
        :btn_comando="ObjCard.btn_comando"
        :tipo_card="ObjCard.tipo_card"
        :sub_tipo="ObjCard.sub_tipo"
        :layout_lin_col="ObjCard.layout_lin_col"
        :conteudo_card="ObjCard.conteudo_card"
        :formato_card="ObjCard.formato_card"
      />
    </div>
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardBase from "src/components/CardBase.vue";
import { defineComponent } from "vue";
import CardRetangulo from "src/components/Cards/CardRetangulo.vue";
import CardTabela from "src/components/Cards/CardTabela.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BarraLayout, CardBase, CardRetangulo, CardTabela },
  name: "atividades",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupo: [],
      Grupos: [],
      GrupoCards: [],
      GrupoCardsRetangular: [],
      GrupoCardsTabela: [],
      ContainerCardRetangular: "container-retangulo"
    };
  },
  methods: {
    OnClickValor(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCards = this.Grupo["cards"];
      this.GrupoCardsRetangular = this.Grupo["cards_retangulo"];
      this.GrupoCardsTabela = this.Grupo["cards_tabela"];
      if (this.IndexGrupoAtual === 1 || this.IndexGrupoAtual === 2) {
        this.ContainerCardRetangular = "container-retangulo-observacao";
      } else {
        this.ContainerCardRetangular = "container-retangulo";
      }
    }
  },
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login
    });
    return {
      login
    };
  },
  created() {
    const json =
      '{"id_dashboard":9,"dashboard":"projetos","grupos":[{"id_grupo":1,"grupo":"Dados","icone":"assignment_turned_in","cards_retangulo":[{"id_card":1,"card":"Titulo","tipo_card_retangulo":"EdicaoTitulo"},{"id_card":2,"card":"Estrutura de projeto","tipo_card_retangulo":"AdicionarGrupos"}],"cards":[{"id_card":4,"card":"Classificação","tipo_card":"Input","layout_lin_col":[{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-padrao","label":"Responsável"}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-selecao","label":"Modelo","opcao":["Administrativo","Desenvolvimento","Contas","Comercial","Projetos"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-adicao","label":"Cliente"}]}]},{"id_card":4,"card":"Dados","tipo_card":"Input","layout_lin_col":[{"heigth":15,"colunas":[{"width":50,"sub_tipo":"input-data"}]},{"heigth":15,"colunas":[{"width":50,"sub_tipo":"input-data"}]},{"heigth":15,"colunas":[{"width":50,"sub_tipo":"input-time","label":"Duração"}]},{"heigth":15,"colunas":[{"width":50,"sub_tipo":"input-selecao","label":"Situação","opcao":["Administrativo","Desenvolvimento","Contas","Comercial","Projetos"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-adicao","label":"Colaborador","opcao":["Helton","Henrique","João Pedro","João Paulo","Pedro"]}]},{"heigth":15,"colunas":[{"width":100,"sub_tipo":"input-selecao","label":"Tags","opcao":["Syclus 1.0","Syclus 2.0","POP","Fiscal","Financeiro"]}]}]},{"id_card":5,"card":"Gut","tipo_card":"Input","layout_lin_col":[{"heigth":15,"colunas":[{"width":50,"sub_tipo":"input-selecao","label":"Gravidade","opcao":["Sem Gravidade","Pouco Grave","Grave","Muito Grave"]}]},{"heigth":15,"colunas":[{"width":50,"sub_tipo":"input-selecao","label":"Urgência","opcao":["Longo Prazo","Bastante Prazo","Médio Prazo","Curto Prazo"]}]},{"heigth":15,"colunas":[{"width":50,"sub_tipo":"input-selecao","label":"Gravidade","opcao":["Sem Gravidade","Pouco Grave","Grave","Muito Grave"]}]}]}]},{"id_grupo":2,"grupo":"Informações","icone":"warning_amber","cards_retangulo":[{"id_card":1,"card":"Objetivo","tipo_card_retangulo":"EdicaoTitulo","sub_tipo":"textarea"},{"id_card":2,"card":"Escopo","tipo_card_retangulo":"EdicaoTitulo","sub_tipo":"textarea"},{"id_card":3,"card":"Requisito","tipo_card_retangulo":"EdicaoTitulo","sub_tipo":"textarea"},{"id_card":4,"card":"Risco","tipo_card_retangulo":"EdicaoTitulo","sub_tipo":"textarea"},{"id_card":5,"card":"Responsabilidade","tipo_card_retangulo":"EdicaoTitulo","sub_tipo":"textarea"}]},{"id_grupo":3,"grupo":"Observações","icone":"search","cards_retangulo":[{"id_card":1,"card":"Objetivo","tipo_card_retangulo":"EdicaoTitulo","sub_tipo":"textarea"}]},{"id_grupo":4,"grupo":"Atividades","icone":"article","cards_tabela":[{"id_card":1,"card":"Atividades","tipo_card_tabela":"tabela_padrao"}]},{"id_grupo":5,"grupo":"Projetos","icone":"fact_check","cards_tabela":[{"id_card":1,"card":"Projetos","tipo_card_tabela":"tabela_padrao"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>

<style>
.container-retangulo {
  width: 70%;
}
.container-retangulo-observacao {
  width: 95%;
}
@media (max-width: 850px) {
  .container-retangulo {
    width: 95%;
  }
  .flex-coluna {
    display: flex;
    flex-direction: column;
  }
  .container-card {
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>
