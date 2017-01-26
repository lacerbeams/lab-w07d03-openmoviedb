const omdb = {
  search: function (title, callback) {
    const url = `http://www.omdbapi.com/?s=${title}`
    $.get(url, function(res) {
        console.log(res);
        callback(res);
      });
  },
  find: function (id, callback) {
    const url = `http://www.omdbapi.com/?i=${id}`
    $.get(url, function(res) {
        console.log(res);
        callback(res);
      });
  }
}


