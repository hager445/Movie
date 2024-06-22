
 let searchInput = document.querySelector(".search-input")
 
 let btn = document.querySelector(".button-search")
 
 console.log(searchInput);



 btn.addEventListener("click" , test)
    
    // /==============================================





     function test (){
        let searchInputV = searchInput.value;

        let request = new XMLHttpRequest()
        request.open('GET' , `http://www.omdbapi.com/?t=${searchInputV}&apikey=43aa64c6`) ;
        request.send()
        request.onload = function () {
           let movies = request.responseText ;
       let movie = JSON.parse(movies)
       console.log(movie.Title);
       if (movie.Title.toUpperCase().includes(searchInput.value.toUpperCase())) {
           console.log(movie.Title);
           let movieTitle = document.querySelector(".movie-title");
           movieTitle.innerText = movie.Title;
           let movieRate = document.querySelector(".movie-rate span");
           movieRate.innerText = " " + movie.imdbRating;
           let rated = document.querySelector(".pg");
           rated.innerText =  movie.Rated;
           let year = document.querySelector(".year");
           year.innerText =  movie.Year;
           let runTime = document.querySelector(".time");
           runTime.innerText =  movie.Runtime;
           let ar = movie.Genre.split(",");
           let gerneArr = Array.from(ar);
            console.log(gerneArr);
               let cat1 = document.querySelector(".cat-1");
               cat1.innerText =   gerneArr[0];
               let cat2 = document.querySelector(".cat-2");
               cat2.innerText =   gerneArr[1];
               let cat3 = document.querySelector(".cat-3");
               cat3.innerText =  gerneArr[2];
               let img = document.querySelector(".poster-img");
               img.src = movie.Poster
               console.log(img);
        
               let plot = document.querySelectorAll(".plot p")[1];
               plot.innerText = movie.Plot ; 
             

               let actors = document.querySelectorAll(".cast p")[1];
               actors.innerText = movie.Actors
        
       }




        } }
        test ();