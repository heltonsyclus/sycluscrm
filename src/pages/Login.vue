<template>
  <q-page class="flex flex-center">
    <div>
      <q-card class="my-card-s-500-304">
        <q-img> 
          <img src="../assets/Syclus-login.png">
        </q-img>

        <q-card-actions class="q-pt-none full-width">
          <q-input
            v-model="email"
            dense
            type="email"
            class="q-py-md full-width"
            label="E-mail"
          />
          <q-input
            class="full-width"
            v-model="password"
            dense
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
          <div class="q-py-lg full-width">
            <q-btn color="primary full-width q-py-md" rounded @click="Logar">
              <div class="capitalize h1">Logar</div>
            </q-btn>
            <p
              @click="$router.push({ name: 'ProblemaLogin' })"
              class="text-center q-pt-md text-primary"
            >
              Esqueci minha senha!
            </p>
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isPwd: true
    };
  },
  methods: {
    Logar() {
      if (this.email === "helton@gmail.com" && this.password === "123456") {
        this.$router.push({ name: "Dashboard" });
      } else {
        alert("Login Inválido!");
      }
    }
  }
});
</script>
<style>
</style>