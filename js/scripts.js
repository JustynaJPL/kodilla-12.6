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
        	$(countriesList).append(
        		"<li>" +
        		"<h1>"+item.name+"</h1>"+
        		"<h2>"+item.capital+"</h2>"+
        		"<p class='region'> <span>Region:</span> "+item.region+"</p>"+ 
        		"<p class='population'> <span>Population:</span> "+item.population+"</p>"+
        		"<p class='area'><span>Area:</span>"+item.area+"</p>"+
        		"</li>");
        });
    }
    function clearImput(){
    	countryNameinp.val("");
    }

});