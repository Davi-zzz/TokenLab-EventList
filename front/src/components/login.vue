<template>

    <!-- <el-col style="background: blue; width: 25%"> -->
      <!-- <span>a</span>
    </el-col> -->
    <el-row justify="center" type="flex" style="height: 100%;">
      <span class="main-card demo-border">
        <el-col type="flex" class="form-wrapper">
          <el-row type="flex" align="center" justify="center">
            <h1 class="label"> Login </h1>
          </el-row>
          <el-row>
            <span class="label">Email: </span>
          <el-input class="input" v-model="clear_input" placeholder="Please input" clearable />
          </el-row>
          <el-row type="flex">
             <span class="label">Password: </span>
              <el-input class="input" v-model="show_input" placeholder="Please input password" show-password />
              <div style="text-align: right; display:flex; justify-content: right; font-size: 14px; width: 100%">

             <el-button type="text">forgot your password?</el-button>
              </div>
          </el-row>
          
          <el-row style="margin-top: 20px;" type="flex" align="center" justify="center">
              <el-button @click="register" type="text">Register</el-button>
              <el-button  type="primary" round>Sign in</el-button>
          </el-row>
          
        </el-col>
      </span>
    </el-row>
    <!-- <el-col  style="background: blue; width: 25%">
      <span>a</span>
    </el-col> -->

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
      clear_input: ref(''),
      show_input: ref(''),
    };
  },
  methods: {
    async register(){
      const result = await api.post("http://");
      return result;
    }
  }
});
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
body {
  height: 100%;
  background-color: #f5f5f6;
}
.main-card{
   /* height: 10em; */
   position: relative
}
.main-card{
  background: white;
  margin: 0;
  position: absolute;               /* 2 */
  top: 50%;                         /* 3 */
  transform: translate(0, -50%);
  box-shadow: 5px 7px 8px 1px rgba(24, 24, 24, 0.400);
}
.form-wrapper{
  padding: 35px;
  border-radius: 25px;
}
.input{
  margin-top: 10px;
}
.label {
  padding-top: 25px;
}

</style>