<template>
<el-header>
      <el-row :gutter="2" justify="space-between" align="center">
        <el-col :span="12" :sm="4" :md="1" type="flex" align="left">
          <el-icon class="borgar-menu">
            <i class="el-icon-menu" style="font-size: 25px"></i>
          </el-icon>
        </el-col>
        <el-col :span="12" type="flex" align="right" :sm="4" :md="2">
          <el-dropdown align="right">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <template #dropdown>
              <el-dropdown-menu style="z-index: 200">
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </el-col>
      </el-row>
    </el-header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  
});
</script>
<style scoped>
.borgar-menu {
  display: none;
  visibility: hidden;
  /* align-items: flex-start; */
}
</style>