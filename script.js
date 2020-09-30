$(document).ready(function(){
    var searchBtn = $("#searchBtn");
    searchBtn.on("click", function(event){       
        var searchInput = $("#search").val();
        var wCard = $("#wCard");
        var cCard = $("#cCard");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+searchInput+"&appid=b107c8b9bc4a0c422d2aa876058229a3&units=imperial"
        event.preventDefault();
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
            var newDiv = $("<div>");
            var htag = $("<h1>");
            var ptag = $("<p>");
            htag.append(response.name);
            newDiv.append(htag);
            wCard.append(newDiv);

            ptag.append("Temperature: "+response.main.temp + "°F");
            newDiv.append(ptag);
            wCard.append(newDiv);
            var ptag = $("<p>");
            ptag.append("Humidity: "+response.main.humidity+"%");
            newDiv.append(ptag);
            wCard.append(newDiv);
            var ptag = $("<p>");
            ptag.append("Wind Speed: "+response.wind.speed+ "MPH");
            newDiv.append(ptag);
            wCard.append(newDiv);
            console.log(response.main.temp)
        });
    });
        
});