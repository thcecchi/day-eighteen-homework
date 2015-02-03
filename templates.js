var templates = {};

templates.stockInfo = [
"<div class='stockCard'>",
"<div class='stockSymbol'>",
"<h1><%= symbol %></h1>",
"</div>",
"<div class='stockBox'>",
"<h1 class='price'><%= price %></h1>",
"<h1 class='change'><%= change %></h1>",
"</div>",
"</div>"
].join("")
