(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),l=a.n(r),m=(a(15),a(9)),s=a(1),o=a(2),c=a(4),d=a(3),p=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,n=e.imgUrl,r=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:n,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},a,i.a.createElement("br",null),i.a.createElement("a",{href:r},"IMDB"))))});p.defaultProps={description:""};var u=function(e){var t=e.movies;return i.a.createElement("div",{className:"movies"},t.map((function(e){return i.a.createElement(p,Object.assign({key:e.imdbId},e))})))};u.defaultProps={movies:[]};var h=a(7),g=(a(19),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.addEvent=function(t,a){return e.setState(Object(h.a)({},a,t.target.value))},e.movieSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.description,r=t.imdbId,l=t.imdbUrl,m=t.imgUrl;return i.a.createElement("form",{className:"App__form",onSubmit:this.addMovie},i.a.createElement("input",{type:"text",placeholder:"Enter a title",name:"title",className:"App__text",value:a,onChange:function(t){return e.addEvent(t,"title")}}),!a&&i.a.createElement("span",{className:"App__error"},"Pls enter a title"),i.a.createElement("input",{type:"text",rows:"4",placeholder:"Enter a description",name:"description",className:"App__text",value:n,onChange:function(t){return e.addEvent(t,"description")}}),!n&&i.a.createElement("span",{className:"App__error"},"Pls enter a description"),i.a.createElement("input",{type:"text",placeholder:"Enter a imgUrl",className:"App__text",name:"imgUrl",value:m,onChange:function(t){return e.addEvent(t,"imgUrl")}}),!m&&i.a.createElement("span",{className:"App__error"},"Pls enter a imgUrl"),i.a.createElement("input",{type:"text",placeholder:"Enter a imdbUrl",name:"imdbUrl",className:"App__text",value:l,onChange:function(t){return e.addEvent(t,"imdbUrl")}}),!l&&i.a.createElement("span",{className:"App__error"},"Pls enter a imdbUrl"),i.a.createElement("input",{type:"text",placeholder:"Enter a imdbId",name:"imdbId",className:"App__text",value:r,onChange:function(t){return e.addEvent(t,"imdbId")}}),!r&&i.a.createElement("span",{className:"App__error"},"Pls enter a imdbId"),i.a.createElement("button",{type:"button",onClick:this.movieSubmit,className:"App__button"},"Add a new movie"))}}]),a}(n.Component)),v=a(8),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(u,{movies:e})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(g,{onAdd:this.addMovie})))}}]),a}(n.Component);l.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.0c6afe56.chunk.js.map