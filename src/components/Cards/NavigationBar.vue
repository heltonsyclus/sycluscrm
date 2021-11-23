<template>
  <div class="row justify-center">
    <div class="q-pb-sm row">
      <q-btn
        flat
        class="capitalize"
        color="primary"
        style="margin: 5px 2px 0px;"
        @click="$emit('hoje')"
      >
        Hoje
      </q-btn>
      <q-btn
        no-caps
        color="primary"
        class="button"
        unelevated
        style="margin: 2px;"
        @click="$emit('voltar')"
      >
        &lt;
      </q-btn>
      <q-btn
        no-caps
        unelevated
        color="primary"
        class="button"
        style="margin: 2px;"
        @click="$emit('adiantar')"
      >
        &gt;
      </q-btn>
    </div>
  </div>
</template>
