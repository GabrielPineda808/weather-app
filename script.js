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
        forecast(searchInput)
    });

    function forecast(searchInput){
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&cnt=40&appid=0f648c83a8f1c0908eb37a9e5dfe1a58&units=Imperial";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            $("#temp1").text(response.list[5].main.temp); 
            $("#temp2").text(response.list[14].main.temp); 
            $("#temp3").text(response.list[21].main.temp); 
            $("#temp4").text(response.list[29].main.temp); 
            $("#temp5").text(response.list[38].main.temp); 
        
            $("#humid1").text(response.list[5].main.humidity);
            $("#humid2").text(response.list[14].main.humidity);
            $("#humid3").text(response.list[21].main.humidity);
            $("#humid4").text(response.list[29].main.humidity);
            $("#humid5").text(response.list[38].main.humidity);  
        });
    }
        
});