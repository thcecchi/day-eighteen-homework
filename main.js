var appPage =

{
  init: function () {
    appPage.initStyle();
    appPage.initEvents();

  },

  initStyle: function () {


  },

  initEvents: function () {
    appPage.getFeed();
    appPage.getVideos();
  },

  config: {

  },

  getFeed: function () {
    $.ajax({
      url: 'https://api.stocktwits.com/api/2/streams/trending.json?',
      type: 'GET',
      dataType: 'JSONP',
      success: function (data) {
        console.log(data);
        dataList = data;
        dataList.messages.forEach(function(item, idx, arr) {
          $('.container').append('<p>' + dataList.messages[idx].body + '</p>');
        });

      },
      error: function (error) {
        console.log(error);
      }
    });
  },

  getVideos: function () {

  }
}

$(document).ready(function() {
  appPage.init();
});
