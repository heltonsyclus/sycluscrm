<template>
  <div v-for="(lista, index) in conteudo_cards" :key="index">
    <div
      class="flex justify-between items-center bg q-my-none"
      v-if="funcao_card === 'lista-padrao'">
      <span class="q-pt-md q-pl-sm capitalize text-grey-9" style="font-weight:700">{{ lista }}</span>
      <q-btn color="dark" round flat icon="more_vert" class="items-center">
        <q-menu cover auto-close dense="dense">
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
