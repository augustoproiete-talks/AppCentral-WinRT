(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            var eventsListView = element.querySelector('#eventsListView').winControl;
            eventsListView.oniteminvoked = this._itemInvoked.bind(this);

            var visitSiteButton = element.querySelector('#visitSiteButton');
            visitSiteButton.addEventListener('click', function () {
                var siteUri = new Windows.Foundation.Uri('http://appcentral.cloudapp.net');
                Windows.System.Launcher.launchUriAsync(siteUri);
            });
        },

        _itemInvoked: function (args) {
            var selectedItem = Data.allEvents.getAt(args.detail.itemIndex);
            WinJS.Navigation.navigate('/pages/detail/detail.html', { item: selectedItem });
        }

    });
})();
