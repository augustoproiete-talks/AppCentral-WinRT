/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {
    "use strict";

    var eventsList = new WinJS.Binding.List();

    eventsList.push({ title: 'Win8 w/ HTML+JS', speakers: 'Caio' });
    eventsList.push({ title: 'Windows 8 UX Design - Part 1', speakers: 'Leslie' });

    WinJS.Namespace.define("Data", {
        allEvents : eventsList
    });
})();