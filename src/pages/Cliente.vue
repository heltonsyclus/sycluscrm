<template window-height>
<<<<<<< HEAD
  <div class="flex" style="max-width:100%">
    <div class="col1 flex">
      <div>
        <q-card class="my-card">
          <q-card-section>
            <p style="font-weight:500;font-size:16px">Pesquisa de cliente</p>
            <q-separator class="q-mb-sm" />
            <q-input
              v-model="nomeFantasia"
              dense
              label="Digite o nome ou CNPJ"
              @keyup.enter="ProcurarCliente()"
            >
              <template v-slot:prepend>
                <q-icon size="18px" name="search" />
              </template>
            </q-input>
          </q-card-section>

          <div style="text-align:center">
            <q-btn
              rounded
              dense
              unelevated
              size="14px"
              style="padding:0px 15px"
              class="capitalize q-mb-md"
              color="primary"
              label="Buscar"
              @click="ProcurarCliente()"
            />
          </div>
        </q-card>
      </div>
      {{ this.telaWidth }}
      <q-dialog
        v-model="exibeSelecaoCliente"
        persistent
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card style="width:550px">
          <q-card-section class="row items-center q-pb-sm topo-fixo">
            <div class="text-h6 color-titulo">Selecione a cliente</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <div class="margin-top">
            <q-card-section
              class="card-primary flex"
              style="margin:0px 10px 5px"
              v-for="(cliente, index) in this.dadosCliente"
              :key="cliente"
              @click="selecionarCliente(index)"
            >
              <p>{{ cliente.nome_fantasia }}</p>
            </q-card-section>
          </div>
        </q-card>
      </q-dialog>

      <div>
=======
  <div class="flex row">
    <div class="column col-3 bg-grey-4" style="min-height:100vh">
      <q-card class="my-card" style="margin:10px 0px 0px 10px">
        <q-card-section>
          <p style="font-weight:500;font-size:16px">Pesquisa de cliente</p>
          <q-separator class="q-mb-sm" />
          <q-input
            v-model="Contexto"
            dense
            label="Digite o nome ou CNPJ"
            @keyup.enter="ProcurarCliente()"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-card-section>
        <div style="text-align:center">
          <q-btn
            rounded
            dense
            unelevated
            size="14px"
            style="padding:0px 15px"
            class="capitalize q-mb-md"
            color="primary"
            label="Buscar"
            @click="ProcurarCliente()"
          />
        </div>
      </q-card>
      <div v-show="cardEmpresa">
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
        <q-card
          class="my-card bg-light-blue-9"
          style="color:#fff"
          v-show="clienteAtivo"
        >
          <q-card-section>
            <div class="flex justify-between items-center">
              <p style=" font-size:16px;font-weight:700">Dados do cliente</p>
              <q-btn
                round
                flat
                dense
                text-color="white"
                icon="autorenew"
                @click.prevent="carregarDadosCliente"
                style="margin-bottom:5px"
              >
              </q-btn>
            </div>
            <q-separator color="white" class="q-mb-sm" />
            <div
<<<<<<< HEAD
              v-for="cliente in this.objCliente"
              :key="cliente"
=======
              v-for="Empresa in this.Empresa"
              :key="Empresa"
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
              class="column"
              style="font-style:italic;"
            >
<<<<<<< HEAD
              <div style="width:100%">
                <q-icon size="18px" name="money" class="q-pr-sm" /><span>{{
                  cliente.id_cliente
                }}</span>
              </div>
              <div style="width:100%">
                <q-icon size="18px" name="business" class="q-pr-sm" /><span>{{
                  cliente.nome_fantasia
                }}</span>
              </div>
              <div style="width:100%">
                <q-icon size="18px" name="business" class="q-pr-sm" /><span>
                  {{ cliente.razao_social }}
                </span>
              </div>
              <div style="width:100%">
                <q-icon size="18px" name="pin" class="q-pr-sm" />
                <span>{{ cliente.cpf_cnpj }}</span>
              </div>
              <div
                style="width:100%"
                v-for="telefones in this.telefone"
                :key="telefones"
              >
                <q-icon size="18px" name="phone_in_talk" class="q-pr-sm" />
                <span>{{ telefones }}</span>
              </div>
              <div v-for="emails in this.email" :key="emails">
                <q-icon size="18px" name="email" class="q-pr-sm" />
                <span style="width:100%">{{ emails }}</span>
              </div>
              <div
                style="width:100%"
                v-for="bairros in this.bairro"
                :key="bairros"
              >
                <q-icon size="18px" name="share_location" class="q-pr-sm" />
                <span>{{ bairros }}</span>
              </div>
              <div>
                <q-icon size="18px" name="done" class="q-pr-sm" />
                <span
                  class="bg-positive"
                  style="margin-bottom:5px;padding:1px 5px 1px 0px"
                >
                  Ativo
