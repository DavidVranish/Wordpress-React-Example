const todos = (state = [], action) => {
  	switch (action.type) {
    case 'set_posts':
      return action.posts;
    case 'set_post_title':
      return state.map(post =>
        (post.ID === action.a_post_id) 
          ? {...post, title: action.a_title}
          : post
      )
    case 'edit_post':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'save_post':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'cancel_post':
      	return state.map(todo =>
        	(todo.id === action.id) 
          	? {...todo, completed: !todo.completed}
          	: todo
      	)
    case 'delete_post':
      	return state.map(todo =>
        	(todo.id === action.id) 
          	? {...todo, completed: !todo.completed}
          	: todo
      	)
    case 'set_loading':
      	return state.map(todo =>
        	(todo.id === action.id) 
          	? {...todo, completed: !todo.completed}
          	: todo
      	)
    default:
     	return state
  	}
}

export default todos

/**
 * @param {[type]}
 */
set_posts (a_posts) {
	//Set state.posts = a_posts;
}
set_post_title (a_post_id, a_title) {
	
}
set_post_image
edit_post
save_post
cancel_post
delete_post
set_loading