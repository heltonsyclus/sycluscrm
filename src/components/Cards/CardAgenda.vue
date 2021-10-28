<template>
  <div
    class="flex justify-between "
    style="padding:0;margin:25px auto;width:90%;"
  >
    <h1 style="font-weight:600;letter-spacing: -5px;">
      {{ hoje }}
    </h1>
    <div>
      <h5 style="font-weight:700" class="capitalize	">
        {{ mes }}
      </h5>
      <p style="font-style:italic;color:#7E7D7D;font-weight:700">
        Organize sua rotina!
      </p>
      <q-btn
        unelevated
        class="q-mt-xl capitalize"
        style="width:80px;margin-top:5px"
        size="12px"
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

h5,
h1 {
  color: rgb(67, 128, 207);
}
</style>
