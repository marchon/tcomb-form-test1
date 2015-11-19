import React from "react";
import TreeView from "./drvo/react-bootstrap-treeview.js"
import data from "./drvo/data";
import Order from "./order-model.js";


import t from "tcomb-form";
var Form = t.form.Form;

import DatePicker from "react-datepicker";
import "./../styles/react-datepicker.css";
import moment from "moment";

var options = {
    fields: {
        activatedDate: {
            label: <span>Activated date <b>(custom field template)</b></span>,
            error: "not a valid value",
            template: datepicker
        }
    }
};


function isNull(value) {
    if (value == null)
        return true;

    return (value.length) && (value.every((item) => item == null));
}

function datepicker(locals) {
    console.log(locals);
    // console.log(moment(locals.value));

    var value = (isNull(locals.value) ? null : locals.value);
    console.log(value);
    return (
        <div>
            <div style={{color: (locals.hasError) ? "red" : "black"}}>{locals.label}</div>
            <DatePicker
                selected={value && moment(value)}
                onChange={(value) => locals.onChange.call(null, (value) ? value.toArray() : [null, null, null])}
                isClearable={true}/>
            <div style={{color: "red"}}>{(locals.hasError) ? locals.error : null}</div>
        </div>
    )
}

// function onTestDateChange(date) {
//     console.log(date);
//     this.setState({testDate: date});
// }

class MarkoForm extends React.Component {

    render() {
        return (
            <div>
            	<TreeView data={data} color={"#428bca"} />
            	<div>
                	<Form
                    	ref="form"
                    	type={Order}
                    	options={options}
                    />
                	<button>Save</button>
            	</div>
            </div>
        );
    }
}

export default MarkoForm;