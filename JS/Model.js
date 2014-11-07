
/*

Product

 */
function Product (prod_name, price, weight) {
    this.productName = prod_name || "HARDWOOD MILL-ENDS";
    this.retailPrice = price || 11.10; //standard retail cost for a single bag of mill ends is determined to be $11.10.
    this.productWeight = weight || 25; //kilograms
}


/*
Sales Order

 */

function SalesOrder(name, item, qty, distance, GST) {
    //members
    var _item = item;  // product item (above)
    var _name = name;  // client name
    var _order_date = dateStamp();  // self described
    var _order_time = timeStamp();  // self described
    var _tele_num = ""; // telephone number of client
    var _address = "";  // address of client
    var _quantity = qty; // number of bags
    var _unit_price = _item.retailPrice; // price per unit defaults to $15 unless specified otherwise
    var _net_value = calculateNetValue(); // the calculated costs associated with the number of bags ordered (eg. quantity * price)
    var _gross_value = calculateGrossValue(); // after applying the calculated costs associated with the number of bags ordered
    var _distance = distance;// the distance in kilometres of the delivery address from the EverWarm depot
    var _logistics_overhead = deliveryCost();   // calculated delivery costs associated with the order
    var _tax_rate = (typeof GST === "undefined") ? 0.1 : GST;   //if (typeof myVariable === 'undefined') { myVariable = 'default'; }
    var _total_cost = totalCost(); // the final value of the whole order including the GST

    this.setPhoneNumber = function(newNumber) {_tele_num = newNumber;};

    this.getPhoneNumber = function() { return _tele_num; };

    this.setAddress = function(Address) {_address = Address; };

    this.getAddress = function() { return _address; };

    this.getQuantity = function() { return _quantity; };

    this.getDistance = function() { return _distance; };

    this.getOrderDate = function() { return _order_date; };

    this.getOrderTime = function() { return _order_time; };

    this.getGST = function() {
        var num;
        num = (_tax_rate * 100).toFixed(1); return num };

    this.setGST = function(tax_rate) { _tax_rate = tax_rate;};

    this.getDeliveryCost = function() { return _logistics_overhead.toFixed(2); };

    this.getGrossValue = function() { return _net_value.toFixed(2); };

    this.getNetValue = function() { return _gross_value.toFixed(2); };

    this.getCustomerName = function() { return _name; };

    this.getTotalCost = function() { return _total_cost.toFixed(2); };

   // this.getRetailPrice = function() { return _unit_price.toFixed(2); };

    function dateStamp() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        return today = dd + '/' + mm + '/' + yyyy;

    }

    function timeStamp() {

        var today = new Date();
        var hour = today.getHours();
        var minutes = today.getMinutes();
        return today = hour + ':' + minutes;

    }

    function deliveryCost() {

        /*

         The charge for a delivery to a location that is less than or equal to twenty kilometres
         from EverWarm’s depot is $20.00, and
         the charge for a delivery to a location that is greater than twenty kilometres from
         EverWarm’s depot is $35.00.


         */

        if (_distance > 20) {

            return 35.00;

        } else {

            return 20.00;

        }

    }


    function bulkDiscount() {

        /*

         If fifty bags or less are ordered, there is no discount.
         If more than fifty bags and less than one hundred bags are ordered, the standard retail
         cost of every bag is discounted by four per cent (4%).
         If one hundred or more bags are ordered, the standard retail cost of each bag is
         discounted by nine per cent (9%).


         */

        var discount;

        if (_quantity <= 50) {
            discount = 0.0;
        }
        else if ((_quantity > 50) && (_quantity < 100)) {

            discount = 0.04;

        } else {

            discount = 0.09;

        }

        return discount;

    }


    function calculateGrossValue() {

        var returnValue;

        var percentile = bulkDiscount();

        var val = _net_value * percentile;

        returnValue = _net_value - val;

        return returnValue;

    }

    function totalCost() {

        var total_cost;

        var pre_tax = _gross_value + _logistics_overhead;

        var tax = pre_tax * _tax_rate;

        total_cost = pre_tax + tax;

        return total_cost;

    }

    function calculateNetValue() {

        var returnValue;

        return returnValue = _quantity * _unit_price;


    }


}

/*

Summary

 The total number of orders so far,
 the total number of bags of mill-ends that are ordered so far,
 the total delivery distance for all orders so far,
 the total delivery costs for all orders so far,
 the total GST for the day’s orders so far, and,
 the total value of all the transactions including GST so far.


 */

function Summary(orders, bags, distance, delivery_costs, GST, total){

    var _orders = orders;
    var _bags = bags;
    var _distances = distance;
    var _delivery_costs = delivery_costs;
    var _gst = GST;
    var _total = total;
    this.getQuantityofOrders = function() { return _orders; };
    this.getQuantityofBags = function() { return _bags; };
    this.getDistances = function() { return _distances; };
    this.getDeliveryCosts = function() { return _delivery_costs; };
    this.getTotalCosts = function() { return _total; };
    this.getTax = function() { return _gst;};
}
