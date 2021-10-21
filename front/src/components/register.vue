<template>
  <el-row class="component-body" justify="center" type="flex" style="height: 100%;">
      <span class="main-card demo-border">
        <el-col type="flex" class="form-wrapper">
          <el-row type="flex" align="center" justify="center">
            <h1 class="label"> Register </h1>
          </el-row>
          <el-row>
            <span class="label">First name: </span>
          <el-input class="input" v-model="clear_input" placeholder="Please input your first name" clearable />
          </el-row>
          <el-row>
            <span class="label">Last name: </span>
          <el-input class="input" v-model="clear_input" placeholder="Please input your last name" clearable />
          </el-row>
          <el-row>
            <span class="label">Email: </span>
          <el-input class="input" v-model="clear_input" placeholder="Please input your email" clearable />
          </el-row>
          <el-row type="flex">
             <span class="label">Password: </span>
              <el-input class="input" validate-event="'required'" v-model="show_passwd" placeholder="Please input password" show-password />
          </el-row>
          <el-row type="flex">
             <span class="label">Confirm Password: </span>
              <el-input class="input" validate-event="'required|target:show_passwd'" v-model="show_passwd_confirm" placeholder="confirm password" show-password />
          </el-row>
          //todo
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
      clear_input: ref(''),
      show_passwd: ref(''),
      show_passwd_confirm: ref('')
    };
  },
  methods: {
    async register(){
      const result = await api.post("http://");
      return result;
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
body, html, #app{
  height: 100%;
}
body {
  background-color: #f5f5f6;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f5f5f6;
}

::-webkit-scrollbar-thumb {
  background: #a3a3a3;
  border-radius: 20px;
}
</style>