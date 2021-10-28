<template>
  <BarraLayout
    @OnClick="OnClickBarra"
    @onClickFiltros="EsconderCardInputs"
    @valorInputPesquisa="valorPesquisa"
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
        <span v-show="MostrarTitulo" style="font-weight:500">{{ status }}</span>
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
      CorCardLista: null,
      MostrarTitulo: false,
      Chip: true,
      showDrawer: false,
      valorFiltro: [],
      btnAdicionarCampoAvancado: false,
      ArrayFiltros: [],
     
    };
  },
  methods: {
    OnClickBarra(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCards = this.Grupo["cards"];
      this.GrupoCardsTabela = this.Grupo["cards_tabela"];
      if (this.IndexGrupoAtual === 1) {
        this.CorCardLista = "bg-grey-5 q-pa-sm q-ma-sm";
        this.MostrarTitulo = true;
      } else {
        this.CorCardLista = "";
        this.MostrarTitulo = false;
      }
    },
    limparInputs(){
    },
    EsconderCardInputs() {
      this.showDrawer = !this.showDrawer;
      if (this.showDrawer) {
          // console.log(this.ArrayFiltros); 
        this.valorFiltro = {
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
     //console.log(this.valorFiltro);
        for (let i = 0; i < this.ArrayFiltros.length; i++) {
          this.ArrayFiltros[i]["valor"];
          this.valorFiltro[i]
        }
        console.log(this.valorFiltro);
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
      '{"id_dashboard":10,"dashboard":"pesquisa","grupos":[{"id_grupo":1,"grupo":"Card","icone":"label","cards":[{"id_card":32,"card":"Pesquisa","ordem":1,"tipo_card":"Botao","sub_tipo":"lista-tags","conteudo_card":[{"tags":["Syclus 2.0","Desenvolvimento","Helton","Execução"],"entrada":"29/09/2021","saida":"29/09/2021"}]}]},{"id_grupo":2,"grupo":"Lista","icone":"fact_check","cards":[{"id_card":32,"card":"Pesquisa","ordem":1,"tipo_card":"Botao","sub_tipo":"lista-tags","conteudo_card":[{"tags":["Syclus 2.0","Desenvolvimento","Helton","Execução"],"entrada":"29/09/2021","saida":"29/09/2021"}]}]},{"id_grupo":3,"grupo":"Grid","icone":"grading","cards_tabela":[{"id_card":1,"card":"Vínculos","tipo_card_tabela":"tabela_padrao"}]}]}';
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
