/*global $*/
$(function () {
    "use strict";
    $("#curr").click(function(){
        var city = $('#weather').val();
            if(city != ""){
                $.getJSON({
                    url:'https://api.weatherbit.io/v2.0/current?city=' + city + "&key=56517ba47e20475fab977e23a3d38836",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_weather(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
    $("#48hour").click(function(){
        var name = $('#weather').val();
            if(name != ""){
                $.getJSON({
                    url:'https://api.weatherbit.io/v2.0/forecast/hourly?city=' + name + 
                    "&key=56517ba47e20475fab977e23a3d38836",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_hourly(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
   $("#5day").click(function(){
        var name = $('#weather').val();
            if(name != ""){
                $.getJSON({
                    url:'https://api.weatherbit.io/v2.0/forecast/3hourly?city=' + name + "&key=56517ba47e20475fab977e23a3d38836",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_5days(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
   $("#16day").click(function(){
        var name = $('#weather').val();
            if(name != ""){
                $.getJSON({
                    url:'https://api.weatherbit.io/v2.0/forecast/daily?city=' + name + "&key=56517ba47e20475fab977e23a3d38836",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_16day(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
       $("#Historical").click(function(){
        var name = $('#weather').val();
            if(name != ""){
                $.getJSON({
                    url:'https://api.weatherbit.io/v2.0/history/hourly?city=' + name +"&start_date=2018-02-27&end_date=2018-02-28&key=56517ba47e20475fab977e23a3d38836",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_Historical(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
    
    });

function show_weather(data){
    return "<h1>wind Speed  :" + data.data[0].wind_spd + "</h1>" +
           "<h1>wind_dir  :" +  data.data[0].wind_dir + " </h1>" +
           "<h1>wind_cdir_full  :" +  data.data[0].wind_cdir_full + "</h1>" +
           "<h1>weather description  :" +  data.data[0].weather.description + " </h1>";
}
function show_hourly(data){
        return "<h1>wind speed  :" + data.data[0].wind_spd + "</h1>" +
        "<h1>rh  :" +  data.data[0].rh + "</h1>" +
        "<h1>wind_dir  :" +  data.data[0].wind_dir + " </h1>" +
        "<h1>wind_cdir_full  :" +  data.data[0].wind_cdir_full + "</h1>" +
        "<h1>weather description  :" +  data.data[0].weather.description + " </h1>" ;
}
function show_5days(data){
        return "<h1>wind speed  :" + data.data[0].wind_spd + "</h1>" +
        "<h1>rh  :" +  data.data[0].rh + "</h1>" +
        "<h1>wind_dir  :" +  data.data[0].wind_dir + " </h1>" +
        "<h1>wind_cdir_full  :" +  data.data[0].wind_cdir_full + "</h1>" +
        "<h1>weather description  :" +  data.data[0].weather.description + " </h1>" +
            "<h1>snow  :" +  data.data[0].snow + " </h1>" +
            "<h1>wind_dir  :" +  data.data[1].temp + " </h1>" ;
}
function show_16day(data){
     return "<h1>wind speed  :" + data.data[0].wind_spd + "</h1>" +
        "<h1>pop  :" +  data.data[0].pop + "</h1>" +
        "<h1>wind_dir  :" +  data.data[0].wind_dir + " </h1>" +
        "<h1>wind_cdir_full  :" +  data.data[0].wind_cdir_full + "</h1>" +
        "<h1>weather description  :" +  data.data[0].weather.description + " </h1>" +
            "<h1>snow is :" +  data.data[0].snow + " </h1>" +
            "<h1>max Temp  :" +  data.data[1].max_temp + " </h1>"+
         "<h1>Temp  :" +  data.data[1].temp + " </h1>";
}
function show_Historical(data){
        return "<h1>wind speed  :" + data.data[0].wind_spd + "</h1>" +
        "<h1>pop  :" +  data.data[0].pop + "</h1>" +
        "<h1>wind_dir  :" +  data.data[0].wind_dir + " </h1>" +
        "<h1>weather description  :" +  data.data[0].weather.description + " </h1>" +
        "<h1>snow  :" +  data.data[0].snow + " </h1>" +
        "<h1>clouds :" +  data.data[1].clouds + " </h1>"+
        "<h1>Temp  :" +  data.data[1].temp + " </h1>";
}