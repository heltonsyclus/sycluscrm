<template>
  <BarraLayout 
  @OnClick="OnClickValor"
  :ConteudoBtn="TituloAgenda" />
  <div class="row">
    <div class="col-3 window-height bg-grey-4">1</div>
    <div class="col-3">Agenda 2</div>
    <div class="col-3">1</div>
    <div class="col-2">4</div>
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import { defineComponent } from "vue";
import { Titulo } from "src/commands/titulos-barra-commands.js";
export default defineComponent({
    mixins: [Titulo],
  components: { BarraLayout },
  name: "Agenda"
});
</script>
