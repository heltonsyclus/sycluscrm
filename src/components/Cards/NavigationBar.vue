<template>
  <div class="row justify-center">
    <div class="q-pa-md q-gutter-sm row">
      <q-btn
        no-caps
        class="button"
        style="margin: 2px;"
        @click="$emit('hoje')"
      >
        Today
      </q-btn>
      <q-btn
        no-caps
        class="button"
        style="margin: 2px;"
        @click="$emit('voltar')"
      >
        &lt; Prev
      </q-btn>
      <q-btn
        no-caps
        class="button"
        style="margin: 2px;"
        @click="$emit('adiantar')"
      >
        Next &gt;
      </q-btn>
    </div>
  </div>
</template>