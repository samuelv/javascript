(function(){

    person = {};
    person.description = function (personInfo, domElement) {
        if (personInfo.name) {
            domElement.innerHTML = "<h2>" + personInfo.name + "</h2>";
        }

        if (personInfo.description) {
            domElement.innerHTML = "<p>" + personInfo.description + "</p>";
        }
    }

}());