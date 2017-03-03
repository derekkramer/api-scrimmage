$(document).ready(function() {

    var url = 'https://api.punkapi.com/v2/beers',
        code = '',
        items = [];

    $("body").keydown(function(key) {
        if (key.keyCode == 13) {
            $.get(url).then(function(data) {
                for (var input in data) {
                    code += addBeers(food_pairing[input], data);
                }
                console.log(code);
            });
        }
    });
});

function addBeers(input, data) {
    var bool = input.text().includes($('#search').text());
    if (bool === true) {
        return data.name[food];
    }
}
