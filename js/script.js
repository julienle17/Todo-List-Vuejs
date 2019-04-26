new Vue ({
	el: '.app',
	data: {
		newTodo: '',
		todos: []
	},
	methods: {
		addTodo: function() {
				this.todos.push(this.newTodo)
				this.newTodo = ''
		},
		removeTodo: function(index) {
				this.todos.splice(index, 1)
		},
		cancelTodo: function() {
				this.newTodo = ''
		},
		clearAllTodo: function() {
				this.todos = []
		},
	}
})
