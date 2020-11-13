const state = {
    sidebar: {
        open: true,//控制菜单伸缩
    }
}
const mutations = {
    TOGGLE_SIDEBAR: state => {
        
        state.sidebar.open = !state.sidebar.open
        console.log(state.sidebar.open)
    },
    //查询的参数更新
    CHANGE_QUERY: (state,queryData) => {
    },
}
const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    //更新查询的参数
    changeQuery({commit},queryData) {
        commit('CHANGE_QUERY',queryData)
    },
}
export default {
    namespaced: true,//引入时需加上模块名
    state,
    mutations,
    actions
}