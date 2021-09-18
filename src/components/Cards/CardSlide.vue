<template>
  <div>
    <div class="items-center text-center" style="margin-top:15px">
      <h7>{{ titulo }}</h7>
      <div style="width:85%;margin:0px auto" class="flex justify-between items-center">
        <q-avatar
          size="32px"
          color="grey-5"
          text-color="dark"
          icon="chevron_left"
        />
        <h2 class="q-px-xl">{{ time }}</h2>
        <q-avatar
          size="32px"
          color="grey-5"
          text-color="dark"
          icon="navigate_next"
        />
      </div>
      <div style="width:75%;margin:5px auto" class="flex justify-between items-center">
        <q-btn
          rounded
          style="width:85px"  
          size="sm"
          color="red"
          label="pausa"
          icon="pause"
        />
        <q-btn
          rounded
          style="width:100px"
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
      titulo: "Dashboard",
      time: "7:11"
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
