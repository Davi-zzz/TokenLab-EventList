<template>
<el-header>
      <el-row :gutter="2" justify="space-between" align="center">
        <el-col @click="drawer = true" class="borgar-menu" :span="12" :sm="4" :md="1" type="flex" align="left">
          <el-icon class="borgar-menu">
            <i class="el-icon-menu" style="font-size: 25px"></i>
          </el-icon>
        </el-col>
        <el-col :span="12" type="flex" align="right" :sm="4" :md="2">
          <el-dropdown align="right">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <template #dropdown>
              <el-dropdown-menu style="z-index: 200">
                <el-dropdown-item  @click="logout" >Exit</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>{{ username != null ? username : 'todo' }}</span>
        </el-col>
      <el-drawer :size="150" v-model="drawer" title="I am the title" :with-header="false" :direction="direction">
      <h2>Menu</h2>
      <el-menu>
        <el-menu-item @click="redirect(0)">
          Home
        </el-menu-item>
        <el-menu-item @click="redirect(1)">
          Events
        </el-menu-item>
        <el-menu-item @click="redirect(2)">
          User
        </el-menu-item>
        <el-menu-item @click="redirect(3)">
          Invites
        </el-menu-item>
      </el-menu>
    </el-drawer>
      </el-row>
    </el-header>
</template>
<script lang="ts">
// import api from "@/utils/api";
import { defineComponent,ref} from "vue";
export default defineComponent({
created(){
  this.getUser();
},
  setup(){
    let username:any;
    return{ 
    drawer: ref(false),
    direction: ref('ltr'),
    username
    }
  },
  methods: {
    async getUser() {
      console.log(this.username);
      
    },
    logout(){
      //todo
      localStorage.setItem('token', '');
      localStorage.setItem('user_id', '');
      return this.$router.push('login');
    },
     redirect(key:number) {
      switch (key) {
        case 0:
          return this.$router.push('/');
        case 1:
          return this.$router.push('event');
        case 2:
          return this.$router.push('user');
        case 3:
          return this.$router.push('invite');
        default:
          break;
      }
    }
  }

});
</script>
<style scoped>
.borgar-menu {
  display: none;
  visibility: hidden;
  /* align-items: flex-start; */
}
@media (max-width: 600px) {
  .borgar-menu {
  visibility: visible;
  display: initial;
  /* align-items: flex-start; */
  
}
.borgar-menu :hover{
  color: #ecf5ff
}
}
</style>