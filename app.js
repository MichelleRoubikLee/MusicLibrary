$.ajax({
    url: "http://www.devcodecampmusiclibrary.com/api/music",
    dataType: "json",
    type: "get",
    success: function(data,textStatus,jqxhr){
        for(let i = 0; i<data.length; i++){
            $(".songsTable").append(
                "<tr>" +
                "<td>"+ data[i].title +"</td>" +
                "<td>"+ data[i].album +"</td>" +
                "<td>"+ data[i].artist +"</td>" +
                "<td>"+ data[i].genre +"</td>" +
                "<td>"+ data[i].releaseDate +"</td>" 
                + "</tr>"                
            )
        }
    },
    error: function (jqXhr, textStatus, errorThrown){
        console.log(errorThrown);
    }
});