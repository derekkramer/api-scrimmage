var url = 'https://api.punkapi.com/v2/beers';

var code = '';

$.get(url).then(function(data){
    code += '<select>';
    for (var input in data) {
            for (var food in data[input].food_pairing) {
                // console.log(data[input].food_pairing[food]);

                code += '<option value="option">' + data[input].food_pairing[food] + '</option>';
            }
        }
    code += '</select>';

    console.log(code);
    $('body').append(code);
});
