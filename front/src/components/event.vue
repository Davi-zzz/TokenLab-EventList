<template>
    <top-bar></top-bar>
          <event-form>

          </event-form>
     <side-menu></side-menu>
    <el-container style="border: 1px solid #eee">

    </el-container>

</template>
<script lang="ts">
import { defineComponent } from "vue";
import EventForm from "./event-form.vue";
import SideMenu from "./side-menu.vue";
import topBar from "./top-bar.vue";

export default defineComponent({
  components: { topBar, SideMenu, EventForm },
  
});
</script>
<style scoped>
.is-selected {
  color: #1989fa;
}
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}
.calendar-frame {
  margin-left: 100px;
  margin-top: 10px;
  margin-right: 20px;
}

</style>