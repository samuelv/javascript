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

    var peopleTableBody = jQuery("#people tbody");
    peopleTableBody.html('<tr><td colspan="2">Loading...</td></tr>');
    fakeAjax(PEOPLE, function (people) {
        peopleTableBody.html("");
        people.forEach(function (person) {
            var html = jQuery('<tr></tr>');
            html.append('<td>' + person.firstName + ' ' + person.lastName + '</td>');
            html.append('<td><a href="#">More</a></td>');
            html.find("a").click(function (e) {
                e.preventDefault();

                var moreInfoTarget = jQuery("#more_info");
                moreInfoTarget.html("Loading...");
                fakeAjax(person, function (fullPerson) {
                    var name = fullPerson.firstName + " " + fullPerson.lastName;
                    var html = jQuery("<h2>" + name + "</h2>"
                                      + "<p>" + fullPerson.info + "</p>"
                                      + '<a href="#">Close</a>');
                    moreInfoTarget.html(html);
                    moreInfoTarget.find("a").click(function (e) {
                        e.preventDefault();
                        moreInfoTarget.html("");
                    });
                });
            });
            peopleTableBody.append(html);
        });
    });
}());