<template>
  <BarraLayout @OnClick="OnClickValor" :ConteudoBtn="TituloWorkflow" />
  <q-page class="row">
    <CardBase
      class="q-ma-xs"
      v-for="(ObjCard, index) in CardAtividade"
      :key="index"
      :Titulo="ObjCard.Titulo"
    />
  </q-page>
  {{ Card }}
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardBase from "src/components/CardBase.vue";
import { Card } from "src/commands/cards-commands.js";
import { defineComponent } from "vue";
import { Titulo } from "src/commands/titulos-barra-commands.js";
export default defineComponent({
  mixins: [Titulo, Card],
  components: { BarraLayout, CardBase },
  name: "WorkFlow",
  setup() {
    return {
      sx: "sasa",
      CardWorkFlow: [
        {
          Titulo: "Criar WorkFlow"
        }
      ]
    };
  }
});
</script>
