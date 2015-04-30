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

  getFeed: function () {
    var tickerSymbol = $('.tickerInput').val();
    // dataSource = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3D" + tickerSymbol + "%26f%3Dsl1d1t1c1ohgv%26e%3D.csv'%20and%20columns%3D'symbol%2Cprice%2Cdate%2Ctime%2Cchange%2Ccol1%2Chigh%2Clow%2Ccol2'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    dataSource = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22" + tickerSymbol + "%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

    $.ajax({
      url: dataSource,
      type: 'GET',
      dataType: "JSON",
      success: function (data) {
        console.log(data);
        dataList = data;

      // Import desired data from json object and store in newDataList
      newDataList = {
        symbol: dataList.query.results.quote.Name,
        price: dataList.query.results.quote.LastTradePriceOnly,
        change: dataList.query.results.quote.Change,
        pe: dataList.query.results.quote.PERatio
      }

        // TEMPLATES
        var stockInfoCompiled = _.template(templates.stockInfo);
        console.log(stockInfoCompiled(newDataList));
        $(".container").prepend(stockInfoCompiled(newDataList));

        if (newDataList.change.indexOf('+') == 0) {
          $('.container .stockCard').first().css( "border", "5px solid forestgreen" );
        }

        else if (newDataList.change.indexOf('-') == 0) {
          $('.container .stockCard').first().css( "border", "5px solid firebrick" );
        }

        else {
          $('.container .stockCard').first().css( "background", "gray" );
        }

      },
      error: function (error) {
        console.log(error);
      }
    });

    ///code

  }

}

$(document).ready(function() {
  appPage.init();

  //listens to toggle between price and percent change
  // $('.container').on("click", ".stockCard", function(){
  //   console.log("button pressed")
  //   $(this).children('.stockBox').children('li').children('.price').toggle();
  //   $(this).children('.stockBox').children('li').children('.change').toggle();
  // });

  // Cycle through li
  $('.container').on("click", ".next", function(e){
    console.log('next')
    e.preventDefault();

    var $toHighlight = $('.active').next().length > 0 ? $(this).parent().siblings().children('.stockBox').children('.active').next() : $(this).parent().siblings().children().children('.stockBox li').first();

    var $breadcrumb = $('.activeBreadcrumb').next().length > 0 ? $(this).siblings().children('.activeBreadcrumb').next() : $(this).siblings().children('.breadcrumb li').first();

    console.log($toHighlight.text())
    console.log($breadcrumb.text())

    $('.active').removeClass('active');
    $('.activeBreadcrumb').removeClass('activeBreadcrumb')

    $toHighlight.addClass('active');
    $breadcrumb.addClass('activeBreadcrumb')

    if ($toHighlight.text() == '') {
      $toHighlight.children('h1').text('Unavailable')
    }
  });


  $('.container').on("click", ".prev", function(e){
    console.log('prev')
    e.preventDefault();

    var $toHighlight = $('.active').prev().length > 0 ? $(this).parent().siblings().children('.stockBox').children('.active').prev() : $(this).parent().siblings().children().children('.stockBox li').last();

    var $breadcrumb = $('.active').prev().length > 0 ? $(this).siblings().children('.active').prev() : $(this).siblings().children('.stockCard li').last()

    $('.active').removeClass('active');
    $('.activeBreadcrumb').removeClass('activeBreadcrumb')

    $toHighlight.addClass('active');
    $breadcrumb.addClass('activeBreadcrumb')

  });

});
