<template>
  <div
    class="drag"
    @drop="onDrop($event, 1)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in getList(1)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
  <div
    class="drag"
    @drop="onDrop($event, 2)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in getList(2)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
  <div
    class="drag"
    @drop="onDrop($event, 3)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in getList(3)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const items = ref([
      { id: 0, title: "item1", list: 1 },
      { id: 1, title: "item2", list: 2 },
      { id: 2, title: "item3", list: 3 }
    ]);
    const getList = list => {
      return items.value.filter(item => item.list == list);
    };

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData('itemID',item.id)
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find(item => item.id == itemID);
      item.list = list;
    };
    return {
      getList,
      startDrag,
      onDrop
    };
  }
};
</script>

<style>
.drag {
  width: 120px;
  height: 180px;
  background-color: #ccc;
  margin: 10px;
}
.drag-el {
  width: 80px;
  height: 70px;
  background-color: rgb(16, 50, 204);
  margin: 10px;
  padding: 20px;
  color: #fff;
}
</style>
