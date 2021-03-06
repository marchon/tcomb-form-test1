// polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// normalize.css
require('normalize.css');
import "./../styles/bootstrap.css";
import "./../styles/react-bootstrap-treeview.css";

// require your app here
require('debug-dude')('service').warn('require your app entry point plz');

import React from "react";
import ReactDOM from "react-dom";

import ReactTabs from "react-tabs";
var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

import BasicOrderForm from "./basic-order-form.js";
import OptionsOrderForm from "./options-order-form.js";
import CustomOrderForm from "./custom-order-form.js";
import MarkoForm from "./marko-form.js";
import MarkoForm2 from "./marko-form2";
import MarkoForm3 from "./marko-form3";
import DataGrid1 from "./dataGrid1.js"

import ZavrsavanjeZadatkaOdrzavanja from "./upravljanje-zadacima-odrzavanja/zavrsavanje/view.js";

class App extends React.Component {
    render() {
        return (
            <Tabs selectedIndex={5}>
                <TabList>
                    <Tab>Basic</Tab>
                    <Tab>Options</Tab>
                    <Tab>Custom</Tab>
                    <Tab>Marko</Tab>
                    <Tab>Marko2</Tab>
                    <Tab>Marko3</Tab>
                    <Tab>DataGrid1</Tab>
                    <Tab>Zavrsavanja zadatka odrzavanja</Tab>
                </TabList>
                <TabPanel>
                    <BasicOrderForm />
                </TabPanel>
                <TabPanel>
                    <OptionsOrderForm />
                </TabPanel>
                <TabPanel>
                    <CustomOrderForm />
                </TabPanel>
                <TabPanel>
                    <MarkoForm />
                </TabPanel>
                <TabPanel>
                    <MarkoForm2 />
                </TabPanel>
                <TabPanel>
                    <MarkoForm3 />
                </TabPanel>
                <TabPanel>
                    <DataGrid1 />
                </TabPanel>
                <TabPanel>
                    <ZavrsavanjeZadatkaOdrzavanja />
                </TabPanel>
            </Tabs>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
