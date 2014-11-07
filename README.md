EverWarm_final
==============

an assignment undertaken in 2014:

COS10012 PROGRAMMING CONCEPTS, STUDY PERIOD THREE, 2014.
The EverWarm Project Scenario
Page 1 of 8
Swinburne University of Technology
Faculty of Higher Education, Lilydale
COS10012 Programming Concepts
Study Period Three, 2014
The EverWarm Project Scenario
(For use with Assessment Task Four)
Contents
1. Critical information, support and assistance .................................................................................... 2
2. Background to the EverWarm Fuel Merchants company ............................................................. 3
3. Ms Petrelli’s description of the requirements for the EverWarm sales quotation and
reporting system. ....................................................................................................................................... 4
4. Sample orders and calculations: .......................................................................................................... 7
COS10012 PROGRAMMING CONCEPTS, STUDY PERIOD THREE, 2014.
The EverWarm Project Scenario
Page 2 of 8
1. Critical information, support and assistance
In Assessment Task Four of COS10012 you are required to carry out a software development
task that uses an effective development process and associated programming techniques to
develop and document a software product that meets a set of given requirements. You can
choose to do this project individually or as a member of a team of two students (no more).
This document presents the customer’s requirements for the proposed software
product to be developed over the course of Assessment Task Four of the unit
COS10012 Programming Concepts.
Questions and discussion about the technical aspects of this scenario should be made to the
unit-wide on-line discussion forums for consideration by the staff and all students. Relevant
private questions can be sent via e-mail to either the unit convener or to your tutor.
Note that the company and scenario described in this are completely fictional.
COS10012 PROGRAMMING CONCEPTS, STUDY PERIOD THREE, 2014.
The EverWarm Project Scenario
Page 3 of 8
2. Background to the EverWarm Fuel Merchants company
(Please note that EverWarm is a hypothetical company and that some details of this scenario are
simplified to suit the requirements of the COS10012 learning outcomes).
EverWarm Fuel Merchants is a private company owned and managed by Ms. Angellina Petrelli.
The company buys large, bulk amounts of waste timber known as ‘mill-ends’ from timber
mills. These are weighed and bagged into twenty-five kilogram lots by EverWarm and sold to
its retail customers as a heating fuel.
A mill-end is a small piece of waste that is left after a saw mill has processed a piece of ‘raw’
forest lumber to produce a finished piece of timber that has a standard cross section and
length. For example if a piece of milled 100mm x 50 mm timber is 3.9 metres long but must
be cut to the standard length of 3.6 metres, a short piece 300mm long will be left - this is an
example of a mill-end. The two images shown below might help.
Bagged mill ends.
Image source:– gumtree.com, viewed 1
st
August 2012,
< http://www.gumtree.com.au/s-ad/james-creek/other-homegarden/firewood-hardwood-mill-ends-and-split/1005090770 >
Bagged and stacked mill endds.
Image source:– gumtree.com, viewed 1
st
August 2012,
< http://www.gumtree.com.au/s-ad/james-creek/other-homegarden/firewood-hardwood-mill-ends-and-split/1005090770 >
EverWarm makes a number of retail sales transactions every day. Since it began, the
company has been using a manual, paper-based system to document the details of each sale,
but over recent years the company’s daily sales have grown to the point that the old manual
system has become too cumbersome and too slow. For some time Ms. Petrelli has been
considering how EverWarm could use information technology to help it manage the recording
and reporting aspects of its retail sales system. It appears that software that can run on one
of the company’s desktop computers (currently using Intel and Microsoft technology) will
reduce the problems.
Neither Ms. Petrelli nor any other of her staff has enough IT experience or skills to produce
suitable computer software in-house. As a result Ms Petrelli has been advised that she should
write down everything that she and her staff want this particular program to do and that this
description could then be used by analysts and developers - who have not yet been employed
or contracted - to develop an actual program.
After discussions with her staff, she has developed a narrative description of EverWarm’s
requirements. This is shown in the next section.
COS10012 PROGRAMMING CONCEPTS, STUDY PERIOD THREE, 2014.
The EverWarm Project Scenario
Page 4 of 8
3. Ms Petrelli’s description of the requirements for the EverWarm sales
quotation and reporting system.
(Please note that EverWarm is a hypothetical company and that some details of this scenario are simplified to
suit the requirements of the COS10012 learning unit).
These notes describe the company’s requirements only for this particular product. The notes
ignore any other needs for computer hardware or software. I (Ms. Petrelli) have discussed the
relevant business processes and needs with members of my staff and produced these notes (the
paragraphs are numbered for easy reference). Some example calculations are shown later in
Section 4 of this document.
General Information:
1. EverWarm sells sawn mill-ends derived from the offcuts from the saw-milling of hardwood
(eucalyptus). The mill-ends are sold already packaged in twenty-five Kilogram bags. The
final cost of an order depends on the number of bags sold in each order – discounts apply for
large orders, and to the distance of the delivery.
2. Each day that the company is open for business, it completes a number of sales transactions.
Each sale is for a specified number of bags of mill-ends, to be delivered to a specified address.
For health and safety reasons all bags of mill-ends are delivered, customers cannot pick up
their orders from the EverWarm depot. With the current system, some customers make
orders in person at the EverWarm depot, and others order by telephone. There is no
provision for on-line ordering. The information about each order is manually processed by
employees of EverWarm.
3. The proposed software will not have any impact on the physical processes associated with
collecting, weighing and bagging of the mill ends that are to be sold. Bags of mill ends to
meet a particular order will be assembled, loaded and delivered manually by staff of
EverWarm.
4. The current ‘basic’ costs paid by EverWarm to its suppliers are $250.00 for each metric tonne
of hardwood mill ends. From this metric tonne (1000 Kg) the company is able to produce
thirty-six (36) bags of mill-ends for sale. These are twenty-five kilogram bags – there are
some losses due to poor quality timber and packing limits. EverWarm adds an on-cost and
profit amount of sixty per cent (60%) of this ‘bagged’ price to calculate the standard retail
price of a single bag. Using these figures the ‘bagged’ value of a single bag of mill ends is
calculated to be $6.94. Including the on-cost and profit amount, the standard retail cost for a
single bag of mill ends is determined to be $11.10.
5. Bulk discounts: EverWarm maintains a policy of offering discounts on large orders of millends.
These discounts are applied to the standard retail cost of mill ends only (not to delivery
costs or to GST). The following discount rates are offered:
If fifty bags or less are ordered, there is no discount.
If more than fifty bags and less than one hundred bags are ordered, the standard retail
cost of every bag is discounted by four per cent (4%).
If one hundred or more bags are ordered, the standard retail cost of each bag is
discounted by nine per cent (9%).
6. Delivery costs. For safety reasons EverWarm always delivers its produce to its clients, and
there is a standard delivery charge for each order, based on distance. This is calculated as
follows:
The charge for a delivery to a location that is less than or equal to twenty kilometres
from EverWarm’s depot is $20.00, and
the charge for a delivery to a location that is greater than twenty kilometres from
EverWarm’s depot is $35.00.
7. By law, all retail sales are subject to an additional amount for a goods and services tax (GST)
that is to be accumulated and passed on at regular intervals to the federal government’s
taxation office. The current rate for the goods and services tax (GST) is ten per cent (10%)
and is assumed to be constant, although it may be changed in the future. It is company
policy (like in most organisations) that the customer will pay the extra cost of the GST
payable on the order.
COS10012 PROGRAMMING CONCEPTS, STUDY PERIOD THREE, 2014.
The EverWarm Project Scenario
Page 5 of 8
The current manual system:
8. With the current manual system, a company employee records in writing on a paper order
form the following information about each order:
the date and time of the order,
the customer’s name,
the customer’s contact telephone number,
the customer’s delivery address, and
the number of bags of mill-ends to be delivered.
9. In the current system, after the customer information is entered onto the order form, the
employee calculates the total value of the order (the value of the bags of mill ends, less any
discounts, plus delivery costs, plus the goods and services tax) and writes this amount onto
the order form. These calculations are done using pen and paper with the assistance of
electronic calculators and look-up tables.
10. In the current system , after the purchase and delivery price of of an order has been
calculated (including the GST), the customer is billed, and the order is passed to the storage
warehouse where the order is made up, loaded and sent for delivery.
11. In the current system, at the end of each day a senior employee takes all of the individual
paper sales records for that day and tallies the information to produce a single Daily-Sales-
Summary. This daily-sales-summary is a written paper-based document and it presents the
following information:
the total number of orders taken during the day,
the total number of bags of mill-ends that are sold during the day,
the total value of all the orders taken during the day, and
the total amount of the goods and services tax (GST) for the day.
The proposed new system:
12. In its proposed new system, EverWarm wants a computer program that will allow its salespeople
to enter the details of each individual order into the computer and that will calculate
and display the financial details of the individual order. Also, at any time, including the end of
each day’s business before the program is turned off, the software should produce and display
a daily-sales-summary report.
13. In the new system the company would like to manage orders made at the depot and by
telephone, but not by e-mail. All data about orders, whether they are personal or by
telephone, is to be separately and manually entered into the software by one of the
company’s sales staff. Customers will not be able to directly enter an order into the system.
14. In the new system the software will be operated by the sales staff of EverWarm sharing a
single personal computer located behind the sales counter. At this stage of company
development, this computer will not be connected to a computer network or to a printer, it
stands alone. Because the company plans to expand its computer system in the future by
creating its own company-wide intranet, the computer program should be developed as a web
page (or pages). These will be installed on the single computer and used as ‘local’ web
pages. This may allow for later expansion across an intranet.
15. The software must be implemented using the JavaScript programming language, with its user
interface implemented as a web page written using the HTML and supported by the use of
cascading style sheets (CSS).
16. The software should treat the GST rate as a constant, but it should be included in a way that
lets programmers easily modify the rate on the rare times that the government declares
changes.
17. Developers should assume that the program will be restarted at the beginning of each
working day and that at the start of each day, all the input and output data values used or
created should be set to zero, with the exception of the basic cost per bag of mill-ends and
COS10012 PROGRAMMING CONCEPTS, STUDY PERIOD THREE, 2014.
The EverWarm Project Scenario
Page 6 of 8
the GST rate. The program will be halted at the end of each day (see below about the Daily
Sales Summary). See also point 23 below.
18. As each sales order is made, the staff need to be able to enter the following information into
the new software system:
The name of the client,
the telephone contact number for the client,
the delivery address for the order,
the number of bags of mill-ends that are sold, and,
the distance in kilometres from the EverWarm depot of the delivery address.
19. As each sales order is made, the program itself should add the date and time of the order,
based on the current date and time used by the computer’s operating system.
20. As each order is entered, the software should indicate to the operator if there are any data
entry errors and give the operators an opportunity to change the data entry to correct the
errors.
21. When the data entry for an order is completed, the operator should be able to:
process the data entry - do the calculations and present the output to the operator (see
below), or,
cancel the data entry - empty all of the data entry fields ready to begin again with the
same order or with a new order.
22. At any time during the day an operator should be able to request a Daily-Sales-Summary for
all of the day’s transactions processed so far (see below).
23. At any time an operator should be able to close or terminate the program, in which case the
program should automatically display a final Daily-Sales-Summary and then halt. Note that if
this is done, when the program is restarted all the previous date should be assumed to be lost
and everything starts again from zero. See also point 17 above.
24. If the operator chooses to exit from the program, it must display a daily sales summary of all
of the day’s orders before it halts.
25. When the program processes a single order, all of the following information should be
displayed to the operator
The date and time of the order,
the name of the client,
the telephone contact number for the client,
the delivery address for the order,
the number of bags of mill-ends that are sold,
the distance in kilometres of the delivery address from the EverWarm depot,
the calculated costs associated with the number of bags ordered,
the distance in kilometres of the delivery address from the EverWarm depot,
the calculated delivery costs associated with the order,
the calculated goods and services tax (GST) that is applicable to the order, and,
the final value of the whole order including the GST.
26. Whenever the program displays a Daily-Sales-Summary of the whole day’s transactions to the
operator, the following information should be displayed (output) to the operator.
The total number of orders so far,
the total number of bags of mill-ends that are ordered so far,
the total delivery distance for all orders so far,
the total delivery costs for all orders so far,
the total GST for the day’s orders so far, and,
the total value of all the transactions including GST so far.
27. All financial amounts should be rounded to two decimal places and displayed as dollars and
cents in the format $dd.cc
COS10012 PROGRAMMING CONCEPTS, STUDY PERIOD THREE, 2014.
The EverWarm Project Scenario
Page 7 of 8
28. All calculated fractional amounts that are displayed should be displayed rounded to two
decimal places.
29. All calculated whole number amounts that are displayed should be displayed as whole
numbers (zero decimal places).
30. The following conditions have been identified as being data entry errors:
Any expected character string that is empty (e.g. it contains no characters),
Any expected numerical value that is input as a character string,
Any specified numerical value that is less than zero,
Any value for the number of bags of mill-ends that is not a whole number.
31. The management of EverWarm Fuel Merchants retains the right to modify any part of the
above description and will provide quick notification to the developers if any changes are
made.
Signed:
Angellina Petrelli,
1st February 2014;
Owner and manager, EverWarm Fuel Merchants.
4. Sample orders and calculations:
These sample calculations are provided to help you understand the calculation of costs etc.
associated with individual orders. They are based upon the discount rules, delivery costs and GST
rate described in section 3 above.
Example case 1:
A client purchases 24 bags of mill-ends to be delivered to a house 12km away from the EverWarm
depot.
Cost of 24 bags = 24 x $11.10 = $266.40
Because 50 bags or less have been ordered there is no bulk discount.
Because the distance of the delivery is less than 20 kilometres, the delivery cost is $20.00
Cost of supply without GST = 266.40 + 20.00 = $286.40
The current GST rate is 10% = 0.10
GST amount is $286.40 x 0.10 = $28.64
Final cost of supply including GST = 286.40 + 28.64 = $315.04
Example case 2:
A client purchases 230 bags of mill-ends to be delivered to a house 52km away from the
EverWarm depot.
Cost of 230 bags = 230 x $11.10 = $2553.00
Because more than 100 bags have been ordered there is a 9% discount (9% = 0.09)
Discounted cost of 230 bags of mill-ends = $2553.00 x 0.91 = $2323.23
Because the distance of the delivery is more than 20 kilometres, the delivery cost is $35.00
Cost of supply without GST = 2323.23 + 35.00 = $2358.23
The current GST rate is 10% = 0.10
GST amount is $2358.23 x 0.10 = $235.82
Final cost of supply including GST = 2358.23 + 235.82 = $2594.05
COS10012 PROGRAMMING CONCEPTS, STUDY PERIOD THREE, 2014.
The EverWarm Project Scenario
Page 8 of 8
Example case 3:
A client purchases 50 bags of mill-ends to be delivered to a house 20km away from the EverWarm
depot.
Cost of 50 bags = 50 x $11.10 = $555.00.
Because 50 bags or less have been ordered there is no bulk discount.
Because the distance of the delivery is less than or equal to 20 kilometres, the delivery cost is
$20.00.
Cost of supply without GST = 555.00 + 20.00 = $575.00.
The current GST rate is 10% = 0.10
GST amount is $575.00 x 0.10 = $57.50
Final cost of supply including GST = 575.00 + 57.50 = $632.50

