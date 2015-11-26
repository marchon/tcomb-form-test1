const myTemplate = t.form.Form.templates.textbox.clone({
  renderInput: (locals) => {
    return <input value={locals.value} onChange={value => locals.onChange.call(null, value.target.value)} />
  }
})

var options1 = {
  fields: {
    description: {
      template: myTemplate
    }
  }
};

var data111 = {
  description: "asd",
  isReduction: true
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