<template>
  <div>
    <div class="items-center text-center" style="margin-top:15px">
      <h7 style="font-weight:700">{{ titulo }}</h7>
      <div
        style="width:85%;margin:0px auto"
        class="flex justify-between items-center q-mt-md"
      >
        <q-avatar
          style="margin-top:10px"
          size="32px"
          color="grey-5"
          text-color="dark"
          icon="chevron_left"
        />
        <h2
          class="q-px-xl q-pt-md"
          style="font-weight:400;color:#7E7D7D;font-size:70px;padding:5px 0px"
        >
          {{ time }}
        </h2>
        <q-avatar
          style="margin-top:10px"
          size="32px"
          color="grey-5"
          text-color="dark"
          icon="navigate_next"
        />
      </div>
      <div
        style="width:70%;margin:5px auto"
        class="flex justify-between items-center"
      >
        <q-btn
          rounded
          unelevated
          dense
          class="q-mt-sm capitalize"
          style="width:85px;padding:5px 10px"
          size="sm"
          color="red"
          label="pausa"
          icon="pause"
        />
        <q-btn
          class="q-mt-sm capitalize"
          rounded
          dense
          unelevated
          style="width:100px;padding:5px 10px"
          size="sm"
          color="green"
          label="concluír"
          icon="play_arrow"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      titulo: "Tela de Dashboard",
      time: "8:11"
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
