<template>
  <div v-for="(objLinha, i) in conteudo_cards" :key="i" class="row">
    <div
      v-for="(objColuna, j) in objLinha.colunas"
      :key="j"
      :class="(this.width = objColuna.width)"
      class="row"
    >
      <div :class="ConverteColuna" style="width:100%">
        <q-input
          style="max-width:100%"
          v-if="objColuna['sub_tipo'] === 'input-padrao'"
          bottom-slots
          dense
          v-model="texto"
          :label="objColuna['label']"
        />
        <q-select
          v-if="objColuna['sub_tipo'] === 'input-selecao'"
          dense="dense"
          v-model="objColuna['opcao'][0]"
          :options="objColuna['opcao']"
          :label="objColuna['label']"
          style="padding-right:5px;max-width:100%"
        />
        <q-input
          v-if="objColuna['sub_tipo'] === 'input-adicao'"
          dense="dense"
          bottom-slots
          style="max-width:100%"
          v-model="texto"
          :label="objColuna['label']"
          class="q-mt-sm"
        >
          <template v-slot:append>
            <q-btn round dense flat icon="add" />
          </template>
        </q-input>

        <q-input
          v-if="objColuna['sub_tipo'] === 'input-data'"
          v-model="date"
          type="date"
          :label="objColuna['label']"
          dense
        />

        <q-input
          v-if="objColuna['sub_tipo'] === 'input-time'"
          v-model="time"
          dense
          type="time"
        />

        <q-btn
          v-if="objColuna['sub_tipo'] === 'input-btn'"
          unelevated
          rounded
          dense
          color="primary"
          :label="objColuna['label']"
          style="padding:2px 15px;margin:12px 0"
        />
      </div>
    </div>
  </div>
</template>
<script>
//:style="{ width: `${objColuna['width']}%` }"

export default {
  props: ["funcao_card", "conteudo_cards"],

  data() {
    return {
      texto: "",
      date: "",
      time: "00:00",
      width: ""
    };
  },
  computed: {
    ConverteColuna() {
      return "col-" + Math.round((this.width * 12) / 100);
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
