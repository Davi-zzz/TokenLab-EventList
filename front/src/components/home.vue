<template>
  <top-bar/>
  <el-container >
    <el-container style="border: 1px solid #eee">
     <side-menu/>
      <el-container>
        <el-calendar class="calendar-frame" v-model="value">
          <template #dateCell="{ data }" >
            <p @click="dialogVisible = true" :class="data.isSelected ? 'is-selected' : '' ">
              {{ data.day.split("-").slice(2).join("-") }}
              {{ data.day === new Date().toJSON().split("T").shift() ? "asda" : " "  }}
              <span  v-if="data.isSelected" >
              🟢
               </span>
            </p>
            <!-- <p v-if="events.include(data.day)" @click="dialogVisible = true" :class="data.isSelected ? 'is-selected' : '' ">
              {{ data.day.split("-").slice(2).join("-") }}
              {{ data.day === new Date().toJSON().split("T").shift() ? "asda" : " "  }}
              <span  v-if="data.isSelected" >
              🟢
               </span>
            </p> -->
            
          </template>
        </el-calendar>
      </el-container>
      <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElMessageBox } from 'element-plus'
import api from "../utils/api";
import topBar from "./top-bar.vue";
import SideMenu from "./side-menu.vue";
export default defineComponent({
  components: { topBar, SideMenu },
  setup() {
    const value = ref(new Date());
    let eventList:string[] = [''];
    const dialogVisible = ref(false);

    const handleClose = (done: () => void) => {
      ElMessageBox.confirm("Are you sure to close this dialog?")
        .then(() => {
          done();
        })
        .catch(() => {
          // catch error
        });
    };

    return {
      value,
      dialogVisible,
      handleClose,
      eventList,
    };
  },
  async created() {
    this.eventList = await this.events(); 
  },
    methods: {
      events: async ():Promise<string[]> => {
        //todo
        return await api.get(`/events/user/`);
      }
    }
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