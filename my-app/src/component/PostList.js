import React, { Component } from 'react';
import PostItem from './PostItem'
import './style.less'

class PostList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [{
          id: 1,
          title: '大家一起去讨论',
          author: '张三',
          date: '2018-01-01',
          vote: 0
        },
        {
          id: 2,
          title: '去讨论',
          author: 'xiaowu',
          date: '2018-08-01',
          vote: 0
        },
        {
          id: 3,
          title: '大家去讨论',
          author: '99',
          date: '2018-05-01',
          vote: 0
        }
      ]
    }
    this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  handleVote(id) {
    const posts = this.state.posts.map(item => {
      const newItem = id === item.id ? { ...item,
        vote: ++item.vote
      } : item
      return newItem
    })

    this.setState({
      posts
    })
  }

  render() {
    return ( <div className="postlist-wrap" >
      帖子列表： < ul className="postlist-item" > {
        this.state.posts.map((item, index) =>
          < PostItem
              key={index}
              onVote={this.handleVote}
              post={item}
          />
        )
      } </ul>
      </div>
    )
  }

}

export default PostList;