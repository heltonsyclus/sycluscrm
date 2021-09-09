<template>
  <q-page class="flex flex-center bg-primary">
    <div>
      <q-card class="my-card">
        <q-img src="https://placeimg.com/500/300/nature">
          <div class="absolute-bottom">
            <div class="text-h6">Seja bem-vindo(a)</div>
            <div class="text-subtitle2">Cliente Syclus</div>
          </div>
        </q-img>

        <q-card-actions class="q-pt-none full-width">
          <q-input
            v-model="email"
            filled
            type="email"
            class="q-py-sm full-width"
            label="E-mail"
          />
          <q-input
            class="full-width"
            v-model="password"
            filled
            label="Password"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="q-py-sm full-width">
            <q-btn color="primary full-width" @click="$router.push({name:'Dashboard'})">
              <div class="ellipsis">Logar</div>
            </q-btn>
            <q-btn
              @click="$router.push({name:'ProblemaLogin'})"
              flat
              color="primary"
              class="full-width"
              label="Problemas com o login"
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
  name: "Login",
  setup() {
    return {
      email: ref(""),
      password: ref(""),
      isPwd: ref(true)
    };
  },
  
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
