<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-1">
      <q-toolbar class="text-primary">
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <img src="../assets/syclus.png" alt="Syclus" />
        <q-toolbar-title>
          Syclus CRM
        </q-toolbar-title>
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="blue" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Syclus Notificação</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Syclus Apps</q-tooltip>
          </q-btn>
          <q-btn round flat no-wrap>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Colaborador</q-tooltip>
            <q-menu auto-close>
              <q-list dense>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Meu perfil</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sair</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-primary text-white flex-center"
      v-model="leftDrawerOpen"
      :width="180"
      show-if-above
      bordered
    >
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
    link: ""
  },
  {
    title: "Atividades",
    icon: "description",
    link: "/Atividades"
  },
  {
    title: "Projetos",
    icon: "assignment",
    link: "/Projetos"
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
      Ocorrencia: 250,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
