// PLEASE NOTE: This assignment was developed on the Chrome, Firefox & Opera browsing clients.

window.addEventListener('load', Hello);

document.forms[0].addEventListener('submit',function(e) { Authorise(e); });

document.getElementById("displayButton").addEventListener('click', DisplaySummary);




/*

 Globals

 */

var sales_orders = [];  //global variables are a properties of window object e.g. window.salesorders

var item = new Product();

/*
 body onload

 */

function Hello() {

    var myTarget = document.getElementById("product");

    myTarget.innerText = "for " + item.productName;

}



/*

 confirm details &

 Authorise():

 All data about orders, whether they are personal or by
 telephone, is to be separately and manually entered into the software by one of the
 company’s sales staff.


 */


function Authorise(e) {

	e.preventDefault();

    var r = window.confirm("Press to confirm that you are a member of the sales staff");
	
    if (r == true) {

        this.Process();

        window.document.forms[0].reset();


    } else {

        window.alert("You pressed Cancel!");

    }

   //return false;   //this line is critical to include, otherwise the page refreshes and information is lost.

}

function Process() {

    if (window.sales_order != undefined) {

        delete window.sales_order;

    } //unset global order item if necessary

    var name = document.getElementById("name").value;

    var telephone = document.getElementById("telephone").value;

    var address = document.getElementById("address").value;

    var qty = document.getElementById("quantity").value;

    var distance = document.getElementById("distance").value;

    window.sales_order = new SalesOrder(name, item, qty, distance);

    window.sales_order.setPhoneNumber(telephone);

    window.sales_order.setAddress(address);

    var str =
        "<head lang='en'><meta charset='UTF-8'>" +
        "<title>EverWarm - Welcome</title> <script src='JS/subscript.js' type='text/javascript'></script><link href='CSS/style' rel='stylesheet'>" +
        "</head><body><h2>Order Summary: </h2><br /><ul><li>Date: " + sales_order.getOrderDate() + "</li><li>Time: " + sales_order.getOrderTime() + "</li>" + "<li>" + sales_order.getCustomerName() +
        "</li>" + "<li>Phone Number: " + sales_order.getPhoneNumber() + "</li>" +
        "<li>Address: " + sales_order.getAddress() + "</li>" +
        "<li>Number of bags: " + sales_order.getQuantity() + "</li>" +
        "<li>Distance: " + sales_order.getDistance() + "</li>" +
        "<li>Gross: $" + sales_order.getGrossValue() + "</li>" +
        "<li>GST: " + sales_order.getGST() + "%" + "</li>" +
        "<li>Total: $" + sales_order.getTotalCost() + "</li>" +
        "</ul><br /><br /> <input type='submit' value='Confirm' name='confirm' id='confirm' title='Click here to confirm the order!' onclick='Confirmed()' />" +
        "&nbsp;&nbsp;&nbsp;<input type='submit' value='Cancel' name='cancel' id='cancel' title='Click here to cancel the order!' onclick='Cancelled()' /> </body>";


    var summary = window.open(this.location.href,'summary','left=20,top=20,width=500,height=500,toolbar=0,resizable=0,titlebar=1');//Internet Explorer returns undefined for this.href - requires this.location.href

    summary.document.write(str);


}


/*

 Close()

 At any time an operator should be able to close or terminate the program, in which case the
 program should automatically display a final Daily-Sales-Summary and then halt. Note that if
 this is done, when the program is restarted all the previous date should be assumed to be lost
 and everything starts again from zero.

 If the operator chooses to exit from the program, it must display a daily sales summary of all
 of the day’s orders before it halts.


 */


function Close() {


    //Display summary on window close() event;

        var summation = getSummary();

        var str =
            "<html><head lang='en'><meta charset='UTF-8'>" +
            "<title>EverWarm - GoodBye</title><link href='CSS/style' rel='stylesheet'>" +
            "</head><body><h2>Summary of Sales Orders: </h2><br /><ul><li>Total number of orders: " + summation.getQuantityofOrders() +
            "</li><li>Total number of bags ordered: " + summation.getQuantityofBags() + "</li>" +
            "<li>Total delivery distance: " + summation.getDistances() +
            "</li>" + "<li>Total delivery cost: $" + summation.getDeliveryCosts() + "</li>" +
            "<li>Total tax: $" + summation.getTax() + "</li>" +
            "<li>Total value of transactions: $" + summation.getTotalCosts() + "</li>" +
            "</ul><br /><br /></body></html>";

        var summary = window.open(this.location.href, "summary", "left=500,top=200,width=500,height=500,toolbar=0,resizable=0,titlebar=1");


        summary.document.write(str);


        //self.close;
        // A tab cannot be closed with JavaScript:
        // This method can only be called on windows that have been opened by a script using the window.open method.

    }

    /*

     DisplaySummary()

     At any time, including the end of
     each day’s business before the program is turned off, the software should produce and display
     a daily-sales-summary report.


     */

    function DisplaySummary() {

        if(sales_orders.length > 0){

        document.getElementById("displayButton").value = "Refresh";

        document.getElementById("summary").value = "";

        var summary = getSummary();

            document.getElementById("summary").value += "Total number of orders: " + summary.getQuantityofOrders() + "\n" +
                "Total number of bags ordered: " + summary.getQuantityofBags() + " bags\n" +
                "Total delivery distance: " + summary.getDistances() + "km \n" +
                "Total delivery cost: $" + summary.getDeliveryCosts() + "\n" +
                "Total tax: $" + summary.getTax() + "\n" +
                "Total value of transactions: $" + summary.getTotalCosts() + "\n";

            document.getElementById("display").style.visibility = 'visible';


        } else {

            window.alert("No orders taken!");

        }


    }
    function getSummary(){

        var num_orders = sales_orders.length;

        var num_bags = 0;

        var total_distance = 0;

        var total_delivery_costs = 0;

        var pre_tax = 0;

        var total = 0;

        var total_GST = 0;

        var summation;

        if (num_orders > 0) {


            for (var i = 0; i < num_orders; i++) {


                num_bags += parseInt(sales_orders[i].getQuantity());

                total_distance += parseInt(sales_orders[i].getDistance());

                total_delivery_costs += parseFloat(sales_orders[i].getDeliveryCost());

                pre_tax += parseFloat(sales_orders[i].getNetValue());

                pre_tax += parseFloat(sales_orders[i].getDeliveryCost());

                total += parseFloat(sales_orders[i].getTotalCost());


            }


            total_GST = (total - pre_tax).toFixed(2);

            total_delivery_costs = total_delivery_costs.toFixed(2);

            total = total.toFixed(2);

            return summation = new Summary(num_orders, num_bags, total_distance, total_delivery_costs, total_GST, total);


        }
    }

/*

 helper functions

 */

function addToList(order) {

    sales_orders.unshift(order);
}

