<template>
  <div
    class="flex justify-between"
    style="padding:0;margin:20px auto;width:90%;"
  >
    <h1 style="height:40px;font-weight:400">
      {{ hoje }}
    </h1>
    <div>
      <h5 style="height:40px;font-weight:500" class="capitalize	q-mb-xl">
        {{ mes }}
      </h5>
      <p>Organize atividades!</p>
      <q-btn
        class="q-mt-xl"
        style="width:80px;margin-top:10px"
        size="sm"
        color="primary"
        label="Veja mais"
        to="/Agenda"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoje: new Date()
        .toLocaleString("pt-br", { day: "numeric" })
        .padStart(2, "0"),
      mes: new Date().toLocaleString("pt-br", { month: "long" })
    };
  }
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
</style>
