<template>
  <div>
    <q-tabs v-model="tab" inline-label class="bg-grey-3 text-blue-8">
      <q-tab
        v-for="(btn, index) in ConteudoBtn"
        :key="index"
        @click.prevent="onclickGrupo(index)"
        :icon="btn.icon"
        :label="btn.nome"
        :name="btn.nome"
        class="capitalize"
      />
      <q-space />
      <q-btn flat round dense>
        <q-icon name="apps" class="q-mx-md" />
      </q-btn>
      <q-btn flat round dense>
        <q-icon name="help_outline" class="q-mx-md" />
      </q-btn>
    </q-tabs>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  props: ["ConteudoBtn"],
  name: "BarraLayout",
  setup() {
    return {
      tab: ref("mails")
    };
  },
  methods: {
    onclickGrupo(ValorIndex) {
      this.$emit("OnClick", ValorIndex);
    }
  },
  created() {
    return this.onclickGrupo(0);
  }
});
</script>
