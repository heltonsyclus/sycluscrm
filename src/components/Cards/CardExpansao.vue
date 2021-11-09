<template>
  <div style="width:100%" class="text-dark">
    <q-list
      bordered
      class="rounded-borders bg-grey-1 q-mb-md q-my-none margin-bot"
      v-for="(resposta, index) in Conteudo"
      :key="index"
    >
      <q-expansion-item
        dense="dense"
        expand-separator
        :label="resposta.TituloModelo"
        class="q-mb-md"
      >
        <q-card>
          <q-card-section
            class="text-light-blue-10 flex justify-between items-center"
          >
            <p class="q-pt-md pl" style="font-weight:400;font-style:italic;padding-left:20px">
              <strong>{{ resposta.respostaModelo }}</strong>
            </p>
            <q-btn
              color="light-blue-10" 
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
      numero: "2"
    };
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.margin-bot {
  margin-bottom: 3px;
}
.pl {
  padding-left: 5px;
}
</style>
