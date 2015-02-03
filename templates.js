var templates = {};

templates.stockInfo = [
"<div class='stockCard'>",
"<h2><%= symbol %></h2>",
"<div class='stockPrice'>",
"<h4><%= price %></h4>",
"</div>",
"<div class='stockChange'>",
"<h4><%= change %></h4>",
"</div>",
"</div>"
].join("")
