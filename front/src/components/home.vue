<template>
  <top-bar />
  <el-container>
    <el-container style="border: 1px solid #eee">
      <side-menu />
      <el-container>
        <el-calendar class="calendar-frame" ref="calendar" v-model="value">
          <template #header="{date}">
            <span>{{date}}</span>
            <el-button-group>
              <el-button size="mini" @click="selectDate('prev-month')"
                >Previous Month</el-button
              >
              <el-button size="mini" @click="selectDate('next-month')"
                >Next Month</el-button
              >
            </el-button-group>
            <el-button-group>
               <el-button style="background: blue; color: white" size="mini" @click="redirect(1)"
                >Add new Event</el-button>
            </el-button-group>
          </template>
          <template #dateCell="{ data }">
            <p
              @click="dialogVisible = true"
              :class="data.isSelected ? 'is-selected' : ''"
            >
              {{ data.day.split("-").slice(2).join("-") }}
              {{
                data.day === new Date().toJSON().split("T").shift()
                  ? "asda"
                  : " "
              }}
              <span v-if="data.isSelected"> 🟢 </span>
            </p>
          </template>
        </el-calendar>
      </el-container>
      <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
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
import api from "../utils/api";
import topBar from "./top-bar.vue";
import SideMenu from "./side-menu.vue";
export default defineComponent({
  components: { topBar, SideMenu },
  setup() {
    const calendar = ref();
    let eventList: string[] = [""];
    const dialogVisible = ref(false);

    const selectDate = (val: string) => {
      calendar.value.selectDate(val);
    }
    return {
      calendar,
      dialogVisible,
      eventList,
      selectDate
    };
  },
  async created() {
    this.eventList = await this.events();
  },
  methods: {
    events: async (): Promise<string[]> => {
      //todo
      return await api.get(`/events/user/`);
    },
    redirect(key:number) {
      switch (key) {
        case 1:
          return this.$router.push('event');
        case 2:
          return this.$router.push('user');
        case 3:
          return this.$router.push('invite');
        default:
          break;
      }
    }
  },
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