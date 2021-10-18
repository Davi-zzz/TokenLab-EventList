  <template>
  <div class="component-body">
    <span class="main-card demo-border">
      <el-col type="flex" class="form-wrapper">
        <el-row type="flex" align="center" justify="center">
          <h1 class="label">Event Data</h1>
        </el-row>
        <el-row>
          <p class="label">Event Name:</p>
          <el-input v-model="name" placeholder="Please input event name" />
        </el-row>
        <el-row>
          <div class="block" style="width: 100%">
            <p class="label" for="start_time">Start Time (date and time):</p>
            <input class="datepicker" type="datetime-local" v-model="start" name="start_time">
          </div>
        </el-row>
        <el-row>
          <div class="block" style="width: 100%">
            <p class="label" for="end_time">End Time (date and time):</p>
            <input class="datepicker" type="datetime-local" v-model="end" name="end_time">
          </div>
        </el-row>
        <el-row>
          <p class="label">Event Description:</p>
          <el-input
            v-model="description"
            maxlength="250"
            placeholder="Please input"
            show-word-limit
            type="textarea"
          />
        </el-row>
        <el-row class="centralized-flex">
          <el-button class="centralized-flex" style="margin-top: 20px" @click="save" type="primary" round>Send</el-button>
        </el-row>
      </el-col>
    </span>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
.component-body {
  width: 100%;
  display: flex;
  justify-content: center;
}
.main-card {
  position: relative;
}
.centralized-flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-card {
  background: white;
  margin: 0;
  position: absolute; /* 2 */
  top: 50%; /* 3 */
  transform: translate(0, -50%);
  box-shadow: 5px 7px 8px 1px rgba(24, 24, 24, 0.4);
}
.form-wrapper {
  padding: 35px;
  border-radius: 25px;
}
.input {
  margin-top: 10px;
}
.label {
  padding-top: 25px;
}
/* //todo */
@media (max-width: 500px) {
}
.datepicker{
  -webkit-appearance: none;
    background-color: var(--el-input-background-color,var(--el-color-white));
    background-image: none;
    border-radius: var(--el-input-border-radius,var(--el-border-radius-base));
    border: var(--el-input-border,var(--el-border-base));
    box-sizing: border-box;
    color: var(--el-input-font-color,var(--el-text-color-regular));
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: var(--el-transition-border);
    width: 100%;
}
</style>
<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "../utils/api"
export default defineComponent({
  setup() {
    return {
      name: ref(""),
      description: ref(""),
      start: ref(""),
      end: ref("")
    }
  },
  methods: {
    async save(){
      await api.post("");
  },
  }
});
</script>