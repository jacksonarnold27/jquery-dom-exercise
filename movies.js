let id = 0;
let movies = [];
$(function () {
  $('#movie-input-btn').on('click', function (e) {
    console.log('called!');
    e.preventDefault();
    const title = $('#movie-title-input').val();
    const rating = $('#movie-rating-input').val();
    let newMovie = { title, rating, id };
    id++;
    movies.push(newMovie);
    $('table').append(newMovieHTML(newMovie));
    $('#movie-title-input').val('');
    $('#movie-rating-input').val('');
  });

  $('table').on('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      $(e.target).closest('tr').remove();
    }

  });

});



function newMovieHTML(movie) {
  return `
  <tr>
    <td>${movie.title}</td>
    <td>${movie.rating}</td>
    <td>
      <button type='button' class='del-btn' id='${movie.id}'>x</button>
    </td>
  </tr>
`
}