<template>
  <el-container class="top-bar" style="z-index: 10000">
    <el-header>
      <el-row :gutter="2" justify="space-between" align="center">
        <el-col :span="12" :sm="4" :md="1" type="flex" align="left">
          
        <el-icon class="borgar-menu">
          <i class="el-icon-menu" style="font-size: 25px"></i>
          
        </el-icon>
        </el-col>
        <el-col  :span="12" type="flex" align="right" :sm="4" :md="2">
          <el-dropdown align="right">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <template #dropdown>
              <el-dropdown-menu>
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
    <el-container style="border: 1px solid #eee">
      <el-aside
        width="80px"
        class="side-menu"
        style="background-color: rgb(238, 241, 246)"
      >
        <el-menu :default-openeds="['1', '3']" style="height: 100%">
          <el-col class="aside-menu">
            <el-menu-item-group>
              <template #title>
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
              </template>
            </el-menu-item-group>
            <el-menu-item-group>
              <template #title>
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
              </template>
            </el-menu-item-group>
            <el-menu-item-group>
              <template #title>
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
              </template>
            </el-menu-item-group>
          </el-col>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main style="margin-left: 100px; margin-top: 10px">
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="120">
            </el-table-column>
            <el-table-column prop="address" label="Address"> </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

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
    };
  },
});
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}
.side-menu {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.top-bar {
  width: 100%;
  position: fixed;
}
.el-aside {
  color: var(--el-text-color-primary);

}
.aside-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

}
.borgar-menu {
  display: none;
  visibility: hidden;
  /* align-items: flex-start; */
}
@media (max-width: 600px) {
  .el-aside {
    display: none;
  }
  .borgar-menu {
  display: flex;
  align-items: flex-start;
  visibility: visible;
}
}
</style>