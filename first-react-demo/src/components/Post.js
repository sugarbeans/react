import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {fetchPosts} from '../actions/postAcitons.js'
import {connect} from 'react-redux'
class Post extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    const postItems = this.props.postItems.map((postItem) => {
      return (
        <div key={postItem.id}>
          <h2>{postItem.title}</h2>
          <p>{postItem.body}</p>
        </div>
      )
    })
    return (
      <div>
        {postItems}
      </div>
    )
  }
}
// class PostItems extends Component{
//   render() {
//     return (
//       <div>export default 2个class</div>
//     )
//   }
// }
Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  postItems: PropTypes.array.isRequired
}
const mapStateToProps = store => ({
  postItems: store.posts.items
})
export default connect(mapStateToProps, {fetchPosts})(Post)
