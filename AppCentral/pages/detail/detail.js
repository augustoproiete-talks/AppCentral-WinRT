// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/detail/detail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            var item = options.item;

            var pageTitle = element.querySelector('.titlearea .pagetitle');
            pageTitle.textContent = item.title;
        
            var eventImage = element.querySelector('#eventImage');
            eventImage.src = item.image;

            var eventSpeakers = element.querySelector('#eventSpeakers');
            eventSpeakers.textContent = item.speakers;

            var eventDate = element.querySelector('#eventDate');
            eventDate.textContent = item.date;

            var eventDate = element.querySelector('#eventStartTime');
            eventDate.textContent = item.startTime;

            var eventDate = element.querySelector('#eventEndTime');
            eventDate.textContent = item.endTime;

            var eventDate = element.querySelector('#eventTags');
            eventDate.textContent = item.tags;
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
