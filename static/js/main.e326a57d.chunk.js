(this.webpackJsonpmadam=this.webpackJsonpmadam||[]).push([[0],{20:function(n,e,t){},21:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r,a=t(0),o=t.n(a),i=t(6),c=t.n(i),s=(t(20),t(21),t(7)),d=t(8),h=t(9),l=t(15),u=t(14),f=t(10),w=(t(22),t.p+"static/media/type.268221d2.wav"),m=t(1),p=function(n){Object(l.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).state={word:"",wordArray:[],newWord:"",revWord:""},n.playAudio=function(){new Audio(w).play()},n.handleChange=function(e){n.playAudio();var t=e.target.value;e.target.name;n.setState({});var r=Array.from(n.state.word);r=r.reverse(),console.log(r);var a=r.join(""),o=n.state.word+a;n.setState({word:t,newWord:o,revWord:a})},n}return Object(h.a)(t,[{key:"render",value:function(){return Object(m.jsxs)(g,{children:[Object(m.jsxs)("h1",{children:[this.state.word.length>=1?this.state.word+this.state.revWord:" ",Object(m.jsx)("br",{})]}),Object(m.jsx)("input",{name:"word",type:"text",value:this.state.word,onChange:this.handleChange,autoFocus:!0,placeholder:"find palindrome"}),Object(m.jsx)("div",{className:"wiki",children:Object(m.jsx)("p",{children:"A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar. "})})]})}}]),t}(a.Component),g=f.a.div(r||(r=Object(s.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nheight: 100vh;\ncolor: #495057;\nh1{\n    font-size: 9vw;\n    font-weight: 300;\n    margin-top: -10rem;\n}\n\ninput {\n    font-size: 4em;\n    text-align: center;\n    border: none;\n    border-bottom: 1px solid grey;\n    width: 70vw;;\n    outline: none;\n    text-transform: lowercase;\n    background: #ede0d4;\n    color: \"#343a40\";\n    opacity: 0.7;\n    font-family: 'Bitter', serif;\n    font-weight: 300;\n    height: 6rem;\n    ::placeholder {\n        \n        font-family: 'Bitter', serif;\n        font-size: 4vw;\n        font-weight: 300;\n        color: #6c757d;\n        opacity: 0.5;\n    }\n    \n}\n.wiki {\n        text-align: center;\n        width: 50vw;\n        opacity: 1;\n        height: 20vh;\n        font-weight: 200;\n        p {\n            margin-top: 8rem;\n            font-size: 2vw; \n        }\n    }\n\n"]))),j=p;var v=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(j,{})})},b=function(n){n&&n instanceof Function&&t.e(4).then(t.bind(null,29)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),o(n),i(n)}))};c.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),b()}},[[26,1,2]]]);
//# sourceMappingURL=main.e326a57d.chunk.js.map