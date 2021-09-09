<template>
<BarraLayout/>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/syclus.png"
    >
  </q-page>
</template>

<script>
import BarraLayout from 'src/layouts/BarraLayout.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { BarraLayout },
  name: 'PageIndex'
})
</script>
