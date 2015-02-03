var appPage =

{
  init: function () {
    appPage.initStyle();
    appPage.initEvents();
  },

  initStyle: function () {


  },

  initEvents: function () {

    $('.submitButton').click(function() {
      appPage.getFeed();
    });

  },

  // config = {
  //   tickerSymbol = "$('.tickerInput').val()",
  //   dataSource = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3D"+ tickerSymbol +"%26f%3Dsl1d1t1c1ohgv%26e%3D.csv'%20and%20columns%3D'symbol%2Cprice%2Cdate%2Ctime%2Cchange%2Ccol1%2Chigh%2Clow%2Ccol2'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
  // },

  getFeed: function () {
    var tickerSymbol = $('.tickerInput').val();
    dataSource = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3D" + tickerSymbol + "%26f%3Dsl1d1t1c1ohgv%26e%3D.csv'%20and%20columns%3D'symbol%2Cprice%2Cdate%2Ctime%2Cchange%2Ccol1%2Chigh%2Clow%2Ccol2'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

    $.ajax({
      url: dataSource,
      type: 'GET',
      dataType: "JSONP",
      success: function (data) {
        console.log(data);
        dataList = data;

      // Import desired data from json object and store in newDataList
      newDataList = {
        symbol: dataList.query.results.row.symbol,
        price: dataList.query.results.row.price,
        change: dataList.query.results.row.change,
      }

        // TEMPLATES
        var stockInfoCompiled = _.template(templates.stockInfo);
        console.log(stockInfoCompiled(newDataList));
        $(".container").append(stockInfoCompiled(newDataList));

        if (newDataList.change.indexOf('+') == 0) {
          $(".stockCard").css( "background", "green" );
        }

        else if (newDataList.change.indexOf('-') == 0) {
          $(".stockCard").css( "background", "red" );
        }

        else {
          $(".stockCard").css( "background", "gray" );
        }

      },
      error: function (error) {
        console.log(error);
      }
    });

    $('.stockCard').click(function(){
      $('.stockChange').hide();
      $('.stockPrice').show()
    });

    $('.stockCard').click(function(){
      $('.stockChange').show();
      $('.stockPrice').hide()
    });

  }

}

$(document).ready(function() {
  appPage.init();
});
