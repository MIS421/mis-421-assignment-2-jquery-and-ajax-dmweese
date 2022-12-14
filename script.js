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
            url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
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
    console.log(results)
}

$(document).ready(function () {
    $("#timeButton").click(function () {
        var d = new Date;
        var time = d.getHours() + ":" + d.getMinutes();
        $("#time").html(time);
    });

})

function luckySearch() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "1b2b58c759854247916bd2add92e09db");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            window.open(data.webPages.value[0].url, "_blank")

        })
        .fail(function () {
            alert("error");
        });
    console.log(results)
}