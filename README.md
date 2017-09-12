# Wordpress-React-Example


Wordpress API functions:
// Get 7 most recent wordpress posts
// Returns [Post]
get_latest_posts()


//Update a post title and image
//Returns Post
patch_post_title($a_post_id, $a_title, $a_image)


// Deletes Post and returns the new 7 most recent posts
// Returns [Post]
delete_post($a_post_id)

//Adds a page to the admin menu
add_to_admin_menu()


React Components
//Functional Components
post_list(posts, loading)
show_post(post)
//calls edit_post
edit_post(post)
//calls save_post
//calls cancel_post

title(post_id, text)
//calls set_post_title
//returns text
//End functional Components

upload_image(post_id)
//calls set_post_image
delete(post_id)
//calls delete_post

fade post out on delete

Redux state:
loading Boolean
posts Array(Post)
editing_posts Array(Post)








set_posts(a_posts) {
	//Set state.posts = a_posts;
}
set_post_title(a_post_id, a_title) {
	
}
set_post_image
edit_post
save_post
cancel_post
delete_post
set_loading
