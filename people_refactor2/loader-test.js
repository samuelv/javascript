// loader("Loading...", function (done) {
//     done("Here's new stuff");
// });

buster.testCase("Loader", {
    "immediately sets loading text": function () {
        var div = document.createElement("div");
        csi.asyncLoader(div, "Loading...", function () {});

        assert.equals(div.innerHTML, "Loading...");
    },

    "replaces loading text when async callback completes": function () {
        var div = document.createElement("div");
        csi.asyncLoader(div, "Loading...", function (done) {
            done("This is the new text");
        });

        assert.equals(div.innerHTML, "This is the new text");
    },

    "works with jQuery objects": function () {
        var div = jQuery("<div></div>");
        csi.asyncLoader(div, "Loading...", function (done) {
            done("This is the new text");
        });

        assert.equals(div.html(), "This is the new text");
    },

    "works with all elements in jQuery collection": function () {
        var divs = jQuery("<div></div><div></div>");
        csi.asyncLoader(divs, "Loading...", function () {});

        assert.equals(divs[0].innerHTML, "Loading...");
        assert.equals(divs[1].innerHTML, "Loading...");
    }
});
