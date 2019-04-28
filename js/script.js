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
				completed: false
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
