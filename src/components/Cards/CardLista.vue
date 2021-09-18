<template>
  <div v-for="(lista, index) in conteudo_cards" :key="index">
    <div
      class="flex justify-between items-center bg q-my-none"
      v-if="funcao_card === 'lista-padrao'"
    >
      <p class="q-pt-md q-pl-sm">{{ lista }}</p>
      <q-btn color="dark" round flat icon="more_vert" class="items-center">
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
    </div>
     <q-separator />
  </div>
</template>

<script>
export default {
  props: ["funcao_card", "conteudo_cards"],
  setup() {
    return {
      nomeAtividade: "Dashboard"
    };
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 1px 5px;
}
</style>