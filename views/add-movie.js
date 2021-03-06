
Utils.ready();

var addMovie = document.getElementById('submit');
addMovie.addEventListener('click',function(){
    var title = document.getElementsByName('title')[0].value;
    var year = document.getElementsByName('year')[0].value;
    var poster = document.getElementsByName('poster')[0].value;
    var rated = document.getElementsByName('rated')[0].value;
    var released = document.getElementsByName('released')[0].value;
    var runtime = document.getElementsByName('runtime')[0].value;
    var genre = document.getElementsByName('genre')[0].value;
    var directors = document.getElementsByName('directors')[0].value;
    var writers = document.getElementsByName('writers')[0].value;
    var actors = document.getElementsByName('actors')[0].value;
    var plot = document.getElementsByName('plot')[0].value;
    var language = document.getElementsByName('language')[0].value;
    var country = document.getElementsByName('country')[0].value;
    var awards = document.getElementsByName('awards')[0].value;
    var type = document.getElementsByName('type')[0].value;
    var production = document.getElementsByName('production')[0].value;

    var movie = new Movie();
    movie.title = title;
    movie.year = year;
    movie.poster = poster;
    movie.rated= rated;
    movie.released= released;
    movie.runtime= runtime;
    movie.genre= genre;
    movie.director= directors;
    movie.writer= writers;
    movie.actors= actors;
    movie.plot= plot;
    movie.language= language;
    movie.country= country;
    movie.awards= awards;
    movie.type= type;
    movie.production= production;
    movie.addMovie();
});