var templates = {};

templates.stockInfo = [
// "<div class='row'>",
"<div class='stockCard col-md-12'>",

"<div class='row'>",
  "<a class='prev col-md-1 col-md-offset-1' href='#'><i class='fa fa-chevron-left'></i></a>",
  "<ul class='breadcrumb col-md-4 col-md-offset-2'>",
    "<li class='col-md-4 activeBreadcrumb'><h6>Price</h6></li>",
    "<li class='col-md-4'><h6>Change</h6></li>",
    "<li class='col-md-4'><h6>P/E</h6></li>",
  "</ul>",
  "<a class='next col-md-1 col-md-offset-2' href='#'><i class='fa fa-chevron-right'></i></a>",
"</div>",

"<div class='row'>",
  "<div class='stockSymbol col-md-6'>",
    "<h1><%= symbol %></h1>",
  "</div>",

  "<ul class='stockBox col-md-6'>",
    "<li class='active'><h1 class='price'><%= price %></h1></li>",
    "<li><h1 class='change'><%= change %></h1></li>",
    "<li><h1 class='pe'><%= pe %></h1></li>",
  "</ul>",
"</div>",

"</div>"
// "</div>"
].join("")
