/**
 * Created by mnedeljkovic on 10/31/2015.
 */
import t from "tcomb-form";

var PositiveNumber = t.refinement(t.Number, function (n) {
    return n >= 0;
});
PositiveNumber.getValidationErrorMessage = function(value, path, context) {
    console.log("Invalid positive number: ");
    console.log({value, path, context});
    return value + " is not a valid positive number";
}

var OrderStatus = t.enums({
    "REG": "Registered",
    "FIN": "Finished"
})

var PaymentMethods = t.enums({
    "CRD": "Credit card",
    "DBT": "Debit card",
    "PPL": "Paypal",
    "CSH": "Cash"
})

var Address = t.struct({
    street: t.String,
    number: t.String,
    city: t.String,
    zip: t.maybe(t.String),
    country: t.String
});



export const Node = t.struct({
    text: t.String,
    nodes: t.Any
}, "Node");
Node.meta.props.nodes = t.maybe(t.list(Node));

export const Lvl1Node = t.struct({
    nodes: t.list(Node)
});



var OrderItem = t.struct({
    description: t.String,
    price: t.Number,
    quantity: PositiveNumber
});

var OrderItem1 = t.struct({
    description: t.String,
    price: t.Number
})

var Order = t.struct({
    description: t.String,
    activatedDate: t.Date,
    isReduction: t.Boolean,
    status: OrderStatus,
    billingAddress: Address,
    items: t.list(OrderItem),
    payments: t.list(PaymentMethods)
});

export const Order1 = t.struct({
    items: t.list(OrderItem1),
    asd: t.String
});

export const Order2 = t.struct({
    description: t.String,
    isReduction: t.Boolean,
});

export default Order;
