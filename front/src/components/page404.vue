<template>
  <el-row justify="center" type="flex" style="height: 100%">
    <span class="main-card demo-border">
      <el-col type="flex" class="form-wrapper">
        <h2>OOOOPS!</h2>
        <h3>its look like the page you're looking for dosnt exists!</h3>
      </el-col>
    </span>
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    methods: {
        toHome(){
            return this.$router.push('home');
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