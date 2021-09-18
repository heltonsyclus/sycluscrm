<template>
  <div v-if="funcao_card === 'secao-padrao'">
    <div class="flex justify-between items-center bg">
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        <q-tooltip>Helton</q-tooltip>
      </q-avatar>
      <div class="q-py-sm q-px-md text-center">
        <p style="font-weight:500">{{ conteudo }}</p>
        <p>Desenvolvimento</p>
      </div>
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

  <div v-if="funcao_card === 'secao-repasse'">
    <div class="flex justify-between items-center bg q-my-none">
      <div class="flex items-center">
        <q-avatar style="font-size: 3rem;">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
          <q-tooltip>Amanda</q-tooltip>
        </q-avatar>
        <q-icon name="arrow_back" class="text-green" style="font-size: 2rem;" />
        <q-avatar style="font-size: 3rem;">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          <q-tooltip>Helton</q-tooltip>
        </q-avatar>
      </div>
      <div class="q-py-sm q-px-md text-center">
        <p style="font-weight:500">{{ conteudo }}</p>
        <p>
          <q-icon name="today" class="text-primary" style="font-size: 2em;" />
          {{ dataCompleta }}
        </p>
      </div>
    </div>
    <q-separator />
  </div>

  <div v-if="funcao_card === 'secao-contexto'">
    <div class="flex justify-between items-center q-my-none bg">
      <div class="column">
        <p style="font-weight:500">{{ conteudo }}</p>
        <div>
          <q-badge color="blue" style="padding:5px">
            {{ responsavel }}
          </q-badge>
        </div>
        <p>{{ responsavel }}</p>
        <p>{{ numero }}</p>
      </div>
      <q-btn flat icon="more_vert" position="fixed-top-right">
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
  props: ["funcao_card"],
  data() {
    return {
      conteudo: "ATIVIDADE XML",
      responsavel: "Ana Clara",
      numero: "(82)98885-5555",
      hoje: new Date().toLocaleString("pt-br", { day: "numeric" }),
      mes: (new Date().getMonth() + 1).toString().padStart(2, "0"),
      ano: new Date()
        .getFullYear()
        .toString()
        .padStart(2, "0")
    };
  },
  computed: {
    dataCompleta() {
      return this.hoje + "/" + this.mes + "/" + this.ano;
    }
  }
};
</script>
<style scoped>
* {
  padding: 0x;
  margin: 0;
}
</style>
