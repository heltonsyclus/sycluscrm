<template>
  <div>
    <BarraLayout @OnClick="OnClickValor" :ConteudoBtn="Titulos" />
    <q-page class="row">
      <CardBase
        class="q-ma-xs"
        v-for="(ObjCard, index) in Dashboards[this.Etapa].card_dashboard"
        :key="index"
        :Titulo="ObjCard.Titulo"
        :Btn_Comando="ObjCard.Btn_Comando"
      />
      {{ Titulos }}

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
  </div>
</template>

<script>
import CardBase from "src/components/CardBase.vue";
import BarraLayout from "src/layouts/BarraLayout.vue";
//import { Titulo } from "src/commands/titulos-barra-commands.js";
//import { Card } from "../commands/cards-commands.js";
import { DashBoard } from "../commands/dashboard-commands.js";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  components: { BarraLayout, CardBase },
  // mixins: [Titulo, Card],
  mixins: [DashBoard],
  name: "Index",
  setup() {
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);

    return {
      Etapa: 0,
      Titulos: [],
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
      console.log((this.Etapa = ReceberIndex));
      for (let i = 0; i < this.Dashboards.length; i++) {
        this.Titulos[i] = this.Dashboards[i].titulo;
      }
    }
  },
  created(){
    return this.OnClickValor()
  }
});
</script>
