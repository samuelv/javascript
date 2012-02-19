(function () {
    var PEOPLE = [
        {firstName: "Rich", lastName: "Hickey", info: "Funky but not Groovy."},
        {firstName: "Donald", lastName: "Knuth", info: "Algorithmically unchallenged."},
        {firstName: "Gerald Jay", lastName: "Sussman", info: "Artificially intelligent."},
        {firstName: "Edsger", lastName: "W. Dijkstra", info: "Evidently clever."}
    ];
    function fakeAjax(data, cb) {
        setTimeout(function () { cb(data); }, Math.random() * 500);
    };

    // No changes allowed above this line
    // -----------------------------------------------------------------

    window.csi = window.csi || {};
    csi.index = {
        run: function () {
            var self = this;
            var peopleTableBody = jQuery("#people tbody");

            var loadingHTML = '<tr><td colspan="2">Loading...</td></tr>';
            csi.asyncLoader(peopleTableBody, loadingHTML, function (done) {
                fakeAjax(PEOPLE, function (people) {
                    done(people.reduce(function (html, person, i) {
                        return html + self.renderPerson(person, i);
                    }, ""));

                    peopleTableBody.on("click", "a", function (e) {
                        e.preventDefault();
                        var person = people[jQuery(this).attr("data-id")];
                        self.showPerson(person);
                    });
                });
            });

            var moreInfo = jQuery("#more_info");
            moreInfo.on("click", "a.close", function (e) {
                e.preventDefault();
                moreInfo.html("");
            });
        },

        renderPerson: function (person, i) {
            var html = '<tr>';
            html += '<td>' + person.firstName + ' ' + person.lastName + '</td>';
            html += '<td><a href="" data-id="' + i + '">More</a></td>';
            html += '</tr>';
            return html;
        },

        showPerson: function (person) {
            csi.asyncLoader(jQuery("#more_info"), "Loading...", function (done) {
                fakeAjax(person, function (fullPerson) {
                    done("<h2>" + fullPerson.firstName + " " + fullPerson.lastName + "</h2>" +
                         "<p>" + fullPerson.info + "</p>" +
                         '<a href="#" class="close">Close</a>');
                });
            });
        }
    };
}());
