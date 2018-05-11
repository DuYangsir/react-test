import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 组件
// import App from './App';
import PostList from './component/PostList'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PostList />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
