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

function asdTemplate(locals){
  console.log(locals);
  return (<div>asd</div>);
}