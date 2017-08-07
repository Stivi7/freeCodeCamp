

var script = document.createElement('script');
 
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

$(document).ready(function(){
  $("#getQuote").on("click", function(){
    
   $.ajaxSetup({cache: false});
    
   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data){
     $(".message").html(data[0].content + " - " + data[0].title)
     
     
     $("#tweet").on('click', function() {
      var myUrl = 'https://twitter.com/intent/tweet?text=' + data[0].content + " - " + data[0].title;
      window.open(myUrl, 'twitter');
      return false;
     });
    }); 
  
  }); 

}); //end