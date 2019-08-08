$(document).ready(function() { 
    var endpoint = "https://api.github.com/users/orangopus"
    var repos = "/repos"
    
    $.get(endpoint+repos, function(result) {

        $("#name1").append(result[5].name);
        $("#name2").append(result[4].name);
        $("#name3").append(result[3].name);
        $("#name4").append(result[2].name);
        $("#name5").append(result[1].name);
        $("#name6").append(result[0].name);

        $("#desc1").append(result[5].description);
        $("#desc2").append(result[4].description);
        $("#desc3").append(result[3].description);
        $("#desc4").append(result[2].description);
        $("#desc5").append(result[1].description);
        $("#desc6").append(result[0].description);
    });
});