=======
              <div>
                <q-icon name="business" class="q-pr-sm" /><span>
                  {{ Empresa.nome }}
                </span>
              </div>

              <div>
                <q-icon name="business" class="q-pr-sm" /><span>{{
                  Empresa.fantasia
                }}</span>
              </div>
              <div>
                <q-icon name="pin" class="q-pr-sm" />
                <span>{{ Empresa.cnpj }}</span>
              </div>
              <div>
                <q-icon name="phone_in_talk" class="q-pr-sm" />
                <span>{{ Empresa.numero }}</span>
              </div>
              <div>
                <q-icon name="email" class="q-pr-sm" />
                <span>{{ Empresa.email }}</span>
              </div>
              <div>
                <q-icon name="share_location" class="q-pr-sm" />
                <span>{{ Empresa.localidade }}</span>
              </div>
              <div>
                <q-icon name="done" class="q-pr-sm" />
                <span
                  class="bg-positive"
                  style="width:40px;margin-bottom:5px"
                  v-if="Empresa.status === 'Ativo'"
                >
                  {{ Empresa.status }}
                </span>
                <span
                  class="bg-red"
                  style="width:40px;margin-bottom:5px"
                  v-if="Empresa.status === 'Inativo'"
                >
                  {{ Empresa.status }}
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
                </span>
              </div>
            </div>
          </q-card-section>
        </q-card>
<<<<<<< HEAD
      </div>
      <div>
        <q-card class="my-card" v-show="clienteAtivo">
          <q-card-section>
            <p style="font-weight:500;font-size:16px">Estatísticas</p>
            <q-separator class="q-mb-sm" />
            <div class="flex">
              <q-card class="card-secundario">
                <div>
                  <p>Atividade pendentes</p>
                  <span class="card-span">{{ "1" }}</span>
                </div>
              </q-card>
              <q-card class="card-secundario">
                <div>
                  <p>Projetos ativos</p>
                  <span class="card-span">{{ "1" }}</span>
                </div>
              </q-card>
              <q-card class="card-secundario">
                <div>
                  <p>Últimos 30 dias</p>
                  <span class="card-span">{{ "8" }}</span>
                </div>
              </q-card>
            </div>
            <div class="flex">
              <q-card class="card-secundario">
                <div>
                  <p style="padding-bottom:5px">Suporte</p>
                  <span class="card-span">{{ "30" }}</span>
                </div>
              </q-card>
              <q-card class="card-secundario">
                <div>
                  <p style="padding-bottom:10px">Segmento</p>
                  <span class="card-span" style="font-size:13px">{{
                    "Tecnológica"
                  }}</span>
                </div>
              </q-card>
              <q-card class="card-secundario">
                <div>
                  <p style="padding-bottom:5px">Regime</p>
                  <span class="card-span" style="font-size:13px">{{
                    "Simples nacional"
                  }}</span>
                </div>
