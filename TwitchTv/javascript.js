$(document).ready(function(){

    var twitchChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var api0 = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp/"
    var api1 = "https://wind-bow.glitch.me/twitch-api/users/";
    var api2 = "https://wind-bow.glitch.me/twitch-api/channels/";
    var api3 = "https://wind-bow.glitch.me/twitch-api/streams/";

    
    $.getJSON(api0, function(data0){
        if(data0.status==null){
            $("#fccStatus").html("<p>FreeCodeCamp is OFFLINE</p>");
        } else {
            $("#fccStatus").html("<a href = " + "https://www.twitch.tv/freecodecamp" + ">" + "<p>FreeCodeCamp is ONLINE</p></a>")
        }
    });//fccstatus



        $("#allChannels").click(function(){
            for (var i = 0; i < twitchChannels.length; i++){
                
                $.getJSON(api1 + twitchChannels[i], function(data1){
                    
                    
                    $("#dataLogo").append("<img src=" + data1.logo + ">")    

                    //$("#dataLogo").html('');
                });//logo json

               
                $.getJSON(api2 + twitchChannels[i], function(data2){

                    
                    
                    $("#dataChannel").append("<a href=" + data2.url + "> <p>" + data2.display_name + "</p></a>")
                    //$("#dataChannel").html('');
                });//channel url end
                
                
                $.getJSON(api3 + twitchChannels[i], function(data3){

                    
                    
                    if(data3.status==null){
                        $("#dataStatus").append("<p>OFFLINE</p>")
                    } else {
                        $("#dataStatus").append("<p>ONLINE</p>")
                    }

                    //$("#dataStatus").html('');
                });//status end
            };
        
        
        
        });//all click function

   

});//end

    

   
    