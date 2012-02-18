buster.spec.expose();

var spec = describe("Render detailed person info", function () {
    before(function() {
        this.domElement = document.createElement("div");
    });

    it("should leave empty div when empty person", function () {
        person.description({}, this.domElement);

        buster.assert.equals("", this.domElement.innerHTML);
    });

    it("should only display name when no description", function () {
        person.description({name: "Samuel"}, this.domElement);

        buster.assert.equals("Samuel", this.domElement.childNodes[0].innerHTML);
    });

    it("should only display description when no name", function () {
        person.description({description: "Utvikler"}, this.domElement);

        buster.assert.equals("Utvikler", this.domElement.childNodes[0].innerHTML);
    });

});