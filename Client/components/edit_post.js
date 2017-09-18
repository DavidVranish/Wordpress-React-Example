class EditPost extends React.Component {
    render() {
        return (
            <div class="card">
                <img class="card-img-top" src="{ this.props.post.thumbnail.link }" alt="{ this.props.post.thumbnail.alt_text }">
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="post-title-{ this.props.post.ID }">Title</label>
                            <input type="text" 
                                class="form-control" 
                                id="post-title-{ this.props.post.ID }" 
                                placeholder="Post Title"
                                value="{ this.props.post.title }"
                                onChange={(event) => actions.set_post_title(this.props.post.ID, event.target.value)}
                            >
                        </div>
                        <div class="form-group">
                            <label for="post-image-{ this.props.post.ID }">Featured Image</label>
                            <input type="file" 
                                class="form-control" 
                                id="post-image-{ this.props.post.ID }" 
                                placeholder="Featured Image"
                                onChange={(event) => actions.set_post_image(this.props.post.ID, event.target.value)}
                            >
                        </div>
                    </form>   
                </div>             
                <div class="card-footer">
                    <div class="d-flex justify-content-between">
                        <div>
                            <button type="button"
                                class="btn btn-danger"
                                onClick={() => actions.delete_post(this.props.post.ID)}
                            >Delete</button>
                        </div>
                        <div>
                            <button type="button"
                                class="btn btn-primary"
                                onClick={() => actions.save_post(this.props.post.ID)}
                            >Save</button>
                            <button type="button"
                                class="btn btn-secondary"
                                onClick={() => actions.cancel_post(this.props.post.ID)}
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}