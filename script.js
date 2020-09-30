$(document).ready(function(){
    var searchBtn = $("#searchBtn");
    searchBtn.on("click", function(event){       
        event.preventDefault();
        var searchInput = $("#search").val();
        console.log(searchInput)
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+searchInput+"&appid=0f648c83a8f1c0908eb37a9e5dfe1a58&units=imperial"
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response){
              $("#city").text(response.name)
              $("#temp").text(response.main.temp)
              $("#wind").text(response.wind.speed)
              $("#humid").text(response.main.humidity)

              $("#history").append($("<button>").text(response.name).attr("class", "list-group-item"))
        });
    });
        
});