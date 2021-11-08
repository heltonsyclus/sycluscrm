<template>
  <BarraLayout
    @OnClick="OnClickBarra"
    @onClickFiltros="EsconderCardInputs"
    @valorInputPesquisa="modelArray"
    :ConteudoBtn="Grupos"
    Aplicacao="AplicativosPesquisa"
  />
  <q-layout container style="height: 90vh">
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="340"
      :breakpoint="500"
      bordered
      class="bg-grey-5"
      v-show="showDrawer"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <CardPesquisa
            style="margin-left:15px"
            @arrModels="onClickValorInput"
            :filtroAvancado="filtrosAvancado"
          />
        </q-list>
      </q-scroll-area>

      <div class="absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="EsconderCardInputs"
        />
      </div>
    </q-drawer>
    <div class="flex q-mr-sm">
      <div
        class="flex btn-chip"
        v-for="(objFiltro, i) in arrayFiltros"
        :key="i"
      >
        <span>{{ objFiltro["campo"] }}: {{ objFiltro["valor"] }}</span>
        <q-icon
          name="highlight_off"
          size="20px"
          style="cursor:pointer"
          @click="removerChip(i)"
        />
      </div>
      <q-btn
        round
        unelevated
        color="green"
        icon="add"
        size="14px"
        style="margin-left:5px"
        @click.prevent="filtroAvancados"
        v-show="btnAdicionarCampoAvancado"
      />
    </div>
    <CardTabela
      v-for="(ObjCardTabela, index) in GrupoCardsTabela"
      :key="index"
      :card="ObjCardTabela.card"
      :tipo_card_tabela="ObjCardTabela.tipo_card_tabela"
    />

    <div class="row">
      <div
        :class="CorCardLista"
        style="height:100vh;width:320px;margin:2px;border-radius:10px"
        v-for="(status, index) in titulo_lista"
        :key="index"
      >
        <span v-show="MostrarTitulo" style="font-weight:500;color:#000000">{{
          status
        }}</span>
        <CardBase
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
    </div>
  </q-layout>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardBase from "src/components/CardBase.vue";
