import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login
    });

    {
      return login;
    }
  }
};
export function loginAutenticado() {
  //console.log(this.login);
  if (this.login !== []) {
    return true;
  } else {
    return false;
  }
}
