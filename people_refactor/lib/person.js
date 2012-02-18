(function(){

    person = {};
    person.description = function (personInfo, domElement) {
        var nameDomNode;
        var descriptionDomNode;

        if (personInfo.name) {
            nameDomNode = document.createElement('h2');
            nameDomNode.innerHTML = personInfo.name;
            domElement.appendChild(nameDomNode);
        }

        if (personInfo.description) {
            descriptionDomNode = document.createElement('p');
            descriptionDomNode.innerHTML = personInfo.description;
            domElement.appendChild(descriptionDomNode);
        }
    }

}());