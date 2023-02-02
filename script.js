let exampleDiv = $("<h1>Hello</h1>");
let searchTerm = $("#search-term");
let recordNo = $("#record-no");
let startY = $("#start-year");
let endY = $("#end-year");


function ajaxHandler (a, b, c, d) {
    

}






$("#search").on("click", function(){
    let querySearch = searchTerm.val().trim();
    let queryRecordNo = searchTerm.val().trim();
    let queryStart = startY.val().trim();
    let queryEnd = endY.val().trim()
    ajaxHandler(querySearch, queryRecordNo, queryStart, queryEnd)
})