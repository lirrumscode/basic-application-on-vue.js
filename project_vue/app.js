const app = new Vue({
  el: "#app",
  data: {
    titulo: "TAREAS ",
    tareas: [],
    Nuevatarea: ""
  },
  methods: {
    saveTarea: function() {
      this.tareas.push({
        nombre: this.Nuevatarea,
        estado: false
      });
      console.log(this.tareas);
      this.Nuevatarea = "";
      localStorage.setItem("tareas", JSON.stringify(this.tareas));
    },
    updateTarea: function(index) {
      console.log(index);
      this.tareas[index].estado = true;
      localStorage.setItem("tareas", JSON.stringify(this.tareas));
    },
    deleteTarea: function(index) {
      console.log(index);
      this.tareas.splice(index, 1);
      localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }
  },
  created: function() {
    let Database = JSON.parse(localStorage.getItem("tareas"));
    if (Database == null) {
      this.tareas = [];
    } else {
      this.tareas = Database;
    }
  }
});
