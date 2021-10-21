<template>
  <top-bar></top-bar>
  <div class="component-body">
    <span class="main-card demo-border">
      <el-col type="flex" class="form-wrapper">
        <el-row type="flex" align="center" justify="center">
          <h1 class="label">User Page</h1>
        </el-row>

        <el-row class="photo">
          <h3 class="label photo">Photo:</h3>
          <el-image
            :src="`https://ui-avatars.com/api/?background=random&color=fff&name=${'davi moraes'}`"
            class="photo"
            style="height: 80px; width: 80px"
          ></el-image>
        </el-row>
        <el-row>
          <span class="label">First name: </span>
          <el-input
            class="input"
            v-model="clear_input_fn"
            placeholder="Please input your first name"
            clearable
          />
        </el-row>
        <el-row>
          <span class="label">Last name: </span>
          <el-input
            class="input"
            v-model="clear_input_ln"
            placeholder="Please input your last name"
            clearable
          />
        </el-row>
        <el-row>
          <span class="label">Email: </span>
          <el-input
            class="input"
            v-model="clear_input_e"
            placeholder="Please input your emails"
            clearable
          />
        </el-row>
        <el-row type="flex">
          <span class="label">Password: </span>
          <el-input
            class="input"
            validate-event="'required'"
            v-model="show_passwd"
            placeholder="Please input password"
            show-password
          />
        </el-row>
        <el-row type="flex">
          <span class="label">Confirm Password: </span>
          <el-input
            class="input"
            validate-event="'required|target:show_passwd'"
            v-model="show_passwd_confirm"
            placeholder="confirm password"
            show-password
          />
        </el-row>
        <el-row class="centralized-flex">
          <el-button
            class="centralized-flex"
            style="margin-top: 20px"
            @click="save"
            type="primary"
            round
            >Save</el-button
          >
        </el-row>
      </el-col>
    </span>
  </div>
  <side-menu></side-menu>
  <el-container style="border: 1px solid #eee"> </el-container>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import sideMenu from "./side-menu.vue";
import topBar from "./top-bar.vue";
import api from "../utils/api";
export default defineComponent({
  components: { topBar, sideMenu },

  created() {
      this.getUserData()
  },
  setup() {
    return {
      req: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
      user_name: "",
      user_id: undefined,
      clear_input_fn: ref(""),
      clear_input_ln: ref(""),
      clear_input_e: ref(""),
      show_passwd: ref(""),
    };
  },
  methods: {
    async save() {
      return await api.put('/user/update');
    },
    // getUser: async function () {
    //   await api
    //     .post("/validate", {}, this.req)
    //     .then((res) => {
    //       this.user_id = res.data.data.id;
    //     })
    //     .catch(() => {
    //       localStorage.removeItem("token");
    //       this.$router.push("login");
    //     });
    // },
    async getUserData(){
        const result:any = await api.get(`/user/${this.user_id}`);
        this.user_name = `${result.first_name + ' ' + result.last_name}`
        return {
            "first_name": result.first_name,
            "last_name": result.last_name,
            "email": result.email,
        };
    }
  },
});
</script>
<style scoped>
.photo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 50px;
}
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
.centralized-flex {
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
@media (max-width: 600px) {
}
.datepicker {
  -webkit-appearance: none;
  background-color: var(--el-input-background-color, var(--el-color-white));
  background-image: none;
  border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
  border: var(--el-input-border, var(--el-border-base));
  box-sizing: border-box;
  color: var(--el-input-font-color, var(--el-text-color-regular));
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