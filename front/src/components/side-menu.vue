 <template>
  <el-aside width="80px" class="side-menu">
    <el-menu style="height: 100%">
      <el-col class="aside-menu">
        <el-menu-item  @click="redirect(1)" class="item-menu">
          <div class="menu-button block">
            <h4 class="label">Events</h4>
          </div>
        </el-menu-item>
        <el-menu-item   @click="redirect(2)" class="item-menu">
          <div class="menu-button block">
            <h4 class="label">User</h4>
          </div>
        </el-menu-item >
        <el-menu-item   @click="redirect(3)" class="item-menu">
          <div class="menu-button block">
            <h4 class="label">Invites</h4>
          </div>
        </el-menu-item>
      </el-col>
    </el-menu>
  </el-aside>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    redirect(key:number) {
      switch (key) {
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
}
.side-menu {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.aside-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-top: 25vh;
  padding-bottom: 45vh;
   background: #b3c0d1;
}
.el-aside {
  color: var(--el-text-color-primary);
}
.label{
  font-size: 13px;
  text-align: center;
  text-decoration: underline black solid 3px;
}
.item-menu{
  display: flex; justify-content: space-between;
  width: 100%
}
@media (max-width: 600px) {
  .el-aside {
    display: none;
  }
  .aside-menu {
    display: none;
  }
  .side-menu{
    display:none;
  }
  .borgar-menu {
    display: flex;
    align-items: flex-start;
    visibility: visible;
  }
}
</style>