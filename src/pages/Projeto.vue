<template>
  <BarraLayout @OnClick="OnClickValor" :ConteudoBtn="TituloProjeto" />
  <q-page class="row">
    <CardBase
      class="q-ma-xs"
      v-for="(ObjCard, index) in CardProjeto"
      :key="index"
      :Titulo="ObjCard.Titulo"
    />
  </q-page>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardBase from "src/components/CardBase.vue";
import { defineComponent } from "vue";
import { Titulo } from "src/commands/titulos-barra-commands.js";
import { Card } from "../commands/cards-commands.js";
export default defineComponent({
  components: { BarraLayout, CardBase },
  name: "Projeto",
  mixins: [Titulo, Card],
  setup() {
    return {};
  }
});
</script>
