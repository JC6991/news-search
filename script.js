let exampleDiv = $("<h1>Hello</h1>");
let searchTerm = $("#search-term");
let recordNo = $("#record-no");
let startY = $("#start-year");
let endY = $("#end-year");
let dateCorrector = "0101";


function ajaxHandler (a, b, c, d) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + a + "&api-key=qA6nugDJGMyJMS1kZDGL9zq4AW0tpING&begin_date=" + c + "&end_date=" + d;
  $.ajax({
    url: queryURL,
    method: "GET"    
  }).then(function(response) {
    console.log(response);
    console.log(b);
    
    for(let i = 0; i < b; i++){
      let newsDiv = $("<div>");
      let title = $("<p class='lead' style='font-weight:bold;'>").text(response.response.docs[i].headline.main);
      let date = $("<p>").text(response.response.docs[i].pub_date);
      let snippet = $("<p>").text(response.response.docs[i].abstract);
      newsDiv.append(title, date, snippet);
      $("#results").append(newsDiv);
    
    }
    

  })
}






$("#search").on("click", function(){
  $("#results").empty();
    let querySearch = searchTerm.val().trim();
    let queryRecordNo = recordNo.val().trim();
    let queryStart = startY.val().trim();
    queryStart += dateCorrector
    // console.log(queryStart);
    let queryEnd = endY.val().trim()
    queryEnd += dateCorrector
    // console.log(queryEnd);
    ajaxHandler(querySearch, queryRecordNo, queryStart, queryEnd)
})