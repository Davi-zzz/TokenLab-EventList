<template>
  <top-bar></top-bar>
  <div class="frame">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="Date">
        <template #default="scope">
          <i class="el-icon-time"></i>
          ST:
          <span style="margin-left: 10px">{{ scope.row.date_start.replace('T', ' ') }}</span>
          -
          FT:
          <span style="margin-left: 10px">{{ scope.row.date_finish.replace('T', ' ') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Name">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top">
            <template #default>
              <p>Created By: {{ scope.row.created_by }}</p>
            </template>
            <template #reference>
              <div class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button
            icon="el-icon-check"
            size="mini"
            type="success"
            circle
            @click="handleAccept(scope.$index, scope.row)"
          ></el-button>
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="danger"
            circle
            @click="handleReject(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <side-menu></side-menu>
  <el-container style="border: 1px solid #eee"> </el-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SideMenu from "./side-menu.vue";
import topBar from "./top-bar.vue";
import api from "../utils/api";
export default defineComponent({
  components: { topBar, SideMenu },
  setup() {
    return {
      tableData: [
        {
          date_start: "2021-10-06T22:02",
          date_finish: "2021-10-06T22:02",
          name: "Tom",
          desc: "No. 189, Grove St, Los Angeles",
          guests: ["fulano", "ditano", "madrugano"],
          status: 0,
        },
        {
          date_start: "2021-10-06T22:02",
          date_finish: "2021-10-06T22:02",
          name: "Tom",
          desc: "No. 189, Grove St, Los Angeles",
          guests: ["fulano", "ditano", "madrugano"],
          status: 1,
        },
        {
          date_start: "2021-10-06T22:02",
          date_finish: "2021-10-06T22:02",
          name: "Tom",
          desc: "No. 189, Grove St, Los Angeles",
          guests: ["fulano", "ditano", "madrugano"],
          status: 1,
        },
        {
          date_start: "2021-10-06T22:02",
          date_finish: "2021-10-06T22:02",
          name: "Tom",
          desc: "No. 189, Grove St, Los Angeles",
          guests: ["fulano", "ditano", "madrugano"],
          status: 0,
        },
      ],
    };
  },
  methods: {
    async handleReject(index:number, row:any){
      console.log(index, row.id);
      //todo
      const result = await api.put(`/guest/${row.id}/`, { "status": false});
      return result;
    },
    async handleAccept(index:number, row:any){
      console.log(index, row.id);
      //todo
      const result = await api.put(`/guest/${row.id}/`, { "status": true});
      return result;
    }
  },
});
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}
.centralized-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.frame {
  margin-left: 100px;
  margin-top: 10px;
  margin-right: 20px;
}

@media (max-width: 600px) {
  .frame {
    margin: 10px;
    width: 100%;
  }
}
</style>