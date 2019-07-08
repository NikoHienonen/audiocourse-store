(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),c=a.n(s),o=(a(28),a(1)),i=a(11),l=function(){return r.a.createElement("header",null,r.a.createElement("i",{className:"fas fa-headphones"}))},u=a(3),m=a(4),d=a(6),g=a(5),p=a(7),h=function(e){return"Recording"===e?r.a.createElement("i",{className:"fas fa-microphone"}):"Mixing"===e?r.a.createElement("i",{className:"fas fa-headphones"}):"Mastering"===e?r.a.createElement("i",{className:"fas fa-volume-up"}):"Studio"===e?r.a.createElement("i",{className:"fas fa-border-all"}):"misc"===e?r.a.createElement("i",{className:"fas fa-question-circle"}):void 0},f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={courses:[],userCourses:[],noCourses:!1},a.getUserCourses=function(){a.props.getUserCourses(function(e){e?a.setState({userCourses:e}):a.setState({noCourses:!0})})},a.getCourses=function(){a.props.getCourses(function(e){a.setState({courses:e})})},a.onSignUp=function(e){a.props.signUpForACourse(e,function(e){a.setState({userCourses:e})})},a.signedRender=function(e){if(!a.state.noCourses)return a.state.userCourses.includes(e)?r.a.createElement("div",{className:"sign-up"},"Signed Up!"):null},a.span=function(e){return 1===e?"month":"months"},a.renderCourses=function(){return a.state.courses.map(function(e){var t=e.id,n=e.name,s=e.category,c=e.span,i=e.teacher;return r.a.createElement("div",{className:"course-card",key:t},a.signedRender(t),r.a.createElement("div",{className:"card-head"},h(s),r.a.createElement("h3",null,n)),r.a.createElement("div",{className:"card-intro"},r.a.createElement("p",null,"Category: ",s),r.a.createElement("p",null,"Teacher: ",i),r.a.createElement("p",null,"Span: ",c," ",a.span(c))),r.a.createElement(o.b,{name:"Search",className:"navbutton",to:"/course/"+t},"Read more!"))})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getUserCourses(),this.getCourses()}},{key:"render",value:function(){return r.a.createElement("div",{className:"courses"},this.renderCourses())}}]),t}(n.Component),E=r.a.createContext(),C=E.Consumer,v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={courses:[{id:4324,name:"Drum Mics",category:"Recording",span:1,teacher:"Andy Mattson",tags:["recording","drums","mattson"]},{id:4624,name:"Substractive EQ",category:"Mixing",span:1,teacher:"Madison Hill",tags:["mixing","eq","hill"]},{id:5323,name:"Guitar re-amp",category:"Recording",span:1,teacher:"David Lowe",tags:["recording","guitar","lowe"]},{id:2352,name:"What is Mastering?",category:"Mastering",span:1,teacher:"Nick Finen",tags:["mastering","mastering","finen"]},{id:7646,name:"Echo effects",category:"Mixing",span:2,teacher:"Donald Kingdon",tags:["mixing","echo","kingdon"]},{id:9305,name:"Metal Compression",category:"Mixing",span:1,teacher:"Sander Taylor",tags:["mixing","compression","taylor"]},{id:6345,name:"Room Mics",category:"Recording",span:2,teacher:"Nick Finen",tags:["recording","room","finen"]},{id:1005,name:"Starting with MIDI",category:"Mixing",span:1,teacher:"Hannah Tap",tags:["mixing","midi","tap"]},{id:3334,name:"Studio Coziness",category:"Studio",span:2,teacher:"Mark Pine",tags:["studio","cozy","pine"]},{id:6255,name:"Loudness Wars",category:"Mastering",span:1,teacher:"Christina Lyone",tags:["mastering","loudness","lyone"]},{id:5455,name:"DAW Selection",category:"Misc",span:1,teacher:"Mark Pine",tags:["misc","daw","pine"]},{id:4666,name:"Vocal Recording",category:"Recording",span:2,teacher:"Andy Mattson",tags:["recording","vocals","mattson"]},{id:6549,name:"Stereo Image",category:"Mixing",span:1,teacher:"Maximillian Dolt",tags:["mixing","stereo","Dolt"]},{id:1112,name:"Mixing Metal Guitars",category:"Mixing",span:2,teacher:"Sander Taylor",tags:["mixing","guitars","metal","taylor"]},{id:5311,name:"Choir Recording",category:"Recording",span:2,teacher:"Andy Mattson",tags:["recording","choir","mattson"]},{id:4242,name:"Basics of Recording",category:"Recording",span:3,teacher:"Andy Mattson",tags:["recording","basics","mattson"]},{id:6454,name:"Top-Down Mixing",category:"Mixing",span:1,teacher:"Nick Finen",tags:["ty\xf6hyvinvointi","finen"]}]},a.checkIfFirstSignIn=function(){var e=sessionStorage.getItem("courseStoreVisited");"true"===e&&e||(sessionStorage.setItem("courseStoreVisited","true"),sessionStorage.setItem("courseStoreUserCourses",""))},a.getCourses=function(e){e(a.state.courses)},a.setStringToNumArray=function(e){if(e){var t=e.split(",");return t=t.map(function(e){return Number(e)})}return[]},a.getUserCourses=function(e){var t=sessionStorage.getItem("courseStoreUserCourses");t?e(a.setStringToNumArray(t)):e(null)},a.getCourseByID=function(e,t){t(a.state.courses.find(function(t){return t.id===Number(e)}))},a.signUpForACourse=function(e,t){var n=sessionStorage.getItem("courseStoreUserCourses"),r=a.setStringToNumArray(n);if(!r.includes(e)){r.push(e);var s=r.toString();sessionStorage.setItem("courseStoreUserCourses",s),t(s)}},a.cancelSignUp=function(e,t){var n=sessionStorage.getItem("courseStoreUserCourses"),r=a.setStringToNumArray(n).filter(function(t){return t!==e});sessionStorage.setItem("courseStoreUserCourses",r),t(r)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.checkIfFirstSignIn()}},{key:"render",value:function(){return r.a.createElement(E.Provider,{value:{getCourses:this.getCourses,getUserCourses:this.getUserCourses,getCourseByID:this.getCourseByID,signUpForACourse:this.signUpForACourse,cancelSignUp:this.cancelSignUp}},this.props.children)}}]),t}(r.a.Component),y=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Courses"),r.a.createElement(C,null,function(e){return r.a.createElement(f,{getCourses:e.getCourses,getUserCourses:e.getUserCourses,signUpForACourse:e.signUpForACourse})}))},b=function(){return r.a.createElement(y,null)},N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){a.setState({searchValue:e.target.value})},a.state={searchValue:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu-item"},r.a.createElement("input",{className:"unclickable",type:"text",onChange:this.handleChange,placeholder:"Hae kursseja..."}),r.a.createElement(o.b,{name:"Search",className:"navbutton",to:"/search/".concat(this.state.searchValue),disabled:!this.state.searchValue||""===this.state.searchValue},r.a.createElement("i",{className:"fas fa-search"})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e){"unclickable"!==e.target.className&&(!0===document.querySelector(".toggler").checked&&(document.querySelector(".toggler").checked=!1))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu-wrap"},r.a.createElement("input",{type:"checkbox",className:"toggler"}),r.a.createElement("div",{className:"hamburger"},r.a.createElement("div",null)),r.a.createElement("div",{className:"menu"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("ul",{onClick:this.onClick},r.a.createElement("li",null,r.a.createElement(N,null)),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/home",className:"menu-item"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile",className:"menu-item"},"My Profile")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/contact",className:"menu-item"},"Contact")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"about",className:"menu-item"}),"About"))))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={course:"",userCourses:[]},a.getCourses=function(e){e=Number(e),a.props.getCourseByID(e,function(e){a.setState({course:e})}),a.props.getUserCourses(function(e){a.setState({userCourses:e})})},a.renderTags=function(e){if(e)return e.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(o.b,{to:"/search/"+e},e))})},a.alreadySignedUpUpper=function(e){if(a.state.userCourses)return a.state.userCourses.includes(e)?r.a.createElement("div",{className:"sign-up"},"Signed Up!"):null},a.alreadySignedUpLower=function(e){return a.state.userCourses&&a.state.userCourses.includes(e)?r.a.createElement("p",{className:"sign-up detail"},"Signed Up!"):r.a.createElement("button",{className:"navbutton detail",onClick:function(){a.onSignUp(e)}},"Sign up")},a.onSignUp=function(e){a.props.signUpForACourse(e,function(e){a.setState({userCourses:e})})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getCourses(this.props.id)}},{key:"render",value:function(){var e=this.state.course,t=e.id,a=e.name,n=e.category,s=e.teacher,c=e.span,o=e.tags;return r.a.createElement(r.a.Fragment,null,this.alreadySignedUpUpper(t),r.a.createElement("div",{className:"card-head"},h(n),r.a.createElement("h2",null,a)),r.a.createElement("div",{className:"card-intro"},r.a.createElement("p",null,"Category: ",n),r.a.createElement("p",null,"Teacher: ",s),r.a.createElement("p",null,"Span: ",c)),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipiscing elit non curabitur, tellus fringilla nisi aliquam est in dui et, velit praesent porta ante taciti integer primis imperdiet. Nullam maecenas sagittis tempus sociosqu mi varius diam sociis ac, hac ut tellus magna curabitur aenean aliquam molestie laoreet, leo congue ridiculus dapibus duis aptent risus nec. Bibendum montes accumsan est netus primis vestibulum dignissim blandit leo sodales ad, in lacus tempor libero nostra diam luctus sociosqu aptent."),r.a.createElement("p",null,"Ligula congue mattis donec magna feugiat eu gravida mollis ac lectus, netus risus nascetur nec eget arcu sociis vel egestas posuere nam, mauris facilisi praesent eros leo urna mi per cubilia. Integer vel metus sed nulla purus luctus accumsan odio molestie congue, ut lacinia dapibus imperdiet aenean leo tortor porttitor bibendum, duis quisque natoque sociosqu torquent ornare enim senectus venenatis. Laoreet himenaeos fames nulla urna interdum sociosqu ad tellus auctor, inceptos ante torquent consequat commodo nullam nostra."),r.a.createElement("ul",{className:"tags"},r.a.createElement("li",null,"Tags: "),this.renderTags(o)),this.alreadySignedUpLower(t))}}]),t}(n.Component),U=function(e){return r.a.createElement(C,null,function(t){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"course-detail"},r.a.createElement(k,{getCourseByID:t.getCourseByID,id:e.match.params.id,signUpForACourse:t.signUpForACourse,getUserCourses:t.getUserCourses}),r.a.createElement("div",{className:"course-nav"},r.a.createElement(o.b,{to:"/home",className:"button"},"Back"),r.a.createElement(o.b,{to:"/profile"},"My Profile"),r.a.createElement("p",null,r.a.createElement("i",{class:"fas fa-info-circle"}),'You can control your course choices from the "My profile"-page!'))))})},w=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"generic-container"},r.a.createElement("h1",null,"Contact Us!"),r.a.createElement("div",{className:"contacts"},r.a.createElement("div",{className:"contact-card"},r.a.createElement("h3",null,"Email"),r.a.createElement("span",null,"info@audi-courses.com")),r.a.createElement("div",{className:"contact-card"},r.a.createElement("h3",null,"Phone"),r.a.createElement("span",null,"+358 50 464 4403")),r.a.createElement("div",{className:"contact-card"},r.a.createElement("h3",null,"Location"),r.a.createElement("span",null,"33200 Tampere, FI")))))},j=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"generic-container"},r.a.createElement("h1",null,"About"),r.a.createElement("div",{className:"contact-card"},r.a.createElement("p",null,'This is a placeholder app which I created from a "secret" app I was asked to make for a client, and since I was quite happy with the result I wanted to make a "generic" version of it with dummy data and different theme so that I can showcase it in my github.')),r.a.createElement("div",{className:"contact-card"},r.a.createElement("i",{className:"fab fa-github"})," https://github.com/NikoHienonen")))},M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={myCourses:[]},a.setCourses=function(){a.props.getUserCourses(function(e){a.props.getCourses(function(t){if(t&&e){var n=t.filter(function(t){return e.includes(t.id)});a.setState({myCourses:n})}else a.setState({myCourses:[]})})})},a.cancelSignUp=function(e){a.props.cancelSignUp(e,function(e){a.setCourses()})},a.renderCourses=function(){return 0===a.state.myCourses.length?r.a.createElement("p",null,"You have not signed up to courses yet!"):a.state.myCourses.map(function(e){var t=e.id,n=e.name,s=e.category,c=e.span,o=e.teacher;return r.a.createElement("div",{className:"course-card",key:t},r.a.createElement("div",{className:"card-head"},r.a.createElement("h2",null,n)),r.a.createElement("div",{className:"card-intro"},r.a.createElement("p",null,"Category: ",s),r.a.createElement("p",null,"Teacher: ",o),r.a.createElement("p",null,"Span: ",c)),r.a.createElement("button",{className:"navbutton",onClick:function(){a.cancelSignUp(e.id)}},"Cancel"))})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setCourses()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Profile"),r.a.createElement("img",{className:"profile-pic",alt:"profile",src:"/user.png"}),r.a.createElement("div",{className:"introduction"},r.a.createElement("p",null,"Name: John Holloway"),r.a.createElement("p",null,"Occupation: Audio Producer"),r.a.createElement("p",null,"Courses done: 2")),r.a.createElement("h2",null,"My Courses"),r.a.createElement("div",{className:"courses"},r.a.createElement(this.renderCourses,null)))}}]),t}(n.Component),O=function(e){return r.a.createElement(C,null,function(e){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"profile generic-container"},r.a.createElement(M,{getUserCourses:e.getUserCourses,getCourses:e.getCourses,cancelSignUp:e.cancelSignUp}),r.a.createElement(o.b,{to:"/home",className:"button"},"Back")))})},x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={searchCourses:[]},a.checkTheCourses=function(e){var t=a.props.parameter.toLowerCase(),n=e.filter(function(e){return e.tags.includes(t)});a.setState({searchCourses:n})},a.renderCourses=function(){return 0===a.state.searchCourses.length?r.a.createElement("p",null,"No courses with the query!"):a.state.searchCourses.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:"/course/"+e.id},e.name))})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getCourses(function(t){e.checkTheCourses(t)})}},{key:"render",value:function(){return r.a.createElement("ul",{className:"search"},this.renderCourses())}}]),t}(n.Component),I=function(e){return r.a.createElement(C,null,function(t){var a=e.match.params.parameter;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"search-field generic-container"},r.a.createElement("h1",null,"Course Search"),r.a.createElement("h3",null,'Results with the parameter: "',a,'"'),r.a.createElement(x,{getCourses:t.getCourses,parameter:a}),r.a.createElement(o.b,{to:"/home",className:"button"},"Back")))})},A=function(e){var t=e.location;return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"404"),r.a.createElement("h3",null,r.a.createElement("code",null,t.pathname)," was not found"))};var D=function(){return r.a.createElement(v,null,r.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)}},r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"overlay"}),r.a.createElement("img",{src:"background.jpg",className:"background",alt:"backgroundimg"}),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:b}),r.a.createElement(i.a,{exact:!0,path:"/home",component:b}),r.a.createElement(i.a,{exact:!0,path:"/course/:id",component:U}),r.a.createElement(i.a,{exact:!0,path:"/profile",component:O}),r.a.createElement(i.a,{exact:!0,path:"/contact",component:w}),r.a.createElement(i.a,{exact:!0,path:"/about",component:j}),r.a.createElement(i.a,{exact:!0,path:"/search/:parameter",component:I}),r.a.createElement(i.a,{exact:!0,path:"/notfound",component:A}),r.a.createElement(i.a,{component:A}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.f0cb259d.chunk.js.map