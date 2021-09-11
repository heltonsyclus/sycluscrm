<template>
  <BarraLayout @OnClick="OnClickValor" :ConteudoBtn="TituloDashboard" />
  <q-page class="row">
    <CardBase
      class="q-ma-xs"
      v-for="(ObjCard, index) in CardDashboard"
      :key="index"
      :Titulo="ObjCard.Titulo"
      :BtnComando="ObjCard.BtnComando"
    />
    <q-page-sticky position="bottom-right" :offset="fabPos">
      <q-fab
        icon="add"
        direction="up"
        color="primary"
        :disable="draggingFab"
        v-touch-pan.prevent.mouse="moveFab"
      >
        <q-fab-action
          color="blue-14"
          @click="$router.push({ name: 'projeto' })"
          icon="description"
        />
        <q-fab-action
          color="green-14"
          @click="$router.push({ name: 'atividade' })"
          icon="assignment"
        />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
import CardBase from "src/components/CardBase.vue";
import BarraLayout from "src/layouts/BarraLayout.vue";
import { Titulo } from "src/commands/titulos-barra-commands.js";
import { Card } from "../commands/cards-commands.js";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  components: { BarraLayout, CardBase },
  mixins: [Titulo, Card],
  name: "Index",
  setup() {
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
      fabPos,
      draggingFab,
      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y
        ];
      }
    };
  },
  methods: {
    OnClickValor(ReceberIndex) {
      //  alert(ReceberIndex);
    }
  },
  created() {
    return this.OnClickValor(0);
  }
});
</script>
