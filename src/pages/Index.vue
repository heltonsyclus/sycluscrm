<template>
  <BarraLayout />
  <q-page class="q-pa-md">
    <CardBase />
  </q-page>
</template>

<script>
import CardBase from "src/components/CardBase.vue";
import BarraLayout from "src/layouts/BarraLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { BarraLayout, CardBase },
  name: "Index"
});
</script>
