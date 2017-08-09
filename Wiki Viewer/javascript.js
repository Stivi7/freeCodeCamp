$(document).ready(function(){
  
  $("#search").click(function(){//click function
    
    var searchTerm = $("#searchTerm").val(); //input from the user
    
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";//endpoint
    
    $.getJSON(api, function(data){
      //console.log(data[1][0]);
      //console.log(data[2][0]);
      //console.log(data[3][0]);
      $("#output").html('');
    for(var i = 0; i < data[1].length; i++){
      $("#output").prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
      
    };//loop end
    
   
    });//json end
  
  $.error(function(errorMessage){
      alert("Error");});
  });//click function end

});//end
