var config = module.exports;

config["Browser tests"] = {
    environment: "browser",
    libs: ["lib_external/**/*.js"],
    sources: ["lib/**/*.js"],
    tests: ["test/**/*.js"]
};