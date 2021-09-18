<template>
  <q-drawer
    class="bg-primary text-white no-scroll"
    :width="58"
    :breakpoint="500"
    behavior="desktop"
    show-if-above
  >
    <q-toolbar>
      <q-btn flat round dense icon="menu" @click.prevent="MenuLista()" />
    </q-toolbar>
    <q-item
      v-for="(list, index) in linksList"
      :key="index"
      :to="list.rota"
      active-class="bg-active"
      exact
    >
      <q-item-section avatar>
        <q-icon :name="list.icon" />
      </q-item-section>
    </q-item>
  </q-drawer>
  <q-page-container>
    <router-view />
  </q-page-container>
  <div
    v-show="MenuFlutuante"
    class="text-dark no-scroll menu"
    behavior="desktop"
    show-if-above
  >
    <q-toolbar>
      <q-btn flat round dense icon="close" @click.prevent="MenuLista()" />
    </q-toolbar>
    <q-item
      v-for="(list, index) in linksList"
      :key="index"
      :to="list.rota"
      exact
    >
      <q-item-section avatar>
        <q-icon :name="list.icon" />
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MenuFlutuante",
  setup() {
    return {
      linksList: [
        {
          icon: "dashboard",
          rota: "/"
        },
        {
          icon: "description",
          rota: "/atividade"
        },
        {
          icon: "assignment",
          rota: "/Projeto"
        },
        {
          icon: "supervisor_account",
          rota: "/Cliente"
        },
        {
          icon: "done_all",
          rota: "/Ocorrencia"
        },
        {
          icon: "event",
          rota: "/Agenda"
        },
        {
          icon: "account_tree",
          rota: "/Workflow"
        }
      ]
    };
  },
  data() {
    return {
      MenuFlutuante: false
    };
  },
  methods: {
    MenuLista() {
      this.MenuFlutuante = !this.MenuFlutuante;
    }
  }
});
</script>

<style lang="scss" >
.menu {
  width: 450px;
  height: 100vh;
  background-color: #c5c5c5;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
