import data from "./drvo/data";

function makeOptions(options){
  var pomOpt1 = {};
  var pomOpt2 = {};
  for (var i = 0; i < dubina(data); i++) {
    if(i == 0)
      pomOpt1 = dodaj(options, 0);

    else {
      pomOpt2 = dodaj(pomOpt1, 1);
      pomOpt1 = pomOpt2;
    }
  }

  function dodaj(pomOpt1, prviLvl){
    var pomOpt2 = pomOpt1;
    if(prviLvl == 1){
      pomOpt1.nodes ? null : pomOpt1.nodes = {};
      // pomOpt1.nodes = {};
      pomOpt2 = pomOpt1.nodes;
    }
    pomOpt2.item ? null : pomOpt2.item = {};
    pomOpt2.item.fields ? null : pomOpt2.item.fields = {};
    pomOpt2.item.fields.text ? null : pomOpt2.item.fields.text = {};
    // pomOpt2.item.fields.text.template = tb;
    pomOpt2.item.fields.text.attrs ? null : pomOpt2.item.fields.text.attrs = {};
    pomOpt2.item.fields.text.attrs.className ? null : pomOpt2.item.fields.text.attrs.className = "treeText";
    
    // pomOpt2.item = {};
    // pomOpt2.item.fields = {};
    // pomOpt2.item.fields.text = {};
    // pomOpt2.item.fields.text.attrs = {};
    // pomOpt2.item.fields.text.attrs.className = "treeText";
  
    return pomOpt2.item.fields;
  }

  function dubina(data) {

    return (function dubina1(node) {
      if(node!=data && !node.nodes)
        return 1;

      var dubine = [];
      Array.prototype.forEach.call(node!=data ? node.nodes : node, function(el) {
        dubine.push(el);
      });
  
      return Math.max(...dubine.map(el => dubina1(el))) + 1;
  
    }(data));

  }

}

export default makeOptions;