=======
        <q-card class="my-card" style="margin:10px 0px 0px 10px">
          <q-card-section>
            <p style="font-weight:500;font-size:16px">Estatísticas</p>
            <q-separator class="q-mb-sm" />
            <div v-for="Empresa in this.Empresa" :key="Empresa" class="flex">
              <q-card class="card-primary">
                <q-card-section>
                  <p>Atividade</p>
                  <span>{{ Empresa.atividade }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Projetos</p>
                  <span> {{ Empresa.projetos }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Finalizados</p>
                  <span> {{ Empresa.finalizados }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Suporte</p>
                  <span> {{ Empresa.suporte }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Tempo</p>
                  <span> {{ Empresa.tempo }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Sistema</p>
                  <span>{{ Empresa.tipo }}</span>
                </q-card-section>
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="col2">
      <BarraLayout
        @OnClick="OnClickBarraLayout"
        :ConteudoBtn="this.ObjDashboard['grupos']"
        :ConteudoApp="GrupoCardsOpcionais"
        Aplicacao="AplicativosPadrao"
      />

      <div class="row">
        {{ this.login }}
        <CardGrupoApi
          class="q-mt-xs card-responsivo"
          style="margin:5px;margin-bottom:5px"
          v-for="(ObjCard, index) in this.ObjDashboard.grupos[
            this.IndexGrupoAtual
          ].cards"
          :key="index"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          topo_fixo="topo_fixo"
          :width="ObjCard.width"
          :height="ObjCard.height"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :link_item="ObjCard.link_item"
          :idPrincipal="this.idClienteAtivo"
          :msg="this.msgCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { layoutDashBoardCliente } from "src/commands/layoutDashboard.js";
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardGrupoApi from "src/components/Cards/CardGrupoApi.vue";
import {
  bodyProcuraIdCliente,
  bodyDadosCliente
} from "src/boot/consultaSql.js";
import { defineComponent } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BarraLayout, CardGrupoApi },
  name: "Cliente",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      GrupoCards: [],
      GrupoCardsOpcionais: [],
<<<<<<< HEAD
      nomeFantasia: null,
      idClienteAtivo: null,
      clienteAtivo: false,
      objCliente: [],
      dadosCliente: null,
      exibeSelecaoCliente: false,
      telaWidth: "",
      msgCard: "",
      bairro: "",
      telefone: "",
      email: ""
=======
      Contexto: null,
      cardEmpresa: false,
      ObjEmpresa: [],
      Empresa: []
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
    };
  },
  methods: {
    parar() {
      this.msgCard = null;
    },
    OnClickBarraLayout(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.AtualizarCardsGrupoAtual();
    },
    AtualizarCardsGrupoAtual() {
      this.msgCard = "atualizar_conteudo";
      setTimeout(() => {
        this.msgCard = "";
      }, 1000);
    },

    ProcurarCliente() {
<<<<<<< HEAD
      this.objCliente = "";
      if (this.nomeFantasia === null) {
=======
      if (this.Contexto === null || this.Contexto === "") {
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
<<<<<<< HEAD
          message: "Preencha os campos!"
        });
      } else {
        this.clienteAtivo = false;
        let body = bodyProcuraIdCliente(this.nomeFantasia.toUpperCase());
        this.$api.post("consultasql", body).then(res => {
          let arrRetorno = res.data;
          if (arrRetorno.length <= 0) {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Esse cliente não existe ou está inativo!"
            });
            return false;
          }
          this.dadosCliente = arrRetorno;
          if (this.dadosCliente.length <= 1) {
            this.dadosCliente = this.dadosCliente[0];
            this.carregarDadosCliente();
          } else {
            this.exibeSelecaoCliente = true;
          }
        });
      }
      this.nomeFantasia = null;
    },

    carregarDadosCliente() {
      if (this.dadosCliente.id_cliente === null) {
        return false;
      }
      //Setando cliente ativo
      this.clienteAtivo = true;
      this.idClienteAtivo = this.dadosCliente.id_cliente;

      //carregando dados Cliente
      let body = bodyDadosCliente(this.idClienteAtivo);
      this.$api.post("consultasql", body).then(res => {
        let arrRetorno = res.data;
        this.objCliente = arrRetorno;
        this.bairro = this.objCliente[0]["bairro"].split(",");
        this.email = this.objCliente[0]["email"].split(";");
        this.telefone = this.objCliente[0]["telefone"].split(";");
      });

      //atualizar conteudo dos cards do grupo/dashboard atual
      this.AtualizarCardsGrupoAtual();
      /*
      this.msgCard = "atualizar_conteudo";
      setTimeout(() => {
        this.msgCard = "";
      }, 2000);
      */
    },
    selecionarCliente(index) {
      this.exibeSelecaoCliente = false;
      this.dadosCliente = this.dadosCliente[index];
      this.carregarDadosCliente();
    },
    handleResize() {
      this.telaWidth = window.innerWidth;
      if (window.innerWidth) {
=======
          message: "Preencha o campo."
        });
      } else {
        this.$router.push({ query: { q: this.Contexto } });
        this.Empresa = this.ObjEmpresa.empresa[0][this.Contexto];
        this.$q.notify({
          color: "positive",
          textColor: "white",
          icon: "corporate_fare",
          message: "Procurando cliente ..."
        });
        this.cardEmpresa = true;
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
      }
    }
  },
