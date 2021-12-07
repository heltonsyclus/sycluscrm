<template>
  <div>
    <q-card class="my-card-calendario" v-show="cardBase">
      <form>
        <q-card-section class="flex justify-end">
          <q-btn
            size="12px"
            round
            flat
            dense
            class="text-dark"
            icon="edit"
            @click="modificarCalendario"
            style="margin-left:5px"
          />
          <q-btn
            size="12px"
            round
            flat
            dense
            class="text-dark"
            icon="delete"
            style="margin-left:5px"
          />
          <q-btn
            size="12px"
            round
            flat
            dense
            class="text-dark"
            icon="more_vert"
            style="margin-left:5px"
          />
          <q-btn
            size="12px"
            round
            dense
            flat
            @click="$emit('close')"
            class="text-dark"
            icon="close"
            style="margin-left:5px"
          />
        </q-card-section>
        <q-separator inset />

        <q-card-actions
          vertical
          v-for="objCalendario in informacoesCardCalendario"
          :key="objCalendario"
        >
          <div class="flex items-center" style="padding-top:4px">
            <q-icon name="title" class="text-dark" style="font-size: 25px;" />
            <div class="text-h5" style="padding-left:10px">
              {{ objCalendario.title }}
            </div>
          </div>
          <div class="flex items-center" style="padding-top:4px">
            <q-icon name="today" class="text-dark" style="font-size: 22px;" />
            <div class="text-h7" style="padding-left:10px">
              {{ objCalendario.date }}
            </div>
          </div>
          <div class="flex items-center" style="padding-top:8px">
            <q-icon
              name="alarm_on"
              class="text-dark"
              style="font-size: 22px;"
            />
            <div class="text-h7" style="padding-left:10px">
              {{ objCalendario.time }}
            </div>
          </div>
          <div class="flex items-center" style="padding-top:4px">
            <q-icon name="subject" class="text-dark" style="font-size: 22px;" />
            <div class="text-h7" style="padding-left:10px">
              {{ objCalendario.details }}
            </div>
          </div>
        </q-card-actions>
      </form>
    </q-card>

    <q-card class="my-card-avancado" v-show="cardAvancado">
      <form>
        <q-card-actions
          vertical
          v-for="objCalendario in informacoesCardCalendario"
          :key="objCalendario"
        >
          <div class="flex items-center" style="padding-top:4px">
            <q-btn
              size="12px"
              round
              dense
              flat
              @click="$emit('close')"
              class="text-dark"
              icon="close"
              style="margin-left:5px"
            />
            <q-input
              v-model="objCalendario.title"
              style="font-size:20px;width:450px;padding-right:20px"
              dense
            />
            <q-btn unelevated color="primary" label="Salvar" />
          </div>
          <div class="flex items-center" style="padding-top:4px">
            <q-input
              v-model="objCalendario.date"
              dense
              label="Data"
              type="date"
              style="width: 125px;margin-left:5px;margin-right:20px"
            />
            <q-input
              v-model="objCalendario.time"
              type="time"
              label="Horário"
              dense
              style="width: 70px;margin-left:5px;margin-right:20px"
            />
            <q-input
              v-model.number="objCalendario.duration"
              type="number"
              dense
              label="Previsão"
              Style="width: 50px;"
            />
            <q-icon
              name="hourglass_bottom"
              class="text-dark"
              style="font-size: 18px;"
            />
          </div>
          <div class="flex items-center" style="padding-top:4px">
            <q-icon name="subject" class="text-dark" style="font-size: 22px;" />
            <q-input
              label="Observações"
              dense
              v-model="objCalendario.details"
            />
          </div>
        </q-card-actions>
      </form>
    </q-card>
  </div>
</template>
<script>
export default {
  props: ["informacoesCardCalendario"],
  emits: ["close"],
  data() {
    return {
      cardBase: true,
      cardAvancado: false
    };
  },
  methods: {
    modificarCalendario() {
      this.cardBase = false;
      this.cardAvancado = true;
    }
  }
};
</script>

<style scoped>
.my-card-calendario {
  min-width: 480px;
  padding: 0px 10px 15px 10px;
  position: absolute;
  z-index: 1;
  left: 35%;
  margin-left: -50px;
  top: 30%;
  box-shadow: 0 0 1em rgb(75, 75, 75);
}
.my-card-avancado {
  min-width: 80%;
  padding: 0px 10px 15px 10px;
  position: absolute;
  z-index: 1;
  left: 15%;
  margin-left: -50px;
  top: 20%;
  box-shadow: 0 0 1em rgb(131, 131, 131);
}
</style>
