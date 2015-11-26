import React from "react";
import t from "tcomb-form";
import moment from "moment";
import TreeView from "./drvo/react-bootstrap-treeview.js"
import data from "./drvo/data";
import data1 from "./drvo/data1";
import Order from "./order-model.js";
import {Node, Lvl1Node, Order1, Order2} from "./order-model.js";
import makeOptions from "./makeOptions.js";
var compile = require('uvdom/react').compile;
var NumberEditor = require('./numberEditor/NumberEditor.js');

import "./../styles/style.css";
import "./../styles/bootstrap.css";
// require('react-datagrid/index.css');

var Form = t.form.Form;


const customListTemplate2 = t.form.Form.templates.list.clone({
  renderAddButton: (locals) => {
    // console.log(locals); // locals je sve
    return (
      <a className="myButton" onClick={locals.add.click}>ADD</a>
    );
  },

  renderRow: (locals) => {
    // console.log(locals); // locals je niz buttona i input
    return (
      <div className="listDiv row">
        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-8">
          {locals.input}
        </div>
        
        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4">
          {compile(t.form.Form.templates.list.renderButtonGroup.call(null, locals.buttons))}
          <br />
          <img className="remove" onClick={locals.buttons[0].click}
            src="http://www.globalconversation.org/sites/default/files/imagecache/main_photo_story_page/story/1747/photos/trash.jpg" />
          <img className="upImg" onClick={locals.buttons[1].click}
            src="http://www.designofsignage.com/application/symbol/hands/image/600x600/hand-point-up-2.jpg" />
          <img className="downImg" onClick={locals.buttons[2].click}
            src="http://www.designofsignage.com/application/symbol/hands/image/600x600/hand-point-up-2.jpg" />
        </div>
      </div>
    );
  }


});


var options = {
  fields: {
    items: {
      // item: {  
      //   fields: {
      //     description: {
      //       template: DescriptionTemplate
      //     },
      //     price: {
      //       template: PriceTemplate
      //     }
      //   }
      // },
      template: customListTemplate2
    }
  }
};

var data11 = {
  items:[
  {
    description: "asd",
            price: 11,
            quantity: 100
  },
  {
    description: "qwe",
            price: 69,
            quantity: 666
  }

  ]
}

class MarkoForm3 extends React.Component {

  constructor() {
    super();
    this.state = {
      value: data11
    }
  }

  render() {
    return (
      <div>
        <Form
          ref="form"
          type={Order1}
          options={options}
          value={this.state.value}
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

export default MarkoForm3;