<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useNetwork } from '@/hook/useNetwork'
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    setup(props) {
        const count = ref(0)
        const networkStatus = reactive({
            text: '有网',
            status: 1
        })
        const add = () => {
            count.value += 1
        }
        const pow = computed(() => count.value * count.value)
        useNetwork({
            onLineFn: () => {
                networkStatus.text = '有网'
                networkStatus.status = 1
            },
            offLineFn: () => {
                networkStatus.text = '断网'
                networkStatus.status = 0
            }
        })
        return {
            count,
            add,
            pow,
            networkStatus
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
