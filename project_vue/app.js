const app = new Vue({
  el: '#app',
  data: {
    title: 'TAREAS',
    tasks: [],
    currentTask: ''
  },
  methods: {
    saveTask() {
      this.tasks.push({
        name: this.currentTask,
        state: false
      });

      this.currentTask = '';
      this.syncTaks();
    },
    updateTask(index) {
      this.tasks[index].estado = true;
      this.syncTaks();
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.syncTaks();
    },
    syncTaks() {
      localStorage.setItem('taks', JSON.stringify(this.tasks));
    }
  },
  created() {
    this.tasks = JSON.parse(localStorage.getItem('taks')) || [];
  }
});
