/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {
    "use strict";

    var eventsList = new WinJS.Binding.List();

    //var apiUrl = 'http://appcentral-api.azurewebsites.net/v1/events';
    var apiUrl = '/localdata/events.json';

    WinJS.xhr({ url: apiUrl }).then(function (xhr) {
        var items = JSON.parse(xhr.responseText);

        items.forEach(function (item) {
            eventsList.push(item);
        });
    });

    WinJS.Namespace.define("Data", {
        allEvents : eventsList
    });
})();