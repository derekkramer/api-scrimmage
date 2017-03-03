var url = 'https://api.punkapi.com/v2/beers',
    code = '',
    items = [];

$.get(url).then(function(data){
    code += '<select>';
    for (var input in data) {
        for (var food in data[input].food_pairing) {
            items.push(data[input].food_pairing[food]);
        }
    }

    items = items.sort();

    for (var i = 0; i < items.length; i++) {
        code += '<option value="option">' + items[i] + '</option>';
    }

    code += '</select>';

    console.log(code);
    $('body').append(code);
});
