<template>
  <el-row class="component-body" justify="center" type="flex" style="height: 100%">
    <span class="main-card demo-border">
      <el-col type="flex" class="form-wrapper">
        <el-row type="flex" align="center" justify="center">
          <h1 class="label">Login</h1>
        </el-row>
        <el-row>
          <span class="label">Email: </span>
          <el-input
            class="input"
            v-model="email"
            placeholder="Please input"
            clearable
          />
        </el-row>
        <el-row type="flex">
          <span class="label">Password: </span>
          <el-input
            class="input"
            v-model="passwd"
            placeholder="Please input password"
            show-password
          />
          <div
            style="
              text-align: right;
              display: flex;
              justify-content: right;
              font-size: 14px;
              width: 100%;
            "
          >
            <el-button type="text">forgot your password?</el-button>
          </div>
        </el-row>

        <el-row
          style="margin-top: 20px"
          type="flex"
          align="center"
          justify="center"
        >
          <el-button @click="register" type="text">Register</el-button>
          <el-button type="primary" @click="login()" round>Sign in</el-button>
        </el-row>
      </el-col>
    </span>
  </el-row>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "../utils/api";
export default defineComponent({
  setup() {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    };
    const tableData = ref(Array(20).fill(item));
    return {
      tableData,
      email: ref(""),
      passwd: ref(""),
    };
  },
  methods: {
    async register() {
      return this.$router.push("register");
    },
    async login() {
      const result = await api.post("/login", {
        email: this.email,
        password: this.passwd
      });
      if (result.data.error) {
        window.alert(result.data.message)
      }
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('user_id', result.data.userId);

      return this.$router.push('/');
    },
  },
});
</script>
<style scoped>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
.component-body {
  height: 100%;
  background-color: #f5f5f6;
  background-image: url("../assets/undraw_events.svg");
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 550px;
}
.main-card {
  position: relative;
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

</style>