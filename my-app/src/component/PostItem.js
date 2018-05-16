import React from 'react';
import PropTypes from 'prop-types'
import logo from './../logo.svg';

function PostItem(props){
  const handleClick = ()=> {
    props.onVote(props.post.id)
  }
  const handleClicks = ()=> {
    props.onClicks(props.post.id)
  }
  const {post, current} = props
  return(
    <li className={current === post.id ? 'current' :''}
        onClick={handleClicks}
    >
      <div>
        {post.title}
      </div>
      <div>
        创建人：<span>{post.author}{post.keys}</span>
        <h3>{props.name}</h3>
        <em>{post.test}</em>

      </div>
      <div>
        创建时间：<span>{post.date}</span>
      </div>
      <div>
        <span>
          <img alt="点赞"
              onClick={handleClick}
              src={logo}
          />
        </span>
        &nbsp;
        <span>{post.vote}</span>
      </div>
    </li>
  )

}

// 规定传入值的属性属性
PostItem.propTypes = {
  post: PropTypes.object
}

PostItem.defaultProps = {
  name: '默认姓名',
  post:{
    test: '默认状态'
  }
}

export default PostItem;