import CardPesquisa from "src/components/Cards/CardPesquisa.vue";
import CardTabela from "src/components/Cards/CardTabela.vue";
import { defineComponent } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BarraLayout, CardBase, CardTabela, CardPesquisa },
  name: "Pesquisa",
  data() {
    return {
      titulo_lista: ["Inicial", "Planejamento", "Execução", "Finalizado"],
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupos: [],
      GrupoCards: [],
      GruposFiltro: [],
      GrupoCardsTabela: [],
      CorCardLista: "",
      MostrarTitulo: false,
      Chip: true,
      showDrawer: false,
      filtrosAvancado: false,
      valorFiltro: [],
      btnAdicionarCampoAvancado: false,
      arrayFiltros: [],
      objArrayFiltros: []
    };
  },
  methods: {
    OnClickBarra(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCards = this.Grupo["cards"];
      this.GrupoCardsTabela = this.Grupo["cards_tabela"];
      if (this.IndexGrupoAtual === 1) {
        this.CorCardLista = "bg-blue-grey-2 q-pa-sm q-ma-sm";
        this.MostrarTitulo = true;
      } else {
        this.CorCardLista = "";
        this.MostrarTitulo = false;
      }
    },
    EsconderCardInputs() {
      this.valorFiltro = [];
      for (let i = 0; i < this.arrayFiltros.length; i++) {
        let itemArray = this.arrayFiltros[i];
        if (
          itemArray.campo === "Emissão" ||
          itemArray.campo === "Previsão" ||
          itemArray.campo === "Finalização"
        ) {
          this.valorFiltro.vAvaliar = itemArray.campo;
          if (itemArray.criterio === "maior_igual") {
            this.valorFiltro.vDataInicial = itemArray.valor;
          }
          if (itemArray.criterio === "menor_igual") {
            this.valorFiltro.vDataFinal = itemArray.valor;
          }
        }
        if (itemArray.campo === "Situação") {
          this.valorFiltro.vSituacao = itemArray.valor;
        }
        if (itemArray.campo === "Tags") {
          this.valorFiltro.vTags = itemArray.valor;
        }
        if (itemArray.campo === "Colaborador") {
          this.valorFiltro.vColaborador = itemArray.valor;
        }
        if (itemArray.campo === "Operacao") {
          this.valorFiltro.vOP = itemArray.valor;
        }
        if (itemArray.campo === "Campo") {
          this.valorFiltro.vCampo = itemArray.valor;
        }
        if (itemArray.campo === "Criterio") {
          this.valorFiltro.vCriterio = itemArray.valor;
        }
        if (itemArray.campo === "Valor") {
          this.valorFiltro.valorInput = itemArray.valor;
        }
      }
      this.arrModels = this.valorFiltro;
      this.showDrawer = !this.showDrawer;
    },
    removerChip(i) {
      this.arrayFiltros.splice(i, 1);
    },
    modelArray(pesquisaInput) {
      this.arrayFiltros.push({
        campo: "Pesquisa",
        valor: pesquisaInput
      });
      console.log(this.arrayFiltros);
    },
    GetitemFiltro(pCampo, pCriterio, pValor) {
      return JSON.parse(
        '{"campo":"' +
          pCampo +
          '",' +
          '"criterio":"' +
          pCriterio +
          '",' +
          '"valor":"' +
          pValor +
          '"}'
      );
    },
    onClickValorInput(arrModels) {
      this.arrayFiltros = [];
      this.valorFiltro = arrModels;
      let itemFiltro;
      if (this.valorFiltro.vAvaliar != null) {
        if (this.valorFiltro.vDataInicial != null) {
          itemFiltro = this.GetitemFiltro(
            this.valorFiltro.vAvaliar,
            "maior_igual",
            this.valorFiltro.vDataInicial
          );
          this.arrayFiltros.push(itemFiltro);
        }
        if (this.valorFiltro.vDataFinal != null) {
          itemFiltro = this.GetitemFiltro(
            this.valorFiltro.vAvaliar,
            "menor_igual",
            this.valorFiltro.vDataFinal
          );
          this.arrayFiltros.push(itemFiltro);
        }
      }
      if (this.valorFiltro.vSituacao != null) {
        itemFiltro = this.GetitemFiltro(
          "Situação",
          "contendo",
          this.valorFiltro.vSituacao
        );
        this.arrayFiltros.push(itemFiltro);
      }
      if (this.valorFiltro.vTags != null) {
        itemFiltro = this.GetitemFiltro(
          "Tags",
          "contendo",
          this.valorFiltro.vTags
        );
        this.arrayFiltros.push(itemFiltro);
      }
      if (this.valorFiltro.vColaborador != null) {
        itemFiltro = this.GetitemFiltro(
          "Colaborador",
          "contendo",
          this.valorFiltro.vColaborador
        );
        this.arrayFiltros.push(itemFiltro);
      }
      if (this.valorFiltro.vOP != null) {
        itemFiltro = this.GetitemFiltro(
          "Operacao",
          "contendo",
          this.valorFiltro.vOP
        );
        this.arrayFiltros.push(itemFiltro);
      }
      if (this.valorFiltro.vCriterio != null) {
        itemFiltro = this.GetitemFiltro(
          "Criterio",
          "contendo",
          this.valorFiltro.vCriterio
        );
        this.arrayFiltros.push(itemFiltro);
      }
      if (this.valorFiltro.vCampo != null) {
        itemFiltro = this.GetitemFiltro(
          "Campo",
          "contendo",
          this.valorFiltro.vCampo
        );
        this.arrayFiltros.push(itemFiltro);
      }
      if (this.valorFiltro.valorInput != null) {
        itemFiltro = this.GetitemFiltro(
          "Valor",
          "contendo",
          this.valorFiltro.valorInput
        );
        this.arrayFiltros.push(itemFiltro);
      }
      this.btnAdicionarCampoAvancado = !this.btnAdicionarCampoAvancado;
      this.showDrawer = false;
    },

    filtroAvancados() {
      this.showDrawer = !this.showDrawer;
      this.filtrosAvancado = true;
    }
  },
  created() {
    const json =
      '{"id_dashboard":10,"dashboard":"pesquisa","grupos":[{"id_grupo":1,"grupo":"Card","icone":"label","cards":[{"id_card":32,"card":"Pesquisa","ordem":1,"tipo_card":"Botao","sub_tipo":"lista-tags","conteudo_card":[{"tags":["Syclus 2.0","Desenvolvimento","Helton","Execução"],"entrada":"29/09/2021","saida":"29/09/2021"}]}]},{"id_grupo":2,"grupo":"Lista","icone":"fact_check","cards":[{"id_card":32,"card":"Pesquisa","ordem":1,"tipo_card":"Botao","sub_tipo":"lista-tags","conteudo_card":[{"tags":["Syclus 2.0","Desenvolvimento","Helton","Execução"],"entrada":"29/09/2021","saida":"29/09/2021"}]}]},{"id_grupo":3,"grupo":"Grid","icone":"grading","cards_tabela":[{"id_card":1,"card":"Vínculos","tipo_card_tabela":"tabela_padrao"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  },
  setup() {
    const $store = useStore();
    const arrModels = computed({
      get: () => $store.state.showcase.arrModels,
      set: val => {
        $store.commit("showcase/updateDrawerState", val);
      }
    });
    const miniState = ref(false);
    return {
      arrModels,
      drawer: ref(false),
      miniState,
      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false;
          e.stopPropagation();
        }
      }
    };
  }
});
</script>

<style>
p {
  padding: 0px;
  margin: 0px;
}
.btn-chip {
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 15px;
  margin: 5px;
  background-color: #808080;
  padding: 5px 8px;
}
</style>
