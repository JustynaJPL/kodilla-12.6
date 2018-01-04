$(function() {
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');
    var countryNameinp = $('#country-name');

    $('#search').click(searchCountries);
    $('#country-name').focus(clearImput);

    function searchCountries() {    	
        
        var countryName = $('#country-name').val();
        if (!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    }

    function showCountriesList(resp) {
        countriesList.empty();

        resp.forEach(function(item) {
        	$('<li>').text(item.name).appendTo(countriesList);
    	});
    }
    function clearImput(){
    	countryNameinp.val("");
    }

});