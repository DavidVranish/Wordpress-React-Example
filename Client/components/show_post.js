class ShowPost extends React.Component {
    render() {
        return (
            <div class="card">
                <img class="card-img-top" src="{ this.props.post.thumbnail.link }" alt="{ this.props.post.thumbnail.alt_text }">
                <div class="card-body">
                    <h4 class="card-title">{ this.props.post.title }</h4>
                </div>
                
                <div class="card-footer">
                    <button type="button"
                        class="btn btn-primary"
                        onClick={() => actions.edit_post(this.props.post.ID)}
                    >Edit</button>
                </div>
            </div>
        );
    }
}