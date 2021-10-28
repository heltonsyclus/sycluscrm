<template>
  <q-card class="my-card q-pa-md" style="width: 550px">
    <q-card-section>
      <q-form
        ref="formulario"
        @submit="onSubmit"
        class="q-gutter-md"
        v-for="(arrEtapas, index) in EtapasWorkFlow"
        :key="index"
      >
        <div class="flex justify-between">
          <div class="text-h6 color-titulo">
            {{ arrEtapas[this.etapaAtual].titulo_etapa }}
          </div>
          <q-icon
            name="close"
            class="text-red"
            style="font-size: 2rem;cursor: pointer;"
            @click="$emit('close')"
          />
        </div>
        <div
          v-for="(objComponenteTela, index) in arrEtapas[this.etapaAtual]
            .componente_tela"
          :key="index"
        >
          <q-input
            v-if="objComponenteTela.tipo_componente === 'input_texto'"
            id="input_valor"
            bottom-slots
            v-model="arrModels[index]"
            :label="objComponenteTela.placeholder"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo Obrigatório']"
          />

          <q-select
            v-if="objComponenteTela.tipo_componente === 'selecao_multipla'"
            id="input_valor"
            bottom-slots
            v-model="arrModels[index]"
            multiple
            :options="objComponenteTela.modelo"
            :label="objComponenteTela.placeholder"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-select
            id="input_valor"
            v-if="objComponenteTela.tipo_componente === 'selecao_padrao'"
            bottom-slots
            v-model="arrModels[index]"
            :options="objComponenteTela.modelo"
            :label="objComponenteTela.placeholder"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-input
            id="input_valor"
            v-if="objComponenteTela.tipo_componente === 'input_numero'"
            bottom-slots
            type="number"
            v-model="arrModels[index]"
            :label="objComponenteTela.placeholder"
            lazy-rules
            :rules="[
              val => (val !== null && val !== '') || 'Valor Obrigatório',
              val => (val > 0 && val < 10) || 'Valor acima do permitido'
            ]"
          />

          <q-input
            id="input_valor"
            v-if="objComponenteTela.tipo_componente === 'input_data'"
            v-model="arrModels[index]"
            bottom-slots
            type="date"
          />
        </div>

        <div class="text-center">
          <q-btn
            label="Voltar"
            color="red"
            flat
            class="q-mr-sm"
            v-if="arrEtapas[this.etapaAtual]['id_etapa'] > 1"
            @click.prevent="onRetornar"
          />

          <q-btn
            label="Avançar"
            type="submit"
            color="primary"
            v-if="arrEtapas[this.etapaAtual]['id_etapa'] == 1"
          />

          <q-btn
            label="Concluído"
            type="submit"
            color="primary"
            v-if="
              arrEtapas[this.etapaAtual]['id_etapa'] ===
                arrEtapas[this.etapaAtual]['qtde_etapa']
            "
            :to="rotas"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  props: ["EtapasWorkFlow"],
  emits: ["close"],
  setup() {
    const $q = useQuasar();
    const accept = ref(false);
    const etapaAtual = ref(0);
    const matrizModels = [];
    const arrModels = ref([]);
    const formulario = ref(null);
    const qtdeEtapas = 2;
    return {
      rotas: ref("/projetos"),
      accept,
      etapaAtual,
      matrizModels,
      arrModels,
      formulario,
      qtdeEtapas,
      onSubmit() {
        if (accept.value !== true) {
          matrizModels[etapaAtual.value] = arrModels.value;
          etapaAtual.value++;
          if (matrizModels.length > etapaAtual.value) {
            arrModels.value = matrizModels[etapaAtual.value];
          } else {
            arrModels.value = [];
          }
          if (etapaAtual.value === qtdeEtapas) {
            rotas.value = "/projetos";
          } else {
            formulario.value.resetValidation();
          }
        }
      },
      onReset() {
        formulario.value.resetValidation();
      },
      onRetornar() {
        matrizModels[etapaAtual.value] = arrModels.value;
        etapaAtual.value--;
        arrModels.value = matrizModels[etapaAtual.value];
      }
    };
  }
};
</script>

<style scoped>
* {
  padding: 4px 8px 8px 8px;
  margin: 0px;
}
.color-titulo::before {
  background-color: #109cf1;
  content: "";
  display: inline-block;
  width: 3px;
  height: 15px;
  margin-right: 5px;
}
</style>
