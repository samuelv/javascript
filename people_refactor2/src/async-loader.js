var csi = csi || {};

csi.asyncLoader = function (element, loadingHTML, callback) {
    if (typeof element.innerHTML == "undefined") {
        for (var i = 0, l = element.length; i < l; ++i) {
            csi.asyncLoader(element[i], loadingHTML, callback);
        }
        return;
    }

    element.innerHTML = loadingHTML;
    callback(function (loadedHTML) {
        element.innerHTML = loadedHTML;
    });
};