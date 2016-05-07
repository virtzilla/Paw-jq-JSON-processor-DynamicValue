loadScript("jq-emscripten.js");

(function() {
    var ProcessWithJQ;
    ProcessWithJQ = function() {
        this.evaluate = function() {
            jq(['-M', this.jqargs, '/data/inputfile'], this.jsonInput, function() {
                returnOutput()
            });
            return output;
        };
        this.title = function() {
            return "jq JSON processor";
        };
        this.text = function() {
            return null;
        };
    };

    ProcessWithJQ.identifier = "com.virtzilla.PawExtensions.jq";
    ProcessWithJQ.title = "jq JSON processor";
    ProcessWithJQ.help = "https://stedolan.github.io/jq/manual/#Basicfilters"
    ProcessWithJQ.inputs = [
        DynamicValueInput("jqargs", "JQ args", "String", {
            defaultValue: "."
        }),
        DynamicValueInput("jsonInput", "JSON input", "String", {
            placeholder: "{\"change me\": \"put your JSON input here\"}"
        })
    ];
    registerDynamicValueClass(ProcessWithJQ);
}).call(this);

var output = '';

function returnOutput() {
    //console.log(output);
}
