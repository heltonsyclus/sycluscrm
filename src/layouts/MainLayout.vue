<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Syclus 2.0
        </q-toolbar-title>

        <div>Notificação</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu Syclus
        </q-item-label>

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
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
   {
    title: 'Dashboard',
    icon: 'dashboard',
  },
  {
    title: 'Atividade',
    icon: 'description',
  },
  {
    title: 'Projeto',
    icon: 'assignment',
   
  },
  {
    title: 'Cliente',
    icon: 'supervisor_account',
  },
  {
    title: 'Ocorrência',
    icon: 'done_all',
  },
  {
    title: 'Agenda',
    icon: 'event',
  },
  {
    title: 'Workflow',
    icon: 'account_tree',
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
