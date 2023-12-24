import {Component} from 'react'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
  }

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem commentDetails={eachComment} key={eachComment.id} />
    ))
  }

  render() {
    return (
      <div className="bg-container">
        <div className="comments-container">
          <h1 className="main-heading">Comments</h1>
          <div className="comments-inputs">
            <form className="form">
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
              />
              <textarea
                rows="6"
                placeholder="Your Comment"
                className="comment-input"
              />
              <button type="button" className="button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">0</span>
            Comments
          </p>
          <ul>{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
