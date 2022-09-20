var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
    };

        $.ajax({
            url: 'https://api.bing.microsoft.com/' + $.param(params),
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "1b2b58c759854247916bd2add92e09db");
            },
            type: "GET",
        })
            .done(function (data) {
                len = data.webPages.value.length;
                for (i = 0; i < len; i++) {
                    results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
                }

                $('#searchResults').html(results);
                $('#searchResults').dialog();
            })
            .fail(function () {
                alert("error");
            });
}

function clicked() {
    var d = new Date;
    document.getElementById('time').innerHTML = d;
}  

$("#time").click(function () {
    var d = new Date;
    document.getElementById('time').innerHTML = d;
})
