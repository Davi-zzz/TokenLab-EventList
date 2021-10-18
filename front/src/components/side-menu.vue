 <template>
  <el-aside width="80px" class="side-menu">
    <el-menu style="height: 100%">
      <el-col class="aside-menu">
        <el-menu-item class="item-menu">
          <div class="menu-button block">
            <h4 class="label">Events</h4>
          </div>
        </el-menu-item>
        <el-menu-item  class="item-menu">
          <div class="menu-button block">
            <h4 class="label">User</h4>
          </div>
        </el-menu-item >
        <el-menu-item  class="item-menu">
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
export default defineComponent({});
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
  .borgar-menu {
    display: flex;
    align-items: flex-start;
    visibility: visible;
  }
}
</style>