<template>
  <div v-for="(lista, index) in conteudo_cards" :key="index">
    <div class="text-center	q-pt-xl" v-if="funcao_card === 'lista-padrao'">
      <div class="container-flex">
        <q-icon name="description" class="text-primary" style="font-size: 4.4em;" />
        <p>{{ lista }}</p>
      </div>
      <div class="q-gutter-sm">
        <q-btn
          unelevated
          rounded
          color="primary"
          class="spaccing"
          label="Criar"
        />
      </div>
    </div>
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
.spaccing {
  padding: 0px 20px;
}
.container-flex{
    display: flex;
    justify-content: space-between;
    margin:20px auto 0px auto; 
    align-items: center;
}
</style>
