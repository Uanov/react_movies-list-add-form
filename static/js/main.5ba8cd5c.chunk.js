(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(9),m=a.n(n),o=(a(16),a(7)),l=a(3),s=a(4),c=a(6),d=a(5),p=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:n},"IMDB"))))});p.defaultProps={description:""};var v=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(p,Object.assign({key:e.imdbId},e))})))};v.defaultProps={movies:[]};var h=a(1),u=(a(20),a(2)),g=a.n(u),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",imgUrlError:!1,imdbUrlError:!1},e.addMovieToState=function(t){var a,i,r,n,m=t.target,o=m.name,l=m.value,s="imgUrl"===o;"imgUrl"===o||"imdbUrl"===o?/^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i.test(l)?s?e.setState((a={},Object(h.a)(a,o,l),Object(h.a)(a,"imgUrlError",!1),a)):e.setState((i={},Object(h.a)(i,o,l),Object(h.a)(i,"imdbUrlError",!1),i)):s?e.setState((r={},Object(h.a)(r,o,l),Object(h.a)(r,"imgUrlError",!0),r)):e.setState((n={},Object(h.a)(n,o,l),Object(h.a)(n,"imdbUrlError",!0),n)):e.setState(Object(h.a)({},o,l))},e.addNewMovieOnPage=function(t){t.preventDefault();var a=e.state,i={title:a.title,description:a.description,imdbId:a.imdbId,imdbUrl:a.imdbUrl,imgUrl:a.imgUrl};e.props.addMovie(i),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imdbId,n=e.imdbUrl,m=e.imgUrl,o=e.imdbUrlError,l=e.imgUrlError;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"add-movie-heading"},"Add movie"),r.a.createElement("form",{className:"movie-form",onSubmit:this.addNewMovieOnPage},r.a.createElement("input",{type:"text",name:"title",value:t,className:"movie-form__input",onChange:this.addMovieToState,placeholder:"Movie title",required:!0}),r.a.createElement("input",{type:"text",name:"imgUrl",className:g()("movie-form__input",{"movie-form__input--error":l}),onChange:this.addMovieToState,placeholder:"Enter the Image URL",value:m,required:!0}),r.a.createElement("span",{className:g()("error-message",{"error-message--active":l})},"Please enter a valid images URL!"),r.a.createElement("input",{type:"text",name:"imdbUrl",className:g()("movie-form__input",{"movie-form__input--error":o}),onChange:this.addMovieToState,placeholder:"Enter the imdbUrl",value:n,required:!0}),r.a.createElement("span",{className:g()("error-message",{"error-message--active":o})},"Please enter a valid imdb URL!"),r.a.createElement("input",{type:"text",name:"imdbId",className:"movie-form__input",onChange:this.addMovieToState,placeholder:"Enter the imdbId movie",value:i,required:!0}),r.a.createElement("textarea",{name:"description",id:"movie-description",className:"movie-form__input",placeholder:"Movie Description",cols:"10",rows:"10",onChange:this.addMovieToState,value:a}),r.a.createElement("button",{type:"submit",className:"movie-form__button",disabled:l||o},"Add movie")))}}]),a}(i.Component),f=a(10),M=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={movies:Object(o.a)(f)},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(o.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(v,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(b,{addMovie:this.addMovie})))}}]),a}(i.Component);m.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.5ba8cd5c.chunk.js.map