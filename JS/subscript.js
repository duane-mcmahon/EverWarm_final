
function Confirmed(){


    window.opener.addToList(opener.sales_order);//or push().

    window.opener.sales_order = undefined;

    window.alert("Order is confirmed! ");

    self.close();


}

function Cancelled(){


    window.alert("Order is cancelled!");

    self.close();
}

