<template>
  <BarraLayout
    @OnClick="OnClickValor"
    @onClickFiltros="EsconderCardInputs"
    @valorInputPesquisa="valorPesquisa"
    :ConteudoBtn="Grupos"
    Aplicacao="AplicativosPesquisa"
  />

  <q-layout container style="height: 100vh">
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
            @limparDados="limparInputs"
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
        v-for="(objFiltro, i) in ArrayFiltros"
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
    <div class="column ContainerCardRetangular">
      <CardRetangulo
        v-for="(ObjCardRetangulo, index) in GrupoCardsRetangular"
        :key="index"
        :card="ObjCardRetangulo.card"
        :tipo_card_retangulo="ObjCardRetangulo.tipo_card_retangulo"
        :sub_tipo="ObjCardRetangulo.sub_tipo"
      />
    </div>
  </q-layout>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardRetangulo from "src/components/Cards/CardRetangulo.vue";
import { defineComponent } from "vue";
import CardPesquisa from "src/components/Cards/CardPesquisa.vue";
import { ref } from "vue";

export default defineComponent({
  components: { BarraLayout, CardRetangulo, CardPesquisa },
  name: "Ocorrencia",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupo: [],
      Grupos: [],
      GrupoCardsRetangular: [],
      Chip: true,
      showDrawer: false,
      valorFiltro: [],
      btnAdicionarCampoAvancado: false,
      ArrayFiltros: []
    };
  },
  methods: {
    OnClickValor(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCardsRetangular = this.Grupo["cards_retangulo"];
    },

    limparInputs() {},
    EsconderCardInputs() {
      this.showDrawer = !this.showDrawer;
      if (this.showDrawer) {
        console.log(this.ArrayFiltros);
        this.limparInputs();
        this.$refs.refMyComponent.limparDados().this.valorFiltro = {
          vAvaliar: null,
          vDataInicial: null,
          vDataFinal: null,
          vSituacao: null,
          vTags: null,
          vColaborador: null,
          vCriterio: null,
          vCampo: null,
          valorInput: null,
          vOP: null
        };
        console.log(this.valorFiltro);
        for (let i = 0; i < this.ArrayFiltros.length; i++) {
          this.ArrayFiltros[i]["valor"];
        }
      }
    },
    valorPesquisa(pesquisaInput) {
      this.valorFiltro.push({
        pesquisaInput: pesquisaInput
      });
    },
    GetItemFiltro(pCampo, pCriterio, pValor) {
      return (
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
      this.valorFiltro = arrModels;
      this.ArrayFiltros = [];
      let ItemFiltro;
      if (arrModels[0]["vAvaliar"] != null) {
        if (arrModels[0]["vDataInicial"] != null) {
          ItemFiltro = this.GetItemFiltro(
            arrModels[0]["vAvaliar"],
            "maior_igual",
            arrModels[0]["vDataInicial"]
          );
          this.ArrayFiltros.push(JSON.parse(ItemFiltro));
        }
        if (arrModels[0]["vDataFinal"] != null) {
          ItemFiltro = this.GetItemFiltro(
            arrModels[0]["vAvaliar"],
            "menor_igual",
            arrModels[0]["vDataFinal"]
          );
          this.ArrayFiltros.push(JSON.parse(ItemFiltro));
        }
      }
      if (arrModels[0]["vSituacao"] != null) {
        ItemFiltro = this.GetItemFiltro(
          "situação",
          "contendo",
          arrModels[0]["vSituacao"]
        );
        this.ArrayFiltros.push(JSON.parse(ItemFiltro));
      }
      if (arrModels[0]["vTags"] != null) {
        ItemFiltro = this.GetItemFiltro(
          "tags",
          "contendo",
          arrModels[0]["vTags"]
        );
        this.ArrayFiltros.push(JSON.parse(ItemFiltro));
      }
      if (arrModels[0]["vColaborador"] != null) {
        ItemFiltro = this.GetItemFiltro(
          "colaborador",
          "contendo",
          arrModels[0]["vColaborador"]
        );
        this.ArrayFiltros.push(JSON.parse(ItemFiltro));
      }
      this.btnAdicionarCampoAvancado = true;
      this.showDrawer = false;
    },
    removerChip(i) {
      this.ArrayFiltros.splice(i, 1);
    },
    filtroAvancados(filtroAvancado) {
      alert(filtroAvancado);
      this.filtroAvancada = filtroAvancado;
      this.filtroAvancada = true;
      //this.onClickCamposAvancados(this.AdicionarCampoAvancado = true);
    }
  },
  created() {
    const json =
      '{"id_dashboard":4,"dashboard":"Ocorrências","grupos":[{"id_grupo":1,"grupo":"Filtro","icone":"filter_list","cards_retangulo":[{"id_card":1,"card":"Atividade1","tipo_card_retangulo":"RetanguloOcorrencia"},{"id_card":2,"card":"Atividade2","tipo_card_retangulo":"RetanguloOcorrencia"},{"id_card":3,"card":"Atividade3","tipo_card_retangulo":"RetanguloOcorrencia"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  },

  setup() {
    const miniState = ref(false);
    return {
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
.ContainerCardRetangular {
  width: 95%;
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
