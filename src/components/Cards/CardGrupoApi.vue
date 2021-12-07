<template>
  <q-card class="my-card-s" flat bordered style="max-width:100%">
    <q-item class="items-center" :class="cor_header" dense="dense">
      <q-item-section
        style="height:40px;font-weight:700;color:White;padding-left:10px"
      >
        {{ card }}
      </q-item-section>

      <q-btn
        v-if="btn_comando === 'btn-atualizar'"
        round
        flat
        text-color="white"
        icon="autorenew"
        @click.prevent="atualizarConteudo"
      >
      </q-btn>
    </q-item>
    <q-card-section class="corpo">
      <div class="text-dark">
        <div class="spin" style="width:230px" v-show="carregar">
          <q-knob
            v-model="value"
            size="30px"
            :thickness="0.4"
            color="primary"
            track-color="cyan-3"
          />
        </div>
        <q-list class="rounded-borders bg-grey-1 q-mb-md q-my-none margin-bot">
          <q-expansion-item
            dense
            dense-toggle
            expand-separator
            icon="perm_identity"
            v-for="(grupos, indexGrupo) in this.ObjConteudo.grupos"
            :key="indexGrupo"
            @before-show="showItem(indexGrupo)"
            :label="grupos.grupo"
          >
            <q-card>
              <q-card-section
                class="text-light-blue-10 flex justify-between items-center"
                v-for="(itens, indexItem) in this.ObjConteudo.grupos[indexGrupo]
                  .itens"
                :key="indexItem"
              >
                <p
                  class="q-pt-md pl"
                  style="font-weight:400;font-style:italic;padding-left:15px;min-width:230px"
                >
                  <strong class="capitalize">{{ itens.item }}</strong>
                </p>
                <q-btn
                  color="light-blue-10"
                  round
                  flat
                  icon="more_vert"
                  class="items-center"
                >
                  <q-menu cover auto-close style="pading:0px 5px">
                    <q-list>
                      <q-item clickable>
                        <q-item-section
                          @click.prevent="abrirItem(indexGrupo, indexItem)"
                          >Abrir</q-item-section
                        >
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {
  bodyAtividesPendentesPorTipo,
  bodyAtividesPendentesPorClienteTipo,
  bodyProjetosAtivosPorTipo,
  bodyProjetosAtivosPorClienteTipo
} from "src/boot/consultaSql.js";
export default {
  props: [
    "idPrincipal",
    "conteudo_card",
    "card",
    "btn_comando",
    "cor_header",
    "formato_card",
    "msg"
  ],
  data() {
    return {
      value: 71,
      carregar: false,
      ObjConteudo: {
        grupos: [
          {
            id: 1,
            grupo: "grupo 1",
            qtde: 0,
            itens: [
              {
                id: 1,
                item: "item 1"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    getUrlItem(pIndexGrupo, pIndexItem) {
      let url =
        "https://crm.syclus.com.br/atividades/" +
        this.ObjConteudo.grupos[pIndexGrupo].itens[pIndexItem].id;
      return url;
    },
    abrirItem(pIndexGrupo, pIndexItem) {
      window.open(this.getUrlItem(pIndexGrupo, pIndexItem), "_blank");
    },
    limparConteudoItens(pIndex) {
      this.ObjConteudo.grupos[pIndex].itens = [];
    },
    atualizarConteudoItens(pIndex) {
      this.limparConteudoItens(pIndex);
      let body = this.getBody(
        this.conteudo_card.bodyItem,
        this.ObjConteudo.grupos[pIndex].id
      );
      this.$api.post("consultasql", body).then(res => {
        let arrRetorno = res.data;
        for (let i = 0; i < arrRetorno.length; i++) {
          let item = {
            id: Object.values(arrRetorno[i])[0],
            item: Object.values(arrRetorno[i])[1]
          };
          this.ObjConteudo.grupos[pIndex].itens.push(item);
        }
      });
    },
    showItem(pIndex) {
      this.atualizarConteudoItens(pIndex);
    },
    getBody(pNomeBody, pIdGrupo) {
      if (pNomeBody === "bodyAtividesPendentesPorTipo") {
        return bodyAtividesPendentesPorTipo(this.idPrincipal);
      }
      if (pNomeBody === "bodyAtividesPendentesPorClienteTipo") {
        return bodyAtividesPendentesPorClienteTipo(this.idPrincipal, pIdGrupo);
      }
      if (pNomeBody === "bodyProjetosAtivosPorTipo") {
        return bodyProjetosAtivosPorTipo(this.idPrincipal);
      }
      if (pNomeBody === "bodyProjetosAtivosPorClienteTipo") {
        return bodyProjetosAtivosPorClienteTipo(this.idPrincipal, pIdGrupo);
      }
    },
    atualizarConteudo() {
      this.limparConteudo();
      if (this.idPrincipal !== null) {
        let body = this.getBody(this.conteudo_card.bodyGrupo);
        if (body == null) {
          return false;
        }
        this.carregar = true;
        this.$api.post("consultasql", body).then(res => {
          let arrRetorno = res.data;
          for (let i = 0; i < arrRetorno.length; i++) {
            let item = {
              id: Object.values(arrRetorno[i])[0],
              grupo: Object.values(arrRetorno[i])[1],
              qtde: Object.values(arrRetorno[i])[2]
            };
            this.carregar = false;
            this.ObjConteudo.grupos.push(item);
          }
        });
      }
    },
    limparConteudo() {
      this.ObjConteudo.grupos = [];
    }
  },
  computed: {
    UrlItem() {
      return this.ObjConteudo.grupos;
    }
  },
  watch: {
    msg: {
      handler: function(newValue, oldValue) {
        if (newValue === "limpar_conteudo") {
          this.limparConteudo();
        }
        if (newValue === "atualizar_conteudo") {
          this.atualizarConteudo();
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.margin-bot {
  margin-bottom: 3px;
}
.pl {
  padding-left: 5px;
}
.corpo {
  padding: 0;
  margin: 0px auto;
}
.spin {
  text-align: center;
  margin: 30px auto;
  animation: spins 1s infinite;
}
@keyframes spins {
  to {
    transform: rotate(360deg);
  }
}
</style>
