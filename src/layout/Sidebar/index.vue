<template>
    <div class="silder">
        <logo :collapse="isCollapse"></logo>
        <div class="scroll">
            <el-scrollbar wrap-class="scrollbar-wrapper" heght="100%">
                <el-menu
                    :default-active="activeMenu"
                    class="el-menu-vertical-demo"
                    background-color="#304156"
                    text-color="#bfcbd9"
                    :collapse="isCollapse"
                    mode="vertical">
                    <sidebar-item v-for="route in permissionRoutes" :key="route.path" :item="route" :basePath="route.path"></sidebar-item>
                    
                    
                </el-menu>
            </el-scrollbar>
            
        </div>
    </div>
</template>
<script>
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Sidebar',
    components: {Logo,SidebarItem},
    computed: {
        ...mapGetters([
            'permissionRoutes',
            'sidebar'
        ]),
        //菜单伸缩
        isCollapse() {
            return !this.sidebar.open
        },
        //根据当前路由改变菜单的index，高亮
        activeMenu() {
            const {meta,path} = this.$route
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        }
    },
    created() {
    }
}
</script>
<style lang="scss" scoped>
    .silder {
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.2);
        z-index: 10;
    }
    .scroll{
        height: 100%;
        z-index: 1000;
        background-color: #304156;
    }
    .scrollbar-wrapper {
        overflow-x: hidden !important;
        width: 210px;
    }
    .el-scrollbar__bar.is-vertical {
        right: 0px;
    }
    .el-scrollbar {
        height: 100%;
    }
    .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
        margin-bottom: 80px;
    }
</style>