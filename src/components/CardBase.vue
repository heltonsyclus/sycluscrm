<template>
    <q-card v-bind:class="[formato_card ? '' : formato_padrao, formato_card ]" flat bordered>  
    <q-item class="items-center" :class="cor_header">
      <q-item-section style="height:38px;font-weight:700;color:White">
        {{ card }}
      </q-item-section>
      <q-btn
        round
        flat
        text-color="white"
        icon="more_vert"
        v-if="btn_comando === 'btn-itens'"
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

      <div v-if="btn_comando === 'btn-filtro'">
        <q-btn-dropdown
          color="disabled capitalize"
          label="Filtro"
          class="no-shadow gray capitalize"
          text-color="white"
          style="width:100px"
          flat
        >
          <q-list>
            <q-item
              clickable
              v-close-popup
              @click="onItemClick"
              v-for="(filtro, index) in options"
              :key="index"
              size="xs"
            >
              <q-item-section>
                <q-item-label>{{ filtro }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-item>

    <q-card-section style="padding:0;margin:5px auto;width:95%;">
      <CardSlide v-if="tipo_card === 'Slide'" />
      <CardAgenda v-if="tipo_card === 'Agenda'" />
      <CardExpansao v-if="tipo_card === 'Expansao'" />
      <CardGrafico v-if="tipo_card === 'Grafico'" />
      <CardInput v-if="tipo_card === 'Input'" :funcao_card="sub_tipo" />
      <CardSecao v-if="tipo_card === 'Secao'" :funcao_card="sub_tipo" />
      <CardLista
        v-if="tipo_card === 'Lista'"
        :funcao_card="sub_tipo"
        :conteudo_cards="conteudo_card"
      />
      <CardBotao
        v-if="tipo_card === 'Botao'"
        :funcao_card="sub_tipo"
        :conteudo_cards="conteudo_card"
      />
    </q-card-section>
  </q-card>

</template>

<script>
import { ref } from "vue";
import { LayoutCard } from "../commands/props-commands";
import CardSlide from "../components/Cards/CardSlide.vue";
import CardLista from "../components/Cards/CardLista.vue";
import CardAgenda from "../components/Cards/CardAgenda.vue";
import CardExpansao from "./Cards/CardExpansao.vue";
import CardGrafico from "./Cards/CardGrafico.vue";
import CardInput from "./Cards/CardInput.vue";
import CardSecao from "./Cards/CardSecao.vue";
import CardBotao from "./Cards/CardBotao.vue";
export default {
  mixins: [LayoutCard],
  components: {
    CardSlide,
    CardLista,
    CardAgenda,
    CardExpansao,
    CardGrafico,
    CardInput,
    CardSecao,
    CardBotao
  },
  setup() {
    return {
      model: ref(null),
      options: ["Hoje", "Semana", "Mês"],
      formato_padrao:"my-card-s"
    };
  },
  created(){
    /*
    console.log(this.formato);
    console.log(formato_card);
    if (formato_card!=='') {
      this.formato = formato_card;
      console.log(this.formato)
    }
*/
   
  }
};
</script>
<style scoped></style>
