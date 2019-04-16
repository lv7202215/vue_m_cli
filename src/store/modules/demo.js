const demo = {
    state: {
       demoId: ''
    },
    mutations: {
        set_demo_id (state ,v) {
            state.demoId = v
        },
    },
    actions: {

    },
    getters: {
        demoId: state => state.demoId,
    }
};
export default demo;
