buster.testCase("CSI", {
    setUp: function () {
        this.clock = this.useFakeTimers();
    },

    "test it": function () {
        document.body.innerHTML = '<table id="people"><tbody></tbody></table><div id="more_info"></div>';
        csi.index.run();
        assert.equals(jQuery("#people tbody tr").length, 1);
        assert.match(jQuery("#people tbody tr").html(), "loading");

        this.clock.tick(500);
        assert.equals(jQuery("#people tbody tr").length, 4);
        assert.equals(jQuery("#more_info").html(), "");

        jQuery("#people tbody tr:first a").trigger("click");
        assert.match(jQuery("#more_info").html(), "loading");
        this.clock.tick(500);
        refute.equals(jQuery("#more_info").html(), "");
        assert.match(jQuery("#more_info").html(), "Rich Hickey");

        jQuery("#people tbody tr:nth(1) a").trigger("click");
        assert.match(jQuery("#more_info").html(), "loading");
        this.clock.tick(500);
        refute.equals(jQuery("#more_info").html(), "");
        assert.match(jQuery("#more_info").html(), "Donald Knuth");

        jQuery("#more_info a").trigger("click");
        assert.equals(jQuery("#more_info").html(), "");
    }
});