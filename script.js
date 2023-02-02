let exampleDiv = $("<h1>Hello</h1>");
let searchTerm = $("#search-term");
let recordNo = $("#record-no");
let startY = $("#start-year");
let endY = $("#end-year");
let dateCorrector = "0101";


function ajaxHandler (a, c, d) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + a + "&api-key=qA6nugDJGMyJMS1kZDGL9zq4AW0tpING&begin_date=" + c + "&end_date=" + d;
  $.ajax({
    url: queryURL,
    method: "GET"    
  }).then(function(response) {
    console.log(response);
  })
}






$("#search").on("click", function(){
    let querySearch = searchTerm.val().trim();
    let queryRecordNo = searchTerm.val().trim();
    let queryStart = startY.val().trim();
    queryStart += dateCorrector
    // console.log(queryStart);
    let queryEnd = endY.val().trim()
    queryEnd += dateCorrector
    // console.log(queryEnd);
    ajaxHandler(querySearch, queryStart, queryEnd)
})