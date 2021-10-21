<template>
  <el-row class="component-body" justify="center" type="flex" style="height: 100%;">
      <span class="main-card demo-border">
        <el-col type="flex" class="form-wrapper">
          <el-row type="flex" align="center" justify="center">
            <h1 class="label"> Register </h1>
          </el-row>
          <el-row>
            <span class="label">First name: </span>
          <el-input class="input" v-model="fn" placeholder="Please input your first name" clearable />
          </el-row>
          <el-row>
            <span class="label">Last name: </span>
          <el-input class="input" v-model="ln" placeholder="Please input your last name" clearable />
          </el-row>
          <el-row>
            <span class="label">Email: </span>
          <el-input class="input" v-model="email" placeholder="Please input your email" clearable />
          </el-row>
          <el-row type="flex">
             <span class="label">Password: </span>
              <el-input class="input" validate-event="'required'" v-model="passwd" placeholder="Please input password" show-password />
          </el-row>
          <el-row type="flex">
             <span class="label">Confirm Password: </span>
              <el-input class="input" validate-event="'required|target:passwd'" v-model="show_passwd_confirm" placeholder="confirm password" show-password />
          </el-row>
          <el-row style="margin-top: 20px;" type="flex" align="center" justify="center">
              <el-button  @click="register" type="primary" round>Register</el-button>
          </el-row>
          <el-row style="margin-top: 20px;" type="flex" align="center" justify="center">
              <el-button @click="login" type="text">Already Have a Account?</el-button>
              
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
    return {
      email: ref(''),
      passwd: ref(''),
      ln: ref(''),
      fn: ref(''),
      show_passwd_confirm: ref('')
    };
  },
  methods: {
    async register(){
      const result = await api.post("/register", {
        firstName: this.fn,
        lastName: this.ln,
        email: this.email,
        password: this.passwd

      });
      if (result.data.error) {
        window.alert(result.data.message)
      }
      return this.$router.push('login');
    },
    login(){
      return this.$router.push('login');
    }
  
  }
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
</style>