<template>
  <div v-if="funcao_card === 'input-padrao'">
    <q-input
      bottom-slots
      v-model="text"
      label="digite o nome ou CNPJ"
      :dense="dense"
    />
    <div class="flex">
      <q-select
        v-model="modelo"
        :options="modelos"
        label="modelo"
        style="width:45%"
      />
      <q-select v-model="tag" :options="tags" label="tags" style="width:45%" />
    </div>
    <q-input
      bottom-slots
      v-model="descricao"
      label="descrição"
      :dense="dense"
    />
    <div class="flex">
      <q-select
        v-model="workflow"
        :options="modelos"
        label="workflow"
        style="width:45%"
      />
      <q-select
        v-model="colaborador"
        :options="colaboradors"
        label="colaborador"
        style="width:45%"
      />
      <q-btn
        class="btn"
        rounded
        style="width:100px"
        size="md"
        color="primary"
        label="Iniciar"
      />
    </div>
  </div>

  <div v-if="funcao_card === 'input-pesquisa'">
    <q-input bottom-slots v-model="text" label="digite o nome ou CNPJ" />
    <q-select
      v-model="modelo"
      :options="modelos"
      label="modelos"
      style="width:100%"
    />
    <q-btn
      rounded
      class="btn"
      style="width:100px"
      size="md"
      color="primary"
      label="Pesquisa"
    />
  </div>

  <div v-if="funcao_card === 'input-notificacao'">
    <q-input
      bottom-slots
      v-model="text"
      label="digite o nome ou CNPJ"
      :dense="dense"
    />
    <q-input bottom-slots v-model="titulos" label="titulo" :dense="dense" />
    <q-select
      v-model="modelo"
      :options="modelos"
      label="modelos"
      style="width:100%"
    />
    <q-input bottom-slots v-model="links" label="link" :dense="dense" />
    <q-input v-model="text" type="textarea" label="Conteúdo" class="textarea" />
    <q-btn
      rounded
      style="width:100px"
      size="md"
      class="btn"
      color="primary"
      label="Enviar"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["funcao_card"],
  setup() {
    return {
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
      model: ref(null),
      modelo: ref(null),
      tag: ref(null),
      workflow: ref(null),
      descricao: ref(null),
      colaborador: ref(null),
      titulos: ref(null),
      links: ref(null),
      modelos: [
        "Administrativo",
        "Desenvolvimento",
        "Contas",
        "Comercial",
        "Projetos"
      ],
      tags: ["Syclus 1.0", "Syclus 2.0", "Manutenção", "Pagamentos", "POP"],
      colaboradors: ["Helton", "Henrique", "João Paulo", "Pedro", "João Pedro"]
    };
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 1px 5px;
}
.btn {
  margin-top: 10px;
}
</style>
