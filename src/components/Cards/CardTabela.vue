<template>
  <div class="q-pl-md q-pr-md q-mt-md" v-if="tipo_card_tabela === 'tabela_padrao'">
    <q-table
      ref="tableRef"
      title="Víncuclos"
      :rows="rows"
      color="cyan"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected="selected"
      @selection="onSelection"
    />
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

const columns = [
  {
    name: "desc",
    required: true,
    label: "Descrição",
    align: "left",
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: "Clientes",
    align: "center",
    label: "Clientes",
    field: "Clientes",
    sortable: true
  },
  { name: "Tag", label: "Tag", field: "Tag", sortable: true },
  { name: "Workflow", label: "Workflow", field: "Workflow" },
  { name: "Status", label: "Status", field: "Status" },
  { name: "Duração", label: "Duração", field: "Duração" },
  {
    name: "Previsão",
    label: "Previsão",
    field: "Previsão",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: "Tipos",
    label: "Tipos",
    field: "Tipos",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  { name: "Responsável", label: "Responsável", field: "Responsável" },
  { name: "Situação", label: "Situação", field: "Situação" },
  { name: "GUT", label: "GUT", field: "GUT" },
  { name: "NPS", label: "NPS", field: "NPS" }
];

const rows = [
  {
    name: "XML",
    Clientes: "Sucolândia",
    Tag: "Slyclus 1.0",
    Workflow: "Desenvolvimento",
    Status: "A",
    Duração: "1:10",
    Previsão: "14/06/2021",
    Tipos: "",
    Responsável: "Weverton",
    Situação: "A",
    GUT: "0",
    NPS: "0"
  },
  {
    name: "XML",
    Clientes: "Sucolândia",
    Tag: "Slyclus 1.0",
    Workflow: "Desenvolvimento",
    Status: "A",
    Duração: "1:10",
    Previsão: "14/06/2021",
    Tipos: "",
    Responsável: "Weverton",
    Situação: "A",
    GUT: "0",
    NPS: "0"
  }
];

export default {
  props: ["tipo_card_tabela", "card"],
  setup() {
    const $q = useQuasar();

    const selected = ref([]);
    const lastIndex = ref(null);
    const tableRef = ref(null);

    return {
      selected,
      lastIndex,
      tableRef,
      columns,
      rows,

      getSelectedString() {
        return selected.value.length === 0
          ? ""
          : `${selected.value.length} record${
              selected.value.length > 1 ? "s" : ""
            } selected of ${rows.length}`;
      },

      onSelection({ rows, added, evt }) {
        if (rows.length === 0 || tableRef.value === void 0) {
          return;
        }

        const row = rows[0];
        const filteredSortedRows = tableRef.value.filteredSortedRows;
        const rowIndex = filteredSortedRows.indexOf(row);
        const localLastIndex = lastIndex.value;

        lastIndex.value = rowIndex;
        document.getSelection().removeAllRanges();

        if ($q.platform.is.mobile === true) {
          evt = { ctrlKey: true };
        } else if (
          evt !== Object(evt) ||
          (evt.shiftKey !== true && evt.ctrlKey !== true)
        ) {
          selected.value = added === true ? rows : [];
          return;
        }

        const operateSelection =
          added === true
            ? selRow => {
                const selectedIndex = selected.value.indexOf(selRow);
                if (selectedIndex === -1) {
                  selected.value = selected.value.concat(selRow);
                }
              }
            : selRow => {
                const selectedIndex = selected.value.indexOf(selRow);
                if (selectedIndex > -1) {
                  selected.value = selected.value
                    .slice(0, selectedIndex)
                    .concat(selected.value.slice(selectedIndex + 1));
                }
              };

        if (localLastIndex === null || evt.shiftKey !== true) {
          operateSelection(row);
          return;
        }

        const from = localLastIndex < rowIndex ? localLastIndex : rowIndex;
        const to = localLastIndex < rowIndex ? rowIndex : localLastIndex;
        for (let i = from; i <= to; i += 1) {
          operateSelection(filteredSortedRows[i]);
        }
      }
    };
  }
};
</script>
