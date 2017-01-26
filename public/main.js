console.log('hello from main.js');

const $button = $('button');

$button.on('click', function(evt) {
  var title = $('#query').val();
  console.log(title);
  omdb.search(title, renderList)
});

$('#results').on('click', function(event) {
  // load find
  console.log(event.target.className)
  console.log($('#results').attr('class'));
  omdb.find(event.target.dataset.id, renderDetail);
})

function renderList(movie) {
  var string = '';
  string = '<ul>'
  for (var i = 0; i < movie.Search.length; i++) {
    string += `<li data-id="${movie.Search[i].imdbID}">${movie.Search[i].Title}</li>`;
    $('#results').html(string);
  }
  string += '</ul>'
  console.log(string);
};

function renderDetail(movie){
  var string = '';
  console.log(movie);
  string = `${movie.Title}<br>${movie.Plot}<br><img src="${movie.Poster}">`
  $('#results').html(string);
}
