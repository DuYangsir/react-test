import React,{ Component } from "react";
import PostItem from "./PostItem"

const data = [
  {title:"大家一起去讨论",author:"张三",date:"2018-01-01"},
  {title:"去讨论",author:"xiaowu",date:"2018-08-01"},
  {title:"大家去讨论",author:"99",date:"2018-05-01"}  
]

const element = (
  <div>
    帖子列表：
    <ul>
      {data.map(item =>
        <PostItem 
          title = {item.title}
          author = {item.author}
          date = {item.date}
        />
      )}
    </ul>
  </div>
)

class PostList extends Component {
  render(){
    return element
  }
}

export default PostList;