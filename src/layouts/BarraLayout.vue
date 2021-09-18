<template>
  <div>
    <q-tabs v-model="tab" inline-label class="bg-grey-3 text-blue-8">
      <q-tab
        v-for="(btn, index) in ConteudoBtn"
        :key="index"
        :label="btn.grupo"
        :name="btn.grupo"
        :icon="btn.icone"
        :id_grupo="btn.id_grupo"
        class="capitalize"
        @click.prevent="onclickGrupo(index)"
      />
      <q-space />
      <q-btn flat dense>
        <q-icon name="settings" />
        <q-menu
          auto-close
          class="flex"
          style="width: 345px;"
        >
          <q-item
            class="rounded-borders"
            clickable
            v-ripple.center
            style="width: 115px"
            v-for="(box, index) in ConteudoApp"
            :key="index"
          >
            <q-item-section style="text-align:center;margin:0 auto">
              <q-avatar style="text-align:center;margin:0 auto" :icon="box.icone" :color="box.cor" text-color="white" />
              <q-item-label class="q-mt-sm">{{ box.card }} </q-item-label>
            </q-item-section>
          </q-item>
        </q-menu>
      </q-btn>
      <q-btn flat dense>
        <q-icon name="help_outline" class="q-mx-md" />
      </q-btn>
    </q-tabs>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  props: ["ConteudoBtn", "ConteudoApp"],
  name: "BarraLayout",
  setup() {
    return {
      tab: ref("mails")
    };
  },
  data() {
    return {
      Valor: []
    };
  },
  methods: {
    onclickGrupo(ValorIndex) {
      this.$emit("OnClick", ValorIndex);
      this.Valor = ValorIndex;
    }
  },
  created() {
    this.onclickGrupo(0);
    return;
  }
});
</script>
