import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import BlogPost from "./container/BlogPost/BlogPost";
//import BlogPostMahasiswa from "./container/BlogPost/BlogPostMahasiswa";
//import Post from './component/BlogPost/Post';

ReactDOM.render(<BlogPost />, document.getElementById('content'));
//ReactDOM.render(<BlogPostMahasiswa />, document.getElementById('content'));
//ReactDOM.render(<Post />, document.getElementById('root'));

// const HelloComponent = () =>{
//   return HelloComponent
//   //ReactDOM.render(<HelloComponent />, document.getElementById('root'));
// }

// class StateFullComponent  extends React.Component{
//   render(){
//     return<p>StateFullComponent</p>
//   }
// }

//ReactDOM.render(<App />,document.getElementById('root'));
//ReactDOM.render(<Hello />,document.getElementById('root'));
//ReactDOM.render(<StateFullComponent />, document.getElementById('root'));
//ReactDOM.render(<Test />, document.getElementById('root'));
//ReactDOM.render(<HelloComponent />, document.getElementById('root'));
//ReactDOM.render(<Login />, document.getElementById('root'));
//ReactDOM.render(<Register />, document.getElementById('root'));

// ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
