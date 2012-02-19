var config = module.exports;

config["Tests"] = {
    env: "browser",
    libs: ["jquery-1.7.1.min.js"],
    sources: ["src/*.js", "app.js"],
    tests: ["*-test.js"]
}