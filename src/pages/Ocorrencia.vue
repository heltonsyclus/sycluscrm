<template>
<BarraLayout
@OnClick="OnClickValor"
:ConteudoBtn="TituloOcorrencia" />
  <q-page class="flex flex-center">
    ocorrencias
  </q-page>
</template>

<script>
import BarraLayout from 'src/layouts/BarraLayout.vue';
import { defineComponent } from 'vue';
import { Titulo } from "src/commands/titulos-barra-commands.js";
export default defineComponent({
  mixins: [Titulo],
  components: { BarraLayout },
  name: 'PageIndex'
})
</script>
