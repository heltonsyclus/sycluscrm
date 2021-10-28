<template>
  <div class="flex row">
    <div class="column col-3 bg-grey-4" style="heigth:100vh">
      <q-card class="my-card" style="margin:10px 0px 0px 10px">
        <q-card-section>
          <p style="font-weight:500;font-size:16px">Pesquisa de cliente</p>
          <q-separator class="q-mb-sm" />
          <q-input v-model="Contexto" dense label="Digite o nome ou CNPJ">
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

      <div>
        <q-card
          class="my-card bg-light-blue-9"
          style="margin:10px 0px 0px 10px;color:#fff"
        >
          <q-card-section>
            <p style=" font-size:16px;font-weight:700">Dados do cliente</p>
            <q-separator color="white" class="q-mb-sm" />
            <div
              v-for="objEmpresa in empresa"
              :key="objEmpresa"
              class="column"
              style="font-style:italic"
            >
              <div>
                <q-icon name="business" class="q-pr-sm" /><span>
                  {{ objEmpresa.nome }}
                </span>
              </div>

              <div>
                <q-icon name="business" class="q-pr-sm" /><span>{{
                  objEmpresa.fantasia
                }}</span>
              </div>
              <div>
                <q-icon name="pin" class="q-pr-sm" />
                <span>{{ objEmpresa.cnpj }}</span>
              </div>
              <div>
                <q-icon name="phone_in_talk" class="q-pr-sm" />
                <span>{{ objEmpresa.numero }}</span>
              </div>
              <div>
                <q-icon name="email" class="q-pr-sm" />
                <span>{{ objEmpresa.email }}</span>
              </div>
              <div>
                <q-icon name="share_location" class="q-pr-sm" />
                <span>{{ objEmpresa.localidade }}</span>
              </div>
              <div>
                <q-icon name="done" class="q-pr-sm" />
                <span class="bg-positive" style="width:40px;margin-bottom:5px">
                  {{ objEmpresa.status }}
                </span>
              </div>
            </div>

            <q-btn
              unelevated
              size="14px"
              style="padding:0px 15px"
              rounded
              dense
              color="grey-9"
              text-color="white"
              class="q-mt-sm capitalize"
              label="Veja mais"
              @click="$router.push({ name: 'pesquisa' })"
            />
          </q-card-section>
        </q-card>

        <q-card class="my-card" style="margin:10px 0px 0px 10px">
          <q-card-section>
            <p style="font-weight:500;font-size:16px">Estatísticas</p>
            <q-separator class="q-mb-sm" />
            <div v-for="objEmpresa in empresa" :key="objEmpresa" class="flex">
              <q-card class="card-primary">
                <q-card-section>
                  <p>Atividade</p>
                  <span>{{ objEmpresa.atividade }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Projetos</p>
                  <span> {{ objEmpresa.projetos }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Finalizados</p>
                  <span> {{ objEmpresa.finalizados }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Suporte</p>
                  <span> {{ objEmpresa.suporte }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Tempo</p>
                  <span> {{ objEmpresa.tempo }}</span>
                </q-card-section>
              </q-card>
              <q-card class="card-primary">
                <q-card-section>
                  <p>Sistema</p>
                  <span>{{ objEmpresa.tipo }}</span>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="column col-9">
      <BarraLayout
        @OnClick="OnClickValor"
        :ConteudoBtn="Grupos"
        :ConteudoApp="GrupoCardsOpcionais"
        Aplicacao="AplicativosPadrao"
      />
      <div class="row">
        <CardBase
          class="q-mt-xs"
          style="margin-left:5px"
          v-for="(ObjCard, index) in GrupoCards"
          :key="index"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardBase from "src/components/CardBase.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BarraLayout, CardBase },
  name: "Cliente",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupos: [],
      GrupoCards: [],
      GrupoCardsOpcionais: [],
      Contexto: "",
      empresa: [
        {
          nome: "A C P ENGENHARIA E CONSULTORIA",
          fantasia: "A C P ENGENHARIA",
          cnpj: "25.336.622/0001-16",
          numero: "(82) 9 9689-2561",
          email: "acpeng@gmail.com",
          localidade: "Rua: Amazonas, n 52",
          status: "Ativo",
          atividade: 5,
          projetos: 1,
          finalizados: 2,
          suporte: 4,
          tempo: "01:14",
          tipo: "ERP"
        }
      ]
    };
  },
  methods: {
    OnClickValor(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.Grupo = this.ObjDashboard["grupos"][IndexGrupo];
      this.GrupoCards = this.Grupo["cards"];
      this.GrupoCardsOpcionais = this.Grupo["cards_opcionais"];
    },
    ProcurarCliente() {
      if (this.Contexto.trim() === "") {
        alert("Preencha os campos!");
      } else {
        this.$router.push({ query: { q: this.Contexto } });
        alert(this.Contexto);
      }
      this.Contexto = "";
    }
  },
  created() {
    const json =
      '{"id_dashboard":4,"dashboard":"Cliente","grupos":[{"id_grupo":1,"grupo":"Helpdesk","icone":"assignment_turned_in","cards":[{"id_card":35,"card":"Pendentes","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["atividade 1","atividade 2"]},{"id_card":36,"card":"Finalizadas","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Finalizadas 1","Finalizadas 2"]},{"id_card":37,"card":"SPED","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Sped 1","Sped 2"]},{"id_card":38,"card":"Atendimento mensal","ordem":1,"tipo_card":"Grafico","sub_tipo":"grafico_padrao"},{"id_card":39,"card":"Contato","ordem":1,"tipo_card":"Secao","sub_tipo":"secao-contexto"},{"id_card":40,"card":"XML","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["XML 1","XML 2"]}],"cards_opcionais":[{"id_card":35,"card":"Pendentes","ordem":1,"icone":"pending_actions","cor":"primary"},{"id_card":36,"card":"Finalizadas","ordem":2,"icone":"done","cor":"positive"},{"id_card":37,"card":"SPED","ordem":3,"icone":"upload_file","cor":"amber-10"},{"id_card":38,"card":"Localização","ordem":4,"icone":"location_on","cor":"cyan-10"},{"id_card":39,"card":"Contato","ordem":5,"icone":"phone_in_talk","cor":"green-10"},{"id_card":39,"card":"XML","ordem":6,"icone":"code","cor":"light-blue-10"}]},{"id_grupo":2,"grupo":"Projetos","icone":"search","cards":[{"id_card":36,"card":"Inicial","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Inicial 1","Inicial 2"]},{"id_card":37,"card":"Planejamento","ordem":2,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["planejamento 1","planejamento 2"]},{"id_card":38,"card":"Execução","ordem":3,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Execução 1","Execução 2"]},{"id_card":39,"card":"Finalizadas","ordem":4,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Finalizadas 1","Finalizadas 2"]}],"cards_opcionais":[{"id_card":36,"card":"Inicial","ordem":1,"icone":"forward","cor":"orange"},{"id_card":37,"card":"Planejamento","ordem":2,"icone":"playlist_add_check","cor":"pink-10"},{"id_card":38,"card":"Execução","ordem":3,"icone":"merge_type","cor":"purple-10"},{"id_card":39,"card":"Finalizadas","ordem":4,"icone":"done","cor":"green-14"}]},{"id_grupo":3,"grupo":"Financeiro","icone":"assignment_turned_in","cards":[{"id_card":40,"card":"Atividades específicas","ordem":1,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Atividades 1","Atividades 2"]},{"id_card":41,"card":"Faturas","ordem":2,"btn_comando":"btn-filtro","tipo_card":"Lista","sub_tipo":"lista-padrao","conteudo_card":["Faturas 1","Faturas 2"]}],"cards_opcionais":[{"id_card":40,"card":"Atividades específicas","ordem":1,"icone":"format_indent_increase","cor":"yellow-14"},{"id_card":41,"card":"Faturas","ordem":2,"icone":"account_balance","cor":"grey-14"}]}]}';
    this.ObjDashboard = JSON.parse(json);
    this.Grupos = this.ObjDashboard["grupos"];
  }
});
</script>

<style>
p {
  padding: 0;
  margin: 0;
}
.card-primary {
  background-color: #0659f3;
  width: 85px;
  height: 80px;
  margin: 2px;
  font-size: 11px;
  text-align: center;
  color: #fff;
}
.card-primary span {
  font-size: 25px;
}
</style>
