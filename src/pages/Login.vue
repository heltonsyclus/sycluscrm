<template>
  <q-page class="flex flex-center">
    <div>
      <q-card class="my-card-login">
        <img
          src="../assets/logo-syclus2.png"
          style="width:50%;text-aligth:center;margin:0 auto;padding:30px 20px 5px"
        />

        <div class="q-pt-none" style="width:90%;margin:0 auto">
          <q-input v-model="vlogin" dense class="full-width" label="Login" />
          <q-input
            class="full-width"
            v-model="password"
            dense
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            @keyup.enter="Logar"
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
            <q-btn
              color="primary full-width capitalize"
              dense
              rounded
              @click.prevent="Logar"
              >Logar
            </q-btn>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { senhaLogin } from "../commands/loginColaborador";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      vlogin: "",
      password: "",
      isPwd: true
    };
  },
  methods: {
    Logar() {
      if (this.login === "" || this.password === "") {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Preencha os campos!"
        });
      } else {
        let objSenhaLogin = senhaLogin();
        for (let i = 0; i < objSenhaLogin.login.length; i++) {
          if (
            objSenhaLogin.login[i].usuario === this.vlogin &&
            objSenhaLogin.login[i].senha === this.password
          ) {
            this.login = objSenhaLogin.login[i];
            this.$router.push({ name: "dashboard" });
          } else {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Usuário não existe!"
            });
          }
        }
      }
    }
  },
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login,
      set: val => {
        $store.commit("showcase/autenticacaoLogin", val);
      }
    });
    return {
      login
    };
  }
};
</script>

<style scope>
.my-card-login {
  width: 100%;
  width: 310px;
  height: 340px;
  padding: 10px;
  margin: 10px 2px;
}
</style>
