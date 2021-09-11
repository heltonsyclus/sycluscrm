<template>
  <q-card class="my-card-s" flat bordered>
    <q-item>
      <q-item-section>
        {{ Titulo }}
      </q-item-section>

      <q-btn color="dark" round flat icon="more_vert" v-if="Btn_Comando ==='btn-itens'">
        <q-menu cover auto-close>
          <q-list>
            <q-item clickable>
              <q-item-section>Retirar</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Arrasta</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <div style="width: 100px" v-if="Btn_Comando ==='btn-filtro'">
          <q-select
            filled
            v-model="model"
            :options="options"
            label="Filtro"
          />
      </div>

    </q-item>
    <q-separator inset />
    <q-card-section>
      {{ conteudo }}
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { LayoutCard } from "../commands/props-commands";

export default {
  mixins: [LayoutCard],
  setup() {
    return {
      conteudo: "corpo",
      model: ref(null),
      options: ["Hoje", "Semana", "Mês"]
    };
  }
};
</script>

