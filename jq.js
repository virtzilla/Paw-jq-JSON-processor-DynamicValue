this.jq = this.require("./jq-emscripten") || this.jq;

var ProcessWithJQ = function() {
  var flags = '-M';

  this.evaluate = function() {
    if (this.rawOutput)
      flags += 'r';

    var jqOutput = jq.raw(this.jsonInput, [flags, this.jqargs]);

    if (jqOutput === null)
      return null;

    if (jqOutput.match(/^jq: error:/)) {
      console.error(jqOutput);
      return null;
    } else {
      return jqOutput.trim();
    }
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
ProcessWithJQ.help = "https://stedolan.github.io/jq/manual/#Basicfilters";
ProcessWithJQ.inputs = [
  InputField("jqargs", "JQ args", "String", { defaultValue: "." }),
  InputField("jsonInput", "JSON input", "String", { placeholder: "{\"change me\": \"put your JSON input here\"}" }),
  InputField("rawOutput", "Raw output", "Checkbox", { defaultValue: false })
];
registerDynamicValueClass(ProcessWithJQ);
