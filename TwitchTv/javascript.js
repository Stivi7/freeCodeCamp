$(document).ready(function () {

    var twitchChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var api0 = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp/"
    var api1 = "https://wind-bow.glitch.me/twitch-api/users/";
    var api2 = "https://wind-bow.glitch.me/twitch-api/channels/";
    var api3 = "https://wind-bow.glitch.me/twitch-api/streams/";


    $.getJSON(api0, function (data0) {
        if (data0.stream === null) {
            $("#fccStatus").html("<p>FreeCodeCamp is OFFLINE</p>");
        } else {
            $("#fccStatus").html("<a href = " + "https://www.twitch.tv/freecodecamp" + ">" + "<p>FreeCodeCamp is ONLINE</p></a>")
        }
    });//fccstatus



    $("#allChannels").click(function () {

        // Clear table when data refreshed
        $("#dataTable").html("");
        for (var i = 0; i < twitchChannels.length; i++) {
            $.when(
                $.getJSON(api1 + twitchChannels[i]),
                $.getJSON(api2 + twitchChannels[i]),
                $.getJSON(api3 + twitchChannels[i])
            ).done(function (data1, data2, data3) {
                data1 = data1[0]
                data2 = data2[0]
                data3 = data3[0]
                var rowEl = $("<tr></tr>")
                // Logo

                if (!data1.logo) {
                    rowEl.append("<td><img src='https://www.neto.com.au/assets/images/default_product.gif'></td>")
                } else {
                    rowEl.append("<td><img src=" + data1.logo + "></td>")
                }

                // Name
                rowEl.append("<td><a href=" + data2.url + "> <p>" + data2.display_name + "</p></a></td>");

                // Status
                if (data3.stream === null) {
                    rowEl.append("<td><p>OFFLINE</p></td>")
                } else {
                    rowEl.append("<td><p>ONLINE</p></td>")
                }
                $("#dataTable").append(rowEl);
            })

        };
    });//all click function

    $("#onlineUsers").click(function () {
        $("#dataTable").html("");
        for (var i = 0; i < twitchChannels.length; i++) {
            $.when(
                $.getJSON(api1 + twitchChannels[i]),
                $.getJSON(api2 + twitchChannels[i]),
                $.getJSON(api3 + twitchChannels[i])
            ).done(function (data1, data2, data3) {
                data1 = data1[0]
                data2 = data2[0]
                data3 = data3[0]
                var rowEl = $("<tr></tr>")

                if (data3.stream !== null) {
                    if (!data1.logo) {
                        rowEl.append("<td><img src='https://www.neto.com.au/assets/images/default_product.gif'></td>")
                    } else {
                        rowEl.append("<td><img src=" + data1.logo + "></td>")
                    }//if logo

                    // Name
                    rowEl.append("<td><a href=" + data2.url + "> <p>" + data2.display_name + "</p></a></td>");
                    rowEl.append("<td><p>ONLINE</p></td>")
                    $("#dataTable").append(rowEl);
                }

            });

        }
    });// online users end

    $("#offlineUsers").click(function () {
        $("#dataTable").html("");
        for (var i = 0; i < twitchChannels.length; i++) {
            $.when(
                $.getJSON(api1 + twitchChannels[i]),
                $.getJSON(api2 + twitchChannels[i]),
                $.getJSON(api3 + twitchChannels[i])
            ).done(function (data1, data2, data3) {
                data1 = data1[0]
                data2 = data2[0]
                data3 = data3[0]
                var rowEl = $("<tr></tr>")

                if (data3.stream === null) {
                    if (!data1.logo) {
                        rowEl.append("<td><img src='https://www.neto.com.au/assets/images/default_product.gif'></td>")
                    } else {
                        rowEl.append("<td><img src=" + data1.logo + "></td>")
                    }//if logo

                    // Name
                    rowEl.append("<td><a href=" + data2.url + "> <p>" + data2.display_name + "</p></a></td>");
                    rowEl.append("<td><p>OFFLINE</p></td>")
                    $("#dataTable").append(rowEl);
                }

            });

        }
    });// offline users end





});//end