<template>
  <q-card class="my-card-pesquisa">
    <q-item
      class="items-center"
      style="background-color:#109CF1;padding:0px 10px"
      dense="dense"
    >
      <q-item-section style="height:40px;font-weight:700;color:White">
        Filtro
      </q-item-section>
      <div class="flex justify-end">
        <q-btn
          round
          flat
          dense="dense"
          class="bg-green"
          text-color="white"
          icon="filter_list"
          @click.prevent="aplicaFiltro"
        >
        </q-btn>
      </div>
    </q-item>

    <q-card-section style="padding:0;margin:5px auto;width:95%">
      <q-form>
        <div class="fundo-card">
          <p><strong>Filtros por período:</strong></p>
          <div style="padding:0px 5px 5px 5px">
            {{ this.drawerState.vAvaliar }} <br />
            {{ this.drawerState.vDataInicial }}<br />
            {{ this.drawerState.vDataFinal }}<br />
            {{ this.showDrawer }}
            <q-select
              clearable
              dense="dense"
              v-model="vAvaliar"
              :options="avaliar"
              label="Avaliar"
            />
            <q-input v-model="vDataInicial" type="date" dense />
            <q-input v-model="vDataFinal" type="date" dense />
          </div>
        </div>

        <div class="fundo-card">
          <p><strong>Filtros por execução:</strong></p>
          <div style="padding:0px 5px 5px 5px">
            <q-select
              dense="dense"
              multiple
              v-model="vSituacao"
              :options="situacao"
              label="Situação"
              clearable
            />

            <q-select
              bottom-slots
              dense="dense"
              clearable
              multiple
              v-model="vTags"
              :options="tags"
              label="Tags"
            />

            <q-select
              clearable
              dense="dense"
              v-model="vColaborador"
              :options="colaborador"
              multiple
              label="Colaborador"
            />
          </div>
        </div>
        <div class="fundo-card" v-show="filtroAvancado">
          <p><strong>Filtros por avançados:</strong></p>
          <div style="padding:0px 5px 5px 5px">
            <q-select
              clearable
              dense="dense"
              v-model="vOP"
              :options="situacao"
              label="OP"
            />

            <q-select
              clearable
              bottom-slots
              dense="dense"
              v-model="vCampo"
              :options="Campo"
              label="Campo"
            />

            <q-select
              clearable
              dense="dense"
              v-model="vCriterio"
              :options="criterio"
              label="Critério"
            />
            <q-input v-model="valorInput" label="Valor" dense clearable />
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["funcao_card", "conteudo_cards", "filtroAvancado"],
  data() {
    return {
      avaliar: ["Emissão", "Previsão", "Finalização"],
      situacao: ["Inicial", "Planejamento", "Execução", "Finalizado"],
      tags: ["Syclus 1", "Syclus 2", "Fiscal"],
      colaborador: ["Henrique", "Helton", "Danilo", "João Paulo"],
      OP: ["E", "OU"],
      Campo: ["Situação"],
      criterio: ["Contendo"],
      arrModels: [],
      vAvaliar: null,
      vDataInicial: null,
      vDataFinal: null,
      vSituacao: null,
      vTags: null,
      vColaborador: null,
      vOP: null,
      vCampo: null,
      vCriterio: null,
      valorInput: null
    };
  },
  methods: {
    aplicaFiltro() {
      this.arrModels.unshift({
        vAvaliar: this.vAvaliar,
        vDataInicial: this.vDataInicial,
        vDataFinal: this.vDataFinal,
        vSituacao: this.vSituacao,
        vTags: this.vTags,
        vColaborador: this.Colaborador,
        vOP: this.vOP,
        vCampo: this.vCampo,
        vCriterio: this.vCriterio,
        valorInput: this.valorInput
      });
      this.$emit("arrModels", (this.drawerState = this.arrModels));
      if (this.showDrawer === true) {
        alert("true");
      }
      /*(this.vAvaliar = null),
        (this.vDataInicial = null),
        (this.vDataFinal = null),
        (this.vSituacao = null),
        (this.vTags = null),
        (this.vColaborador = null),
        (this.vOP = null),
        (this.vCampo = null),
        (this.vCriterio = null),
        (this.valorInput = null);*/
    }
  },
  setup() {
    const $store = useStore();
    const drawerState = computed({
      get: () => $store.state.showcase.drawerState,
      set: val => {
        $store.commit("showcase/updateDrawerState", val);
      }
    });
    const showDrawer = computed({
      get: () => $store.state.showcase.showDrawer,
      set: val => {
        $store.commit("showcase/abrirTelaPesquisa", val);
      }
    });
    const miniState = ref(false);
    return {
      drawerState,
      showDrawer,
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
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
