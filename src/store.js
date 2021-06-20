import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            tasks: JSON.parse(localStorage.getItem('my-tasks')) ?? []
        }
    },
    mutations: {
        createTask(state, task) {
            state.tasks.push(task)
            localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
        }
    },
    actions: {
        createTask({commit}, task) {
            if (task.date < new Date()) {
              task.status = 'cancelled'
            }
            commit('createTask', task)
          }
    }
})