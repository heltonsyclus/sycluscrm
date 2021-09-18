<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-1">
      <q-toolbar class="text-primary">
        <img src="../assets/syclus.png" alt="Syclus" class="rotate-225" />
        <q-toolbar-title class="text-weight-bold ">
          Syclus CRM
        </q-toolbar-title>
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="notifications"
            to="/Notificacao"
          >
            <q-badge color="blue" text-color="white" floating>
              {{ result }}
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
    <MenuFlutuante />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MenuFlutuante from "./MenuFlutuante.vue";

export default defineComponent({
  components: { MenuFlutuante },
  name: "MainLayout",
  setup() {
    return {
      result: 4,
      Ocorrencia: 250,
      MenuFlutuante: false,
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
});
</script>
