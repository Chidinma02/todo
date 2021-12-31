Vue.createApp({
  data() {
    return {
      isEditing:false,
      todos: ['go to the market','cook','sweep'],
      todo: '',
      selectedIndex:null
    };
  },
  methods: {
    storeTodo() {
       this.todos.push(this.todo);
       this.todo=' '
    },
    editTodo(index,todo){
       this.todo=todo
       this.selectedIndex=index
       this.isEditing=true
    },
    updateTodo(){
      this.todos.splice(this.selectedIndex,1,this.todo)
      this.isEditing = false
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    }
  }
}).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);