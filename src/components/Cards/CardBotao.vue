<template>
  <div v-for="(lista, index) in conteudo_cards" :key="index">
    <div class="text-center	q-pt-xl" v-if="funcao_card === 'lista-padrao'">
      <div class="container-flex">
        <q-icon
          name="description"
          class="text-primary"
          style="font-size: 4.4em;"
        />
        <p style="font-weight:600" class="text-grey-7">{{ lista.conteudo }}</p>
      </div>

      <div class="q-gutter-sm">
        <q-btn
          size="14px"
          style="padding:5px 20px"
          class="capitalize"
          unelevated
          rounded
          color="primary"
          label="Criar"
          @click="darkDialog = true"
        />
      </div>
      <q-dialog
        v-if="lista.get_workflow === 'WorkFlowAtividade'"
        v-model="darkDialog"
        persistent
      >
        <EtapasWorkflow
          :EtapasWorkFlow="WorkFlowAtividade"
          @close="darkDialog = false"
        />
      </q-dialog>

      <q-dialog
        v-if="lista.get_workflow === 'WorkFlowProjeto'"
        v-model="darkDialog"
        persistent
      >
        <EtapasWorkflow
          :EtapasWorkFlow="WorkFlowProjeto"
          @close="darkDialog = false"
        />
      </q-dialog>

      <q-dialog
        v-if="lista.get_workflow === 'WorkFlowWorkflow'"
        v-model="darkDialog"
        persistent
      >
        <EtapasWorkflow
          :EtapasWorkFlow="WorkFlowWorkflow"
          @close="darkDialog = false"
        />
      </q-dialog>
    </div>

    <div v-if="funcao_card === 'lista-tags'">
      <q-badge
        rounded
        v-for="tags in lista['tags']"
        :key="tags"
        style="padding:4px 15px;"
        color="grey-9"
      >
        {{ tags }}
      </q-badge>
      <div class="flex items-center" style="margin:5px 0">
        <q-icon name="calendar_today" class="text-primary" size="20px" />{{
          lista["entrada"]
        }}
      </div>
      <div class="flex items-center" style="margin:5px 0">
        <q-icon name="calendar_today" class="text-red" size="20px" />{{
          lista["entrada"]
        }}
      </div>
      <q-btn
        unelevated
        rounded
        color="blue-8"
        class="spaccing"
        label="Veja mais"
        style="margin:5px 0"
        dense
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import EtapasWorkflow from "src/layouts/EtapasWorkflow.vue";
export default {
  props: ["funcao_card", "conteudo_cards"],
  components: { EtapasWorkflow },
  setup() {
    return {
      nomeAtividade: "Dashboard",
      darkDialog: ref(false),
      WorkFlowAtividade: [],
      WorkFlowProjeto: [],
      WorkFlowWorkflow: [],
      ListaTags: []
    };
  },
  methods: {
    tagsCard() {
      this.WorkFlowAtividade;
      this.WorkFlowProjeto;
      this.WorkFlowWorkflow;
    }
  },
  created() {
    const atividades =
      '{"etapas":[{"titulo_etapa":"Dados","id_etapa":1,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"input_texto","placeholder":"Descrição de atividade","vmodel":""},{"tipo_componente":"selecao_padrao","placeholder":"Modelo","vmodel":"","modelo":["Administrativo","Suporte","Fiscal","Desenvolvimento"]},{"tipo_componente":"selecao_multipla","placeholder":"Colaborador","vmodel":"","modelo":["Henrique","Helton","Danilo"]},{"tipo_componente":"selecao_padrao","placeholder":"Situação","vmodel":"","modelo":["Inicial","Planejamento","Execução","Acompanhamento"]},{"tipo_componente":"selecao_padrao","placeholder":"Workflow","vmodel":"","modelo":["Administrativo","Suporte","Fiscal","Desenvolvimento"]}]},{"titulo_etapa":"Cronograma","id_etapa":2,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"selecao_padrao","placeholder":"Cliente","vmodel":"","modelo":["ACT CONTABILIDADE","BOBS","SUCOLANDIA"]},{"tipo_componente":"selecao_padrao","placeholder":"Tags","vmodel":"","modelo":["Syclus 1","Syclus 2","Fiscal"]},{"tipo_componente":"input_data","vmodel":""},{"tipo_componente":"selecao_padrao","placeholder":"Prioridade","vmodel":"","modelo":["Normal","Alta","Baixa"]}]}]}';
    const projeto =
      '{"etapas":[{"titulo_etapa":"Dados","id_etapa":1,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"input_texto","placeholder":"Descrição do projeto"},{"tipo_componente":"selecao_padrao","placeholder":"Modelo","modelo":["Administrativo","Suporte","Fiscal","Desenvolvimento"]},{"tipo_componente":"selecao_multipla","placeholder":"Colaborador","modelo":["Henrique","Helton","Danilo"]},{"tipo_componente":"selecao_padrao","placeholder":"Situação","modelo":["Inicial","Planejamento","Execução","Acompanhamento"]},{"tipo_componente":"selecao_padrao","placeholder":"Workflow","modelo":["Administrativo","Suporte","Fiscal","Desenvolvimento"]}]},{"titulo_etapa":"Cronograma","id_etapa":2,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"selecao_padrao","placeholder":"Cliente","modelo":["ACT CONTABILIDADE","BOBS","SUCOLANDIA"]},{"tipo_componente":"selecao_padrao","placeholder":"Tags","modelo":["Syclus 1","Syclus 2","Fiscal"]},{"tipo_componente":"input_data"},{"tipo_componente":"selecao_padrao","placeholder":"Prioridade","modelo":["Normal","Alta","Baixa"]}]}]}';
    const workflow =
      '{"etapas":[{"titulo_etapa":"Etapas","id_etapa":1,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"input_texto","placeholder":"Descrição de workflow"},{"tipo_componente":"selecao_padrao","placeholder":"Modelo","modelo":["Administrativo","Suporte","Fiscal","Desenvolvimento"]},{"tipo_componente":"selecao_multipla","placeholder":"Colaborador","modelo":["Henrique","Helton","Danilo"]},{"tipo_componente":"selecao_padrao","placeholder":"Situação","modelo":["Inicial","Planejamento","Execução","Acompanhamento"]},{"tipo_componente":"selecao_padrao","placeholder":"Workflow","modelo":["Administrativo","Suporte","Fiscal","Desenvolvimento"]}]},{"titulo_etapa":"Cronograma","id_etapa":2,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"selecao_padrao","placeholder":"Cliente","modelo":["ACT CONTABILIDADE","BOBS","SUCOLANDIA"]},{"tipo_componente":"selecao_padrao","placeholder":"Tags","modelo":["Syclus 1","Syclus 2","Fiscal"]},{"tipo_componente":"input_data"},{"tipo_componente":"selecao_padrao","placeholder":"Prioridade","modelo":["Normal","Alta","Baixa"]}]}]}';
    this.WorkFlowWorkflow = JSON.parse(workflow);
    this.WorkFlowProjeto = JSON.parse(projeto);
    this.WorkFlowAtividade = JSON.parse(atividades);
    this.tagsCard();
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 1px 5px;
}
.spaccing {
  padding: 0px 20px;
}
.container-flex {
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0px auto;
  align-items: center;
}
</style>
