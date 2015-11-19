import React from "react";
import TreeView from "./drvo/react-bootstrap-treeview.js"
import data1 from "./drvo/data1";
import data from "./drvo/data";
import Order from "./order-model.js";
import t from "tcomb-form";
var Form = t.form.Form;
import "./../styles/style.css";
import moment from "moment";
var NumberEditor = require('./numberEditor/NumberEditor.js');

import {Node, Lvl1Nodes} from "./order-model.js";

var Person = t.struct({
  name: t.String,
  surname: t.String,
  age: t.Number,
});

function age(locals) {

  return (
        <div>
          {locals.label}
          <br />
          <NumberEditor
            className="spinner"
            max={100}
            min={0}
            decimals={2}
            onValueChange={(value) => locals.onChange.call(null, value ? value : 0)}
            step={1}
            value={locals.value}
            ref="demo-spinner"
          />
        </div>
  )
}

var options = {
    fields: {
        age: {
          template: age,
          label: "age"
        },

    }
};

function tb(locals) {
  return (
    <div>
      <input type="text" className="treeText" value={locals.value} 
        onChange={(value => locals.onChange.call(null, value ? value : ""))} />
    </div>
  )
}

var options1 = {
  // item: {
  //   fields: {
  //     text: {
  //       template: tb
  //     },
  //     nodes: {
  //       item: {
  //         fields: {
  //           text: {
  //             template: tb
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
};

makeOptions();

function makeOptions(){
  var pomOpt1 = {};
  var pomOpt2 = {};
  for (var i = 0; i < dubina(data); i++) {
    if(i == 0)
      pomOpt1 = dodaj(options1, 0);

    else {
      pomOpt2 = dodaj(pomOpt1, 1);
      pomOpt1 = pomOpt2;
    }
  }

  function dodaj(pomOpt1, prviLvl){
    var pomOpt2 = pomOpt1;
    if(prviLvl == 1){
      pomOpt1.nodes = {};
      pomOpt2 = pomOpt1.nodes;
    }
    pomOpt2.item = {};
    pomOpt2.item.fields = {};
    pomOpt2.item.fields.text = {};
    // pomOpt2.item.fields.text.template = tb;
    pomOpt2.item.fields.text.attrs = {};
    pomOpt2.item.fields.text.attrs.className = "treeText";
  
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


class MarkoForm2 extends React.Component {

  constructor() {
    super();
    this.state = {
      value: data
    }
  }
  

  // render() {
  //   return (
  //     <div>
  //       <Form
  //         ref="form"
  //         type={Lvl1Nodes}
  //         value={data1}
  //         options={options1}
  //       />
  //       <button onClick={this.save.bind(this)}>Save</button>
  //     </div>
  //   );
  // }
  
  render() {
    return (
      <div>
        <Form
          ref="form"
          type={t.list(Node)}
          value={this.state.value}
          options={options1}
          onChange={this.onChange.bind(this)}
        />
        <button onClick={this.save.bind(this)}>Save</button>
      </div>
    );
  }

  onChange(value, path, kind){
    console.log(value);
    this.setState({value:value});
  }

  save() {
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }


}

export default MarkoForm2;