<template>
  <q-list class="my-card-m">
    <div class="flex justify-end" style="padding:20px">
      <q-icon
        name="close"
        class="text-red"
        style="font-size: 2rem;cursor: pointer;"
        @click="$emit('close')"
      />
    </div>
    <q-item
      clickable
      v-ripple
      :active="active"
      v-for="(list, index) in linksList"
      :key="index"
      :to="list.rota"
      style="padding:15px"
    >
      <q-item-section avatar>
        <q-icon :name="list.icon" size="25px" />
      </q-item-section>
      <q-item-section>{{ list.name }}</q-item-section>
      <q-icon name="expand_more" size="25px" />
    </q-item>
  </q-list>
</template>
<script>
import { ref } from "vue";
export default {
  emits: ["close"],
  setup() {
    return {
      active: ref(true),
      model: ref(""),
      grupos: ref([]),
      input: ref(false),
      linksList: [
        {
          icon: "dashboard",
          rota: "/",
          name: "Dashboard"
        },
        {
          icon: "description",
          rota: "/atividade",
          name: "Atividade"
        },
        {
          icon: "assignment",
          rota: "/Projeto",
          name: "Projeto"
        },
        {
          icon: "supervisor_account",
          rota: "/Cliente",
          name: "Cliente"
        },
        {
          icon: "done_all",
          rota: "/Ocorrencia",
          name: "Ocorrência"
        },
        {
          icon: "event",
          rota: "/Agenda",
          name: "Agenda"
        },
        {
          icon: "account_tree",
          rota: "/Workflow",
          name: "Workflow"
        }
      ]
    };
  },
  methods: {
    adicionarGrupo() {
      this.grupos.push({
        model: this.model
      });
      this.input = false;
      this.model = "";
    },
    remover(index) {
      this.grupos.splice(index, 1);
    },
    salvarGrupos() {
      console.log(this.grupos);
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.my-card-m {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: auto;
  width: 304px;
  height: 100vh;
  background-color: rgb(248, 248, 248);
}
.hover:hover {
  background-color: rgb(126, 182, 255);
}
</style>
