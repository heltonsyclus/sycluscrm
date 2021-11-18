<template>
  <div class="row justify-center">
    <div class="q-pb-sm q-gutter-sm row">
      <q-btn no-caps class="button" style="margin: 2px;" @click="$emit('hoje')" color="primary">
        Hoje
      </q-btn>
      <q-btn
        no-caps
        class="button"
        style="margin: 2px;"
        @click="$emit('voltar')"
      >
        Anterior &lt;
      </q-btn>
      <q-btn
        no-caps
        class="button"
        style="margin: 2px;"
        @click="$emit('adiantar')"
      >
        Próximo &gt;
      </q-btn>
    </div>
  </div>
</template>