<<<<<<< HEAD
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login
    });
    return {
      login
    };
  },
  created() {
    this.ObjDashboard = layoutDashBoardCliente();
    this.msgCard = "limpar_conteudo";
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
=======
  /*  computed: {
  url() {
      let queryString =""
      for (let key in this.$route.query){
        queryString+= `&${key}=${this.$route.query[key]}`;
      }
      console.log(queryString);
      return "/empresa?_limit=10"+queryString
    }
  },*/
  created() {
    const json =
      '{"id_dashboard":4,"dashboard":"Cliente","grupos":[{"id_grupo":1,"grupo":"Helpdesk","icone":"assignment_turned_in","cards":[{"id_card":35,"card":"Pendentes","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["atividade 1","atividade 2"]},{"id_card":36,"card":"Finalizadas","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Finalizadas 1","Finalizadas 2"]},{"id_card":37,"card":"SPED","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Sped 1","Sped 2"]},{"id_card":38,"card":"Atendimento mensal","ordem":1,"tipo_card":"Grafico","sub_tipo":"grafico_padrao"},{"id_card":39,"card":"Contato","ordem":1,"tipo_card":"Secao","sub_tipo":"secao-contexto"},{"id_card":40,"card":"XML","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["XML 1","XML 2"]}],"cards_opcionais":[{"id_card":35,"card":"Pendentes","ordem":1,"icone":"pending_actions","cor":"primary"},{"id_card":36,"card":"Finalizadas","ordem":2,"icone":"done","cor":"positive"},{"id_card":37,"card":"SPED","ordem":3,"icone":"upload_file","cor":"amber-10"},{"id_card":38,"card":"Localização","ordem":4,"icone":"location_on","cor":"cyan-10"},{"id_card":39,"card":"Contato","ordem":5,"icone":"phone_in_talk","cor":"green-10"},{"id_card":39,"card":"XML","ordem":6,"icone":"code","cor":"light-blue-10"}]},{"id_grupo":2,"grupo":"Projetos","icone":"search","cards":[{"id_card":36,"card":"Inicial","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Inicial 1","Inicial 2"]},{"id_card":37,"card":"Planejamento","ordem":2,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["planejamento 1","planejamento 2"]},{"id_card":38,"card":"Execução","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Execução 1","Execução 2"]},{"id_card":39,"card":"Finalizadas","ordem":4,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Finalizadas 1","Finalizadas 2"]}],"cards_opcionais":[{"id_card":36,"card":"Inicial","ordem":1,"icone":"forward","cor":"orange"},{"id_card":37,"card":"Planejamento","ordem":2,"icone":"playlist_add_check","cor":"pink-10"},{"id_card":38,"card":"Execução","ordem":3,"icone":"merge_type","cor":"purple-10"},{"id_card":39,"card":"Finalizadas","ordem":4,"icone":"done","cor":"green-14"}]},{"id_grupo":3,"grupo":"Financeiro","icone":"assignment_turned_in","cards":[{"id_card":40,"card":"Atividades específicas","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Atividades 1","Atividades 2"]},{"id_card":41,"card":"Faturas","ordem":2,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Faturas 1","Faturas 2"]}],"cards_opcionais":[{"id_card":40,"card":"Atividades específicas","ordem":1,"icone":"format_indent_increase","cor":"yellow-14"},{"id_card":41,"card":"Faturas","ordem":2,"icone":"account_balance","cor":"grey-14"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    const empresas =
      '{"empresa":[{"engenharia":[{"nome":"A C P ENGENHARIA E CONSULTORIA","fantasia":"A C P ENGENHARIA","cnpj":"25.336.622/0001-16","numero":"(82) 9 9689-2561","email":"acpeng@gmail.com","localidade":"Rua:Amazonas,n 52","status":"Inativo","atividade":5,"projetos":1,"finalizados":2,"suporte":4,"tempo":"01:14","tipo":"ERP"}],"sucolandia":[{"nome":"Sucolândia","fantasia":"Suco natural","cnpj":"25.036.332/0001-21","numero":"(82) 9 9689-4443","email":"suconatural@gmail.com","localidade":"Rua:Barão Silva,n 52","status":"Ativo","atividade":5,"projetos":1,"finalizados":2,"suporte":4,"tempo":"02:72","tipo":"ERP"}]}]}';
    this.ObjEmpresa = JSON.parse(empresas);
    this.Grupos = this.ObjDashboard["grupos"];
>>>>>>> 663d18ecf27b06ed2325358d29206643f058516b
  }
});
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.card-primary {
  background-color: #dadbdd;
  margin: 2px;
  margin-bottom: 20px;
  color: rgb(51, 51, 51);
}
.card-primary:hover {
  background-color: #6497ff;
}
.my-card {
  margin: 10px 0px 0px 10px;
}
.card-secundario {
  background-color: #447dee;
  width: 32%;
  height: 87px;
  text-align: center;
  margin: 1px;
  padding: 12px 2px 0px 2px;
  font-size: 12px;
  color: rgb(255, 255, 255);
}
.card-span {
  font-size: 18px;
  font-weight: 500;
  padding-top: 50px;
}
.color-titulo::before {
  background-color: #109cf1;
  content: "";
  display: inline-block;
  width: 3px;
  height: 15px;
  margin-right: 5px;
}
.topo-fixo {
  position: fixed;
  z-index: 2;
  width: 550px;
  background-color: #fdfdfd;
}
.margin-top {
  margin-top: 63px;
}
.col1 {
  background-color: #e0e0e0;
  min-height: 100vh;
  width: 25%;
}
.col2 {
  width: 75%;
}
@media only screen and (max-width: 1320px) {
  .col1 {
    width: 100%;
    background-color: #e6e6e6;
    min-height: 40vh;
  }
  .col2 {
    width: 100%;
  }
  .my-card {
    max-width: 100%;
    min-width: 330px;
    margin: 10px 10px 10px 10px;
  }
  .card-secundario {
    width: 32%;
    height: 87px;
    padding: 12px 5px 0px 5px;
  }
}
</style>
