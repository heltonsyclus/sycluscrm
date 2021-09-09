<template>
  <q-page class="flex flex-center bg-primary">
    <div>
      <q-card class="my-card">
        <q-card-actions class="q-pt-none full-width">
          <q-input
            v-model="email"
            filled
            type="email"
            class="q-py-sm full-width"
            label="E-mail"
          />
          <div class="q-py-sm full-width">
            <q-btn color="primary full-width">
              <div class="ellipsis">Enviar</div>
            </q-btn>
            <q-btn
              flat
              color="primary"
              class="full-width"
              label="Voltar"
              @click="$router.push({name:'Login'})"
            />
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "ProblemaLogin",
  setup() {
    return {
      email: ref(""),
    };
  },
  
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
