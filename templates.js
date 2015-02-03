var templates = {};

templates.stockInfo = [
"<div class='stockCard'>",
"<div class='stockSymbol'>",
"<h1><%= symbol %></h1>",
"</div>",
"<div class='stockPrice active'>",
"<h1><%= price %></h1>",
"</div>",
"<div class='stockChange'>",
"<h1><%= change %></h1>",
"</div>",
"</div>"
].join("")
