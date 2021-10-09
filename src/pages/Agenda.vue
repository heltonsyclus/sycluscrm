<template>
  <div class="row">
    <div
      class="column col-3 window-height bg-grey-4"
      style="padding:10px 18px"
    >
      <q-date v-model="date" minimal dense />
      <q-card class="bg-primary" style="padding: 5px 5px;margin:10px 0px" dense>
        <div class="flex justify-between items-center">
          <span style="color:white;font-weight:700">Anotações</span>
          <q-btn
            round
            dense
            color="green"
            size="10px"
            icon="add"
            @click.prevent="onClickAnotar"
          />
        </div>
        <q-input
          v-show="Bloco"
          v-model="Anotacao"
          filled
          type="textarea"
          style="margin:5px 0px"
        />
      </q-card>
    </div>

    <div class="col-9">
      <BarraLayout
        @OnClick="OnClickValor"
        :ConteudoBtn="Grupos"
        :ConteudoApp="GrupoCardsOpcionais"
        Aplicacao="AplicativosPadrao"
      />
      <div class="flex justify-between">
        <q-btn
          unelevated
          rounded
          dense
          size="14px"
          style="padding:0px 15px"
          color="light-blue-9"
          text-color="white"
          class="q-mt-xs q-ml-sm capitalize"
          label="Adicionar"
          @click="darkDialog = true"
        />
        <q-select
          v-model="filtro"
          :options="options"
          class="q-mr-md q-mt-xs"
          dense
        />
      </div>
      <CardCalendario />
    </div>

  </div>
</template>

<script>
import CardCalendario from "src/components/Cards/CardCalendario.vue";
import BarraLayout from "src/layouts/BarraLayout.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BarraLayout, CardCalendario},
  name: "Agenda",
  data() {
    return {
      filtro: "Dia",
      options: ["Dia", "Semanal", "Mês"],
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupos: [],
      GrupoCards: [],
      GrupoCardsOpcionais: [],
      date: this.DataCompleta,
      Anotacao: [],
      Bloco: false,
      hoje: new Date()
        .toLocaleString("pt-br", { day: "numeric" })
        .padStart(2, "0"),
      mes: (new Date().getMonth() + 1).toString().padStart(2, "0"),
      ano: new Date()
        .getFullYear()
        .toString()
        .padStart(2, "0")
    };
  },
  methods: {
    OnClickValor(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCards = this.Grupo["cards"];
      this.GrupoCardsOpcionais = this.Grupo["cards_opcionais"];
    },
    onClickAnotar() {
      this.Bloco = !this.Bloco;
    }
  },
  computed: {
    DataCompleta() {
      return this.hoje + "/" + this.mes + "/" + this.ano;
    }
  },
  created() {
    const json =
      '{"id_dashboard":6,"dashboard":"Agenda","grupos":[{"id_grupo":1,"grupo":"Eventos","icone":"assignment_turned_in","cards":[{"id_card":35,"card":"Eventos","ordem":1 }],"cards_opcionais":[{"id_card":35,"card":"Eventos","ordem":1,"icone":"search","cor":"primary"}]},{"id_grupo":2,"grupo":"Projetos","icone":"search","cards":[{"id_card":36,"card":"Projetos","ordem":1 }],"cards_opcionais":[{"id_card":36,"card":"Projetos","ordem":1,"icone":"search","cor":"orange"}]},{"id_grupo":3,"grupo":"Atividades","icone":"assignment_turned_in","cards":[{"id_card":40,"card":"Atividades","ordem":1 }],"cards_opcionais":[{"id_card":40,"card":"Atividades","ordem":1,"icone":"search","cor":"primary"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>
