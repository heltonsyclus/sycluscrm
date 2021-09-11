<template>
  <BarraLayout @OnClick="OnClickValor" :ConteudoBtn="TituloCliente" />
  <div class="row">
    <div class="col-4 window-height bg-grey-4">
      <CardBase
        class="q-ma-xs"
        v-for="(ObjCard, index) in CardCliente"
        :key="index"
        :Titulo="ObjCard.Titulo"
      />
    </div>
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardBase from "src/components/CardBase.vue";
import { defineComponent } from "vue";
import { Titulo } from "src/commands/titulos-barra-commands.js";
import { Card } from "../commands/cards-commands.js";
export default defineComponent({
  components: { BarraLayout, CardBase },
  mixins: [Titulo, Card],
  name: "Cliente",
  setup() {
    return {};
  }
});
</script>
