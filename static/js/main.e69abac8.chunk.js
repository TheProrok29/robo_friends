(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(13),a(1)),i=a(2),s=a(4),h=a(3),u=a(5),m=function(e){var t=e.id,a=e.name,n=e.email,o=e.randomAvatar;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t).concat(o,"?200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots,a=e.randomNumber;return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email,randomAvatar:a})}))))},b=function(e){e.searchField;var t=e.searchChange;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid rgb(68, 255, 201)",height:"800px"}},e.children)},g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good!"):this.props.children}}]),t}(n.Component),v=(a(14),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=Math.floor(Math.random()*(t-e+1))+e;return a}),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:"",randomNumber:v()},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,o=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange})),r.a.createElement("main",{className:"tc"},r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement(d,{robots:o,randomNumber:this.state.randomNumber}))))):r.a.createElement("h1",null,"Loading...")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.e69abac8.chunk.js.map