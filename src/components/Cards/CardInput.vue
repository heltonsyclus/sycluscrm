<template>
  <div v-for="(objLinha, i) in conteudo_cards" :key="i">
    <div
      v-for="(objColuna, j) in objLinha.colunas"
      :key="j"
      :class="(this.width = objColuna.width)"
      class="row"
    >
      <q-input
        :class="ConverteColuna"
        v-if="objColuna['sub_tipo'] === 'input-padrao'"
        bottom-slots
        dense
        v-model="arrModels[i]"
        :label="objColuna['label']"
      />
      <q-select
        class="col-12"
        v-if="objColuna['sub_tipo'] === 'input-selecao'"
        dense="dense"
        v-model="arrModels[i]"
        :options="objColuna['opcao']"
        :label="objColuna['label']"
      />

      <q-input
        :class="ConverteColuna"
        v-if="objColuna['sub_tipo'] === 'input-adicao'"
        dense="dense"
        bottom-slots
        v-model="arrModels[i]"
        :label="objColuna['label']"
        class="q-mt-sm"
      >
        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input>

      <q-input
           class="col-12"
        v-if="objColuna['sub_tipo'] === 'input-data'"
        v-model="arrModels[i]"
        type="date"
        :label="objColuna['label']"
        dense
      />
      <q-input
        class="col-12"
        v-if="objColuna['sub_tipo'] === 'input-time'"
        v-model="arrModels[i]"
        dense
        type="time"
      />

      <q-btn
        :class="ConverteColuna"
        v-if="objColuna['sub_tipo'] === 'input-btn'"
        unelevated
        rounded
        dense
        class="capitalize"
        color="primary"
        :label="objColuna['label']"
        style="padding:2px 15px;margin:12px 0"
        @click.prevent="enviarValorInput"
      />
    </div>
  </div>
</template>
<script>
//:style="{ width: `${objColuna['width']}%` }"
export default {
  props: ["funcao_card", "conteudo_cards"],
  data() {
    return {
      arrayInput: [],
      arrModels: [],
      hoje: new Date()
        .toLocaleString("pt-br", { day: "numeric" })
        .padStart(2, "0"),
      mes: (new Date().getMonth() + 1).toString().padStart(2, "0"),
      ano: new Date()
        .getFullYear()
        .toString()
        .padStart(2, "0"),
      width: null
    };
  },
  methods: {
    enviarValorInput(arrModels) {
      this.$emit("arrModels", this.arrModels);
    }
  },
  computed: {
    ConverteColuna() {
      return "col-" + Math.round((this.width * 12) / 100);
    },
    DataCompleta() {
      return this.hoje + "/" + this.mes + "/" + this.ano;
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
