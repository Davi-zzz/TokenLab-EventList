<template>
  <top-bar />
  <el-container>
    <el-container style="border: 1px solid #eee">
      <side-menu />
      <el-container>
        <el-calendar class="calendar-frame" ref="calendar" v-model="value">
          <template #header="{ date }">
            <span>{{ date }}</span>
            <el-button-group>
              <el-button size="mini" @click="selectDate('prev-month')"
                >Previous Month</el-button
              >
              <el-button size="mini" @click="selectDate('next-month')"
                >Next Month</el-button
              >
            </el-button-group>
            <el-button-group>
              <el-button
                style="background: blue; color: white"
                size="mini"
                @click="redirect(1)"
                >Add new Event</el-button
              >
            </el-button-group>
          </template>
          <template #dateCell="{ data }">
            <p
              @click="(dialogVisible = true), verifyData(data.day)"
              :class="data.isSelected ? 'is-selected' : ''"
            >
              {{ data.day.split("-").slice(2).join("-") }}
              {{
                setAux(
                  eventList.find(
                    (item) => item.start.split("T").shift() === data.day
                  )
                )
                  ? "🟢"
                  : " "
              }}
            </p>
          </template>
        </el-calendar>
      </el-container>
      <el-dialog v-model="dialogVisible" title="Events of the Day" width="30%">
        <div v-for="item in eventsOfDay" :key="item.name">
          <hr />
          <h2 class="label">{{ item.name }}</h2>
          <h3 class="label">
            Duration:
            {{
              `ST: ${item.start.replace("T", " ")} | FT: ${item.end.replace(
                "T",
                " "
              )}`
            }}
          </h3>
          <h3 class="label">Description: {{ item.description }}</h3>
          <hr />
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false"
              >Okay</el-button
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
    const eventList:any = [{}];
    const dialogVisible = ref(false);
    let aux;
    let eventsOfDay = [{}];
    const selectDate = (val: string) => {
      calendar.value.selectDate(val);
    }
    return {
      calendar,
      dialogVisible,
      eventList,
      selectDate,
      aux,
      eventsOfDay
    };
  },
  async created() {
    this.eventList = await this.fillEventList();
    this.authenticateUser();
  
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
    },
    verifyData(data:any){
      this.eventsOfDay = this.eventList.filter((item:any) => item.start.split('T').shift() === data);
    },
    async fillEventList(){
      return this.eventList = [
        {
          "start": "2021-10-06T22:02",
          "end": "2021-10-06T22:02",
          "name": "lettuce recipes",
          "description": "a food lesson about cook delicious dishes with lettuce"
        },
        {
          "start": "2021-10-06T22:02",
          "end": "2021-10-06T22:02",
          "name": "another lettuce recipes",
          "description": "a food lesson about cook delicious dishes with lettuce"
        }
      ]
    },
    setAux(any:any){
      return this.aux = any;
    },
    searchByMoreEvents(aux:any){
      this.eventsOfDay = this.eventList.filter((item:any) => item.start.split('T').shift() === aux.start.split('T').shift());
      return '🟢'
      
    },
    async authenticateUser(){
      await api.get(`/user/${localStorage.getItem('user_id')}`, 
      {headers: {Authorization: "Bearer " + localStorage.getItem("token")}}).catch( 
      () => { localStorage.setItem('token', '');
      localStorage.setItem('user_id', '');
      return window.alert('your session is invalid'), this.$router.push('login'); } );
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
.label {
  padding-top: 25px;
  width: 100%;
}
</style>