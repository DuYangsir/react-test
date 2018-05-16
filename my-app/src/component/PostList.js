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
      ],
      current: null
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  handleVote(id) {
    // let event = Event || window.event
    const posts = this.state.posts.map(item => {
      const newItem = id === item.id ? { ...item,
        vote: ++item.vote
      } : item
      return newItem
    })

    // event.stopPropagation()

    this.setState({
      posts
    })

  }
  handleClick(item){
    this.setState({
      current: item
    })
  }

  render() {
    return ( <div className="postlist-wrap" >
      帖子列表： < ul className="postlist-item" > {
        this.state.posts.map((item) =>
          < PostItem
              current={this.state.current}
              key={item.id}
              onClicks={this.handleClick.bind(this, item.id)}
              onVote={this.handleVote.bind(this)}
              post={item}

          />
        )
      } </ul>
      </div>
    )
  }

}

export default PostList;