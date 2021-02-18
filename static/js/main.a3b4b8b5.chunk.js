(this["webpackJsonpsoapbox-giphy"]=this["webpackJsonpsoapbox-giphy"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/mainImage.fb94054c.png"},24:function(e,t,a){e.exports=a(73)},29:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),s=a.n(i),l=(a(29),a(3)),o=a(4),c=a(6),u=a(5),m=a(18),p=a.n(m),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"wrapper"},r.a.createElement("div",{className:"homepageContainer"},r.a.createElement("div",{className:"mainImageContainer"},r.a.createElement("img",{className:"mainImage",src:p.a,alt:"Logo"})),r.a.createElement("div",{className:"mainDescription"},r.a.createElement("h1",null,"giphy"),r.a.createElement("h2",null,"Stay up to date to with trending Gif's."),r.a.createElement("span",null,r.a.createElement("p",null,"This project started as a 2 hour hackathon project, decided to revisit is and add some more features. Adding reacts hooks and firestore next! ")),r.a.createElement("span",null,r.a.createElement("p",null,"The core functionality is to search for a term and return gifs based on your request. adding a trending section next.")))))}}]),a}(n.Component),d=a(7),g=a.n(d),f=a(19),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={userSearch:""},n}return Object(o.a)(a,[{key:"handleSearchBarChange",value:function(e){this.setState({userSearch:e}),this.props.onChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flexContent"},r.a.createElement("h2",{className:"searchHeader"},"Enter a keyword to return your results"),r.a.createElement("h3",{className:"searchHeader"},"Hover over the gifs for more information!"),r.a.createElement("div",{className:"flexContent searchBar"},r.a.createElement("input",{className:"inputClass",type:"text",placeholder:"Enter your serach...",value:this.state.userSearch,onChange:function(t){return e.handleSearchBarChange(t.target.value)}})))}}]),a}(r.a.Component),E=a(20),v=a.n(E),C=a(21),b=a.n(C),j=a(23),k=a(22),N=a.n(k),w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).apiCallToGiphy=function(){var t=Object(f.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()({method:"GET",dataResponse:"json",url:"https://api.giphy.com/v1/gifs/search?q=".concat(a,"&api_key=").concat("P4hCy0QXgCWhBkBv1WS8E4upKd540JNg"),params:{limit:18,offset:0}}).then((function(t){e.setState({giphyMainArray:t.data.data,loading:!1})})).catch((function(e){return console.log("An Error Has Occurred!"),Promise.reject(e)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={giphyMainArray:[],loading:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.apiCallToGiphy("computer")}},{key:"render",value:function(){var e=this;console.log(this.state.giphysMainArray);var t=b.a.debounce((function(t){e.apiCallToGiphy(t)}),200);return this.state.loading?r.a.createElement("div",{className:"loadScreen"},r.a.createElement(N.a,{type:"Puff",color:"#62d3dd",height:100,width:100,timeout:5e3})):r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onChange:function(e){return t(e)}}),r.a.createElement("main",{className:"flexContent"},this.state.giphyMainArray.map((function(e){return r.a.createElement("div",null,r.a.createElement(j.a.div,{whileHover:{scale:1.1},whileTap:{scale:.95,x:"-5px",y:"5px"}},r.a.createElement("li",{div:!0,key:e.id,className:"giphyListItem"},r.a.createElement("div",{className:"giphyImageContainer"},r.a.createElement("img",{src:e.images.fixed_height.url,height:"265",width:"265",alt:e.title}),r.a.createElement("h4",null,e.title),r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("h4",null,"Click Me!"))))))}))))}}]),a}(n.Component),O=(a(72),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).displayHomepageComponent=function(){e.setState({displayHomepage:!0,displayResults:!1,loading:!1})},e.displayResultsComponent=function(){e.setState({displayHomepage:!1,displayResults:!0,loading:!1})},e.state={displayHomepage:!0,displayResults:!1,loading:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"flexContent buttonContainer"},r.a.createElement("button",{className:"inputClass",onClick:this.displayHomepageComponent},"\u2190 giphy \u2192"),r.a.createElement("button",{className:"inputClass",onClick:this.displayResultsComponent},"Launch App \u2192")))),r.a.createElement("main",null,this.state.displayHomepage?r.a.createElement(h,{homepageProps:this.displayHomepage}):null,this.state.displayResults?r.a.createElement(w,{resultsProps:this.state.displayResults}):null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a3b4b8b5.chunk.js.map