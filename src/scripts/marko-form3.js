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

var Form = t.form.Form;

// const myTemplate = t.form.Form.templates.textbox.clone({
//   renderInput: (locals) => {
//     return <input value={locals.value} onChange={value => locals.onChange.call(null, value.target.value)} />
//   }
// })

// var options1 = {
//   fields: {
//     description: {
//       template: myTemplate
//     }
//   }
// };

// var data111 = {
//   description: "asd",
//   isReduction: true
// }


function customListTemplate(locals){
  console.log(locals);

  var items = locals.items.map(function(el){
  var obj = el.input.props.value;
        // {el.input}
    return (
      <div>
        <div>

          <b>Description</b>
          <br />
          <input type="text" className="treeText" value={el.input.props.value.description} 
            onChange={function(value){
              obj.description = value.target.value;
              el.input.props.onChange.call(null, obj);
            }} />

          <br />
          <br />

          <b>Price</b>
          <br />
          <NumberEditor
            className="spinner"
            max={100}
            min={0}
            decimals={2}
            onValueChange={function(value){
              obj.price = value;
              el.input.props.onChange.call(null, obj);
            }}
            step={1}
            value={el.input.props.value.price}
            ref="demo-spinner"
          />

          <br />
          <br />

        </div>

        <button type="button" onClick={el.buttons[0].click}>REMOVE</button>
        <hr className="hrList" />
      </div>
    );
  });

  return (
    <div> 
        {items}
        <button type="button" onClick={locals.add.click}>ADD</button>
    </div>
  );
}

function DescriptionTemplate(locals){
    return (
      <div>
        <b>{locals.label}</b>
        <br />
        <input type="text" className="treeText" value={locals.value} 
          onChange={(value => locals.onChange.call(null, value ? value.target.value : ""))} />
      </div>
  );
}

function PriceTemplate(locals){
  return (
   <div>
    <b>{locals.label}</b>
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
  );
}

function asdTemplate(locals){
  console.log(locals);
  return (<div>asd</div>);
}


const customListTemplate2 = t.form.Form.templates.list.clone({
  renderAddButton: (locals) => {
    console.log(locals); // locals je sve
    return (
      <a className="myButton" onClick={locals.add.click}>ADD</a>
    );
  },

  // renderFieldset: (locals) => {
  //   console.log(locals); // locals je niz redova + addBtn ... nema buttonGroup
  //   return (
  //     <div>
  //       {locals[0]}
  //     </div>
  //   );
  // },

  // renderButtonGroup: (locals) => {
  //   // console.log(locals); // locals je niz buttona
  //   return (
  //     <div> asd </div>
  //   );
  // },

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