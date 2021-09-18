<template>
  <div style="width:100%" class="text-dark">
    <q-list
      bordered
      class="rounded-borders bg-blue-11 q-mb-md q-my-none margin-bot"
      v-for="(resposta, index) in Conteudo"
      :key="index"
    >
      <q-expansion-item
        expand-separator
        :label="resposta.TituloModelo"
        class="q-mb-md"
      >
        <q-card>
          <q-card-section class="text-dark flex justify-between items-center">
            <p class="q-pt-md pl">{{ resposta.respostaModelo }}</p>
            <q-btn
              color="dark"
              round
              flat
              icon="more_vert"
              class="items-center"
            >
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
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Conteudo: [
        {
          TituloModelo: "Desenvolvimento",
          respostaModelo: "Figma"
        },
        {
          TituloModelo: "Administração",
          respostaModelo: "Reunião"
        }
      ],
      numero:"2"
    };
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  }
  .margin-bot{
    margin-bottom: 3px;
  }
  .pl{padding-left: 5px;}
</style>
