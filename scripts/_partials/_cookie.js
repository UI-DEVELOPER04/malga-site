$(function () {
    var cookieValue = [{ "value": false }]; // Stores local storage data as json object
    var stateLength = 0; // LocalStorage amount of items stored -- updated each time item is pushed
    var storageName = 'interactive-cookie-notification';
    
    var cookieBar = $('#cookieBar');

    if (localStorage && localStorage.getItem(storageName)) {
        // Get storage item string data
        var retrievedWishlist = localStorage.getItem(storageName);
        // Parse that string as json object
        cookieValue = JSON.parse(retrievedWishlist);

        if (cookieValue[0].value === false) {
            cookieBar.addClass('visible');
        } else {
            cookieBar.removeClass('visible');
        }

    } else {
        // If wishlist does not exists on user browser set up list
        localStorage.setItem(storageName, JSON.stringify(cookieValue));
    }

    // Set As Agreed
    $('#cookieBar .accept').click(function (event) {
        event.preventDefault();
        localStorage.setItem(
            storageName,
            JSON.stringify(
                [{
                    "agreed": true,
                    "timestamp": new Date()
                }]
            )
        );
        $(this).parents('#cookieBar').removeClass('visible');
    });

});