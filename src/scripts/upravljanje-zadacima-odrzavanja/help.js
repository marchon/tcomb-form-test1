
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

var options1 = {
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