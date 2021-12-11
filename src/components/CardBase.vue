<template>
  <q-card
    :class="[formato_card ? '' : formato_padrao, formato_card]"
    flat
    bordered
  >
    <q-item class="items-center" :class="cor_header" dense="dense">
      <q-item-section style="height:40px;font-weight:700;color:White">
        {{ card }}
      </q-item-section>
      <q-btn
        v-if="btn_comando === 'btn-itens'"
        round
        flat
        text-color="white"
        icon="more_vert"
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

      <q-btn
        v-if="btn_comando === 'btn-pause'"
        round
        flat
        dense="dense"
        text-color="red"
        icon="pause_circle"
        @click.prevent="btnSetaBaixa"
      >
      </q-btn>

      <q-btn
        v-if="btn_comando === 'btn-play'"
        round
        flat
        text-color="green"
        icon="play_circle"
        @click.prevent="btnSetaBaixa"
      >
      </q-btn>

      <q-btn
        v-if="btn_comando === 'btn-seta-baixa'"
        round
        flat
        text-color="grey-5"
        icon="expand_more"
        @click.prevent="btnSetaBaixa"
      >
      </q-btn>

      <q-btn
        v-if="btn_comando === 'btn-adicionar'"
        round
        flat
        text-color="white"
        icon="add"
        @click.prevent="btnAdicionar"
      >
      </q-btn>

      <q-btn
        v-if="btn_comando === 'btn-editar'"
        round
        flat
        text-color="white"
        icon="mode_edit"
        @click.prevent="btnEditar"
      >
      </q-btn>
      <div v-if="btn_comando === 'btn-filtro'">
        <q-select v-model="model" :options="modelos" dense="dense" />
      </div>
      <div v-if="btn_comando === 'btn-atualizar'">
        <q-btn
          round
          flat
          text-color="white"
          icon="autorenew"
          @click.prevent="$emit('atualizarConteudo')"
        >
        </q-btn>
      </div>
    </q-item>

    <q-card-section style="padding:0;margin:5px auto;width:95%;">
      <CardSlide v-if="tipo_card === 'Slide'" />
      <CardAgenda v-if="tipo_card === 'Agenda'" />

      <CardGrafico v-if="tipo_card === 'Grafico'" :funcao_card="sub_tipo" />
      <CardSecao v-if="tipo_card === 'Secao'" :funcao_card="sub_tipo" />
      <CardInput
        v-if="tipo_card === 'Input'"
        :funcao_card="sub_tipo"
        :conteudo_cards="layout_lin_col"
        @arrModels="valorModels"
      />
      <CardLista
        v-if="tipo_card === 'Lista'"
        :funcao_card="sub_tipo"
        :conteudo_cards="conteudo_cards"
        :link_item="link_item"
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
import CardGrafico from "./Cards/CardGrafico.vue";
import CardInput from "./Cards/CardInput.vue";
import CardSecao from "./Cards/CardSecao.vue";
import CardBotao from "./Cards/CardBotao.vue";

export default {
  mixins: [LayoutCard],
  emits: ["atualizarConteudo"],
  components: {
    CardSlide,
    CardLista,
    CardAgenda,
    CardGrafico,
    CardInput,
    CardSecao,
    CardBotao
  },
  setup() {
    return {
      model: ref("Hoje"),
      modelos: ["Hoje", "Semana", "Mês"],
      formato_padrao: "my-card-s",
      inputValores: []
    };
  }
};
</script>

<style scoped></style>
