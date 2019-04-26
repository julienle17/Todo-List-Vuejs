new Vue ({
	el: '.app',
	data: {
		newTodo: '',
		todos: []
	},
	methods: {
		addTodo: function(todo) {
			this.todos.push(todo)
			this.newTodo = ''
		},
		removeTodo: function() {

		}
	}
})
