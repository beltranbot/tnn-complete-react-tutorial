// to use lifecycle hoooks
// a component needs to be a class component
import React, {Component} from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux'

class Home extends Component {

    render () {
      console.log(this.props.posts)
      const {posts} = this.props

      const postList = posts.length ? (
        posts.map(post => {
          return (
            <div className="post card" key={post.id}>
              <div className="card-content">
                <img src={Pokeball} alt="pokeball"/>
                <Link to={`/post/${post.id}`}>
                    <span className="card-title red-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
          )
        })

      ) : (
        <div className="center">No Posts Yet</div>
      )
      return (
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)