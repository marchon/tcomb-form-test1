import React from "react";
import TreeView from "./drvo/react-bootstrap-treeview.js"
import data1 from "./drvo/data1";
import data from "./drvo/data";
import Order from "./order-model.js";
import t from "tcomb-form";
import makeOptions from "./makeOptions.js";
var Form = t.form.Form;
import "./../styles/style.css";
import moment from "moment";
var NumberEditor = require('./numberEditor/NumberEditor.js');

import {Node, Lvl1Node} from "./order-model.js";

function tb(locals) {
  return (
    <div>
      <input type="text" className="treeText" value={locals.value} 
        onChange={(value => locals.onChange.call(null, value ? value : ""))} />
    </div>
  )
}

function treeTemplate(locals){
  return (
    <TreeView data={data} />
  );
}

var options1 = {
  // fields: {
  //   nodes: {
  //     item: {
  //       fields: {
  //         text: {
  //           template: treeTemplate
  //         }
  //       }
  //     }
  //   }
  // }
  template: treeTemplate

};

var options = {
  item: {
    fields: {
      text: {
        template: tb
      },
      nodes: {
        item: {
          fields: {
            text: {
              template: tb
            }
          }
        }
      }
    }
  }
};

makeOptions(options);
// console.log(options);

class MarkoForm2 extends React.Component {

  constructor() {
    super();
    this.state = {
      value: data
    }
  }
  
  // render() {
  //   return (
  //       // <TreeView data={data} />
  //     <div>
  //       <Form
  //         ref="form"
  //         type={t.list(Node)}
  //         value={this.state.value}
  //         options={options}
  //         onChange={this.onChange.bind(this)}
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
          type={Lvl1Node}
          value={data1}
          options={options1}
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