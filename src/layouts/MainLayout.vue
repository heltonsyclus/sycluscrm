<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-1">
      <q-toolbar class="text-primary">
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <img src="../assets/syclus.png" alt="Syclus" />
        <q-toolbar-title>
          Syclus CRM
        </q-toolbar-title>
        <div>Notificação</div>
      </q-toolbar>
    </q-header>

    <q-drawer  class="bg-primary text-white" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "dashboard",
    router: "/"
  },
  {
    title: "Atividades",
    icon: "description",
    router: "/Atividades"
  },
  {
    title: "Projetos",
    icon: "assignment",
    router: "/Projetos"
  },
  {
    title: "Clientes",
    icon: "supervisor_account"
  },
  {
    title: "Ocorrências",
    icon: "done_all"
  },
  {
    title: "Agenda",
    icon: "event"
  },
  {
    title: "Workflow",
    icon: "account_tree"
  }
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
