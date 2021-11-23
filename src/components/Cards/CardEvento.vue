<template>
  <div>
    <q-card class="my-card-calendario">
      <form @submit.prevent="salvarAgenda()">
        <q-card-section>
          <q-input
            v-model="this.arrayAgenda.title"
            label="Adicionar título e horário"
            dense
          />
          <div style="margin-top:8px">
            <q-btn
              class="capitalize"
              :color="ativoEvent"
              text-color="dark"
              label="Evento"
              size="12px"
              style="margin-right: 8px"
              @click.prevent="eventoBnt()"
            />
            <q-btn
              class="capitalize"
              :color="ativoatividade"
              text-color="dark"
              label="atividade"
              size="12px"
              style="margin-right: 8px"
              @click.prevent="atividadeBnt()"
            />
            <q-btn
              class="capitalize"
              :color="ativoLembrete"
              text-color="dark"
              label="Lembrete"
              dense
              size="12px"
              style="margin-right: 8px"
              @click.prevent="lembreteBnt()"
            />
          </div>
        </q-card-section>
        <q-separator inset />

        <q-card-actions vertical v-show="evento">
          <div class="flex items-center">
            <q-icon
              name="schedule"
              class="text-primary"
              style="font-size: 20px;"
            />
            <div class="text-h7" style="padding-left:5px">
              {{ dataEventual }}
            </div>
          </div>

          <div class="flex items-center" style="padding-top:5px">
            <q-icon
              name="format_color_fill"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-select
              v-model="this.arrayAgenda.bgcolor"
              dense
              label="Cor do evento"
              :options="cores"
              style="width: 260px;padding-left:5px"
            />
          </div>

          <div class="flex items-center" style="margin-top:8px">
            <q-icon
              name="people"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-select
              v-model="this.arrayAgenda.colaborar"
              multiple
              dense
              label="Adicionar colaboradores"
              :options="colaborador"
              style="width: 260px;padding-left:5px"
            />
          </div>

          <div class="flex items-center">
            <q-icon
              name="subject"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-input
              label="Lembrete"
              dense
              v-model="this.arrayAgenda.details"
            />
          </div>
        </q-card-actions>

        <q-card-actions vertical v-show="atividade">
          <div class="flex items-center">
            <q-icon
              name="schedule"
              class="text-primary"
              style="font-size: 20px;"
            />
            <div class="text-h7" style="margin-left:5px">
              {{ dataEventual }}
            </div>
          </div>

          <div class="flex items-center">
            <q-icon
              name="alarm_on"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-input
              v-model="this.arrayAgenda.time"
              type="time"
              dense
              style="width: 100px;margin-left:5px;margin-right:20px"
            />
            <q-input
              v-model.number="this.arrayAgenda.duration"
              type="number"
              dense
              label="Tempo previsto"
              Style="width: 120px;"
            />
          </div>
          <div class="flex items-center" style="margin-top:8px">
            <q-icon
              name="subject"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-input
              label="Lembrete"
              dense
              v-model="this.arrayAgenda.atividades"
            />
          </div>
        </q-card-actions>

        <q-card-actions vertical v-show="lembrete">
          <div class="flex items-center">
            <q-icon
              name="schedule"
              class="text-primary"
              style="font-size: 20px;"
            />
            <div class="text-h7" style="margin-left:6px">
              {{ dataEventual }}
            </div>
          </div>

          <div class="flex items-center" style="margin-top:8px">
            <input
              type="checkbox"
              id="checkbox"
              v-model="this.arrayAgenda.checked"
              style="margin-left:2px"
            />
            <label for="checkbox" style="margin-left:12px">Dia inteiro</label>
          </div>
          <div class="flex items-center">
            <q-icon
              name="subject"
              class="text-primary"
              style="font-size: 20px;"
            />
            <q-select
              v-model="this.arrayAgenda.model"
              :options="options"
              style="width: 270px;padding-left:8px"
              dense
            />
          </div>
        </q-card-actions>
        <div class="flex justify-end">
          <q-btn
            text-color="dark"
            flat
            label="Cancelar"
            size="14px"
            class="capitalize"
            style="margin: 0px 0px 10px 0px"
            @click="$emit('close')"
          />
          <q-btn
            type="submit"
            color="primary"
            text-color="white"
            label="Salvar"
            size="14px"
            class="capitalize"
            style="margin: 0px 25px 10px 0px"
          />
        </div>
      </form>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["dataEventual", "dataEscolhido"],
  emits: ["close"],
  data() {
    return {
      colaborador: ["Helton", "Henrique", "Danilo"],
      evento: true,
      atividade: false,
      lembrete: false,
      ativoEvent: "white",
      ativoLembrete: "white",
      ativoatividade: "white",
      options: [
        "Não se repete",
        "Todos os dias",
        "Semanal: cada quarta-feira",
        "Mensal no(a) quarto(a) quarta-feira",
        "Mensal nos(nas) últimos(as) quarta-feira",
        "Anual em novembro 24",
        "Todos os dias da semana(segunda a sexta-feira)"
      ],
      cores: [
        "Amarelo",
        "Vermelho",
        "Azul",
        "Laranja",
        "Rosa",
        "Roxo",
        "Verde",
        "Grama",
        "Cinza"
      ],
      arrayAgenda: {
        time: new Date().toLocaleString("pt-br", {
          hour: "numeric",
          minute: "numeric"
        }),
        model: "Não se repete",
        duration: 10,
        title: null,
        details: null,
        checked: null,
        atividades: null,
        colaborar: null,
        descricao: null,
        date: null,
        start: null,
        end: null,
        bgcolor: "Azul"
      }
    };
  },
  methods: {
    eventoBnt() {
      this.evento = true;
      this.atividade = false;
      this.lembrete = false;
      this.ativoEvent = "primary";
      this.ativoLembrete = " white";
      this.ativoatividade = " white";
    },
    atividadeBnt() {
      this.ativoEvent = "white";
      this.ativoatividade = "primary";
      this.ativoLembrete = "white";
      this.evento = false;
      this.atividade = true;
      this.lembrete = false;
    },
    lembreteBnt() {
      this.evento = false;
      this.atividade = false;
      this.lembrete = true;
      this.ativoEvent = "white";
      this.ativoLembrete = "primary";
      this.ativoatividade = "white";
    },
    abrirEditor() {
      this.editor = !this.editor;
    },
    salvarAgenda() {
      if (this.arrayAgenda.bgcolor === "Amarelo") {
        this.arrayAgenda.bgcolor = "yellow";
      }
      if (this.arrayAgenda.bgcolor === "Vermelho") {
        this.arrayAgenda.bgcolor = "red";
      }
      if (this.arrayAgenda.bgcolor === "Azul") {
        this.arrayAgenda.bgcolor = "blue";
      }
      if (this.arrayAgenda.bgcolor === "Laranja") {
        this.arrayAgenda.bgcolor = "orange";
      }
      if (this.arrayAgenda.bgcolor === "Rosa") {
        this.arrayAgenda.bgcolor = "pink";
      }
      if (this.arrayAgenda.bgcolor === "Roxo") {
        this.arrayAgenda.bgcolor = "purple";
      }
      if (this.arrayAgenda.bgcolor === "Verde") {
        this.arrayAgenda.bgcolor = "green";
      }
      if (this.arrayAgenda.bgcolor === "Grama") {
        this.arrayAgenda.bgcolor = "teal";
      }
      if (this.arrayAgenda.bgcolor === "Cinza") {
        this.arrayAgenda.bgcolor = "grey";
      }
      if (this.arrayAgenda.date === null || this.arrayAgenda.start === null) {
        this.arrayAgenda.date = this.dataEscolhida;
        this.arrayAgenda.start = this.dataEscolhida;
        this.arrayAgenda.end = this.dataEscolhida;
      }
      this.$emit("arrayAgenda", this.arrayAgenda);
      this.arrayAgenda = {
        start: null,
        end: null,
        time: new Date().toLocaleString("pt-br", {
          hour: "numeric",
          minute: "numeric"
        }),
        duration: 10,
        title: null,
        details: null,
        checked: null,
        atividades: null,
        colaborar: null,
        descricao: null,
        date: null,
        bgcolor: "Azul"
      };
      this.$emit("close");
    }
  },
  created() {
    this.ativoEvent = "primary";
  },
  computed: {
    dataEscolhida() {
      return this.dataEscolhido;
    }
  },

  setup() {
    const $store = useStore();
    const arrayEvents = computed({
      get: () => $store.state.showcase.arrayEvents,
      set: val => {
        $store.commit("showcase/getEventos", val);
      }
    });
    const miniState = ref(false);
    return {
      arrayEvents,
      miniState,
      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false;
          e.stopPropagation();
        }
      }
    };
  }
};
</script>

<style scoped>
.my-card-calendario {
  max-width: 380px;
  padding: 0px 10px 15px 10px;
  position: absolute;
  z-index: 1;
  left: 40%;
  margin-left: -50px;
  top: 20%;
  box-shadow: 0 0 1em rgb(75, 75, 75);
}
</style>
