<template>
  <div>
    <q-tabs v-model="this.Tab" inline-label class="bg-grey-3 text-blue-8">
      <q-tab
        v-for="(btn, index) in ConteudoBtn"
        :key="index"
        :label="btn.grupo"
        :name="btn.grupo"
        :icon="btn.icone"
        :id_grupo="btn.id_grupo"
        class="capitalize"
        @click.prevent="onclickGrupo(index)"
      />
      <q-space />
      <div v-if="Aplicacao === 'AplicativosPadrao'">
        <q-btn flat dense>
          <q-icon name="settings" />
          <q-menu auto-close class="flex" style="width: 345px;">
            <q-item
              class="rounded-borders"
              clickable
              v-ripple.center
              style="width: 115px"
              v-for="(box, index) in ConteudoApp"
              :key="index"
            >
              <q-item-section style="text-align:center;margin:0 auto">
                <q-avatar
                  style="text-align:center;margin:0 auto"
                  :icon="box.icone"
                  :color="box.cor"
                  text-color="white"
                />
                <q-item-label class="q-mt-sm">{{ box.card }} </q-item-label>
              </q-item-section>
            </q-item>
          </q-menu>
        </q-btn>
        <q-btn flat dense>
          <q-icon name="help_outline" class="q-mx-md" />
        </q-btn>
      </div>
      <div
        class="flex items-center"
        style="paddding:10px 0px"
        v-if="Aplicacao === 'AplicativosPesquisa'"
      >
        <q-select v-model="model" dense :options="options" class="q-mr-md" />
        <q-input
          v-model="text"
          style="width:150px"
          dense
          label="Pesquisa"
          v-show="pesquisa"
        />
        <q-btn
          unelevated
          round
          color="primary"
          icon="search"
          class="q-mx-md"
          @click="pesquisa = true"
        />
        <q-btn
          unelevated
          round
          color="primary"
          icon="filter_list"
          class="q-mr-md"
          @click="darkDialog = true"
        />
        <q-dialog
          v-model="darkDialog"
          persistent
          transition-show="flip-down"
          transition-hide="flip-up"
        >
          <EtapasPesquisa
            :EtapasWorkFlow="ResultWorkflow"
            @close="darkDialog = false"
          />
        </q-dialog>
      </div>
      <div v-if="Aplicacao === 'AplicativosSalvar'">
        <q-btn
          unelevated
          round
          color="red"
          icon="close"
          class="q-mr-md"
          size="12px"
          to="/atividade"
        />
        <q-btn
          unelevated
          round
          color="primary"
          icon="save"
          class="q-mr-md"
          size="12px"
        />
      </div>
    </q-tabs>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import EtapasPesquisa from "src/layouts/EtapasPesquisa.vue";
export default defineComponent({
  props: ["ConteudoBtn", "ConteudoApp", "Aplicacao"],
  name: "BarraLayout",
  components: { EtapasPesquisa },
  setup() {
    return {
      pesquisa: ref(false),
      ResultWorkflow: ref([]),
      darkDialog: ref(false),
      text: ref(""),
      model: ref("Desenvolvimento"),
      options: ["Desenvolvimento", "Administração", "Contas", "Fiscal"]
    };
  },
  data() {
    return {
      date: [],
      Valor: []
    };
  },
  methods: {
    onclickGrupo(ValorIndex) {
      this.$emit("OnClick", ValorIndex);
      this.Valor = ValorIndex;
    },
    tagsCard() {
      this.ResultWorkflow;
    }
  },
  computed: {
    Tab() {
      return this.ConteudoBtn[this.Valor].grupo;
    }
  },
  created() {
    const json =
      '{"etapas":[{"titulo_etapa":"Filtro","id_etapa":1,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"input_data","placeholder":"Período inicial"},{"tipo_componente":"input_data","placeholder":"Período final"},{"tipo_componente":"selecao_padrao","placeholder":"Avaliar","modelo":["Emissão","Previsão","Finalização"]},{"tipo_componente":"selecao_padrao","placeholder":"Situação","modelo":["Inicial","Planejamento","Execução","Finalizado"]},{"tipo_componente":"selecao_padrao","placeholder":"Tags","modelo":["Syclus 1","Syclus 2","Fiscal"]},{"tipo_componente":"selecao_padrao","placeholder":"Colaborador","modelo":["Henrique","Helton","Danilo"]}]},{"titulo_etapa":"Avançados","id_etapa":2,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"selecao_padrao","placeholder":"OP","modelo":["E","OU"]},{"tipo_componente":"selecao_padrao","placeholder":"Campo","modelo":["Situação"]},{"tipo_componente":"selecao_padrao","placeholder":"Critério","modelo":["Contendo"]},{"tipo_componente":"input_texto","placeholder":"Valor"}]}]}';
    this.ResultWorkflow = JSON.parse(json);
    this.tagsCard();
    this.onclickGrupo(0);
    return;
  }
});
</script>
