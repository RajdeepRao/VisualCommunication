# VisualCommunication
/*
Rajdeep Rao (800972470)
Prasanna Lalingkar (800936073)
*/


The dataset we have used for this assignment is of the 'Toxic Release Inventory'
I have further shortened our dataset by only taking the data consensus for the
year 2015. Namely: TRI_2015_US.csv

Industrial facilities that meet Toxics Release Inventory (TRI) Program reporting
requirements submit their data to the EPA. The TRI Basic Data Files contain the
reporting form data elements most frequently requested by TRI data users, including
the quantities of toxic chemicals released into the environment on site at facilities;
the quantities transferred off site to other facilities; and summary data
concerning releases, recycling, energy recovery and treatment.

Each row has 109 columns. For simplicity's sake we are going to be focussing only
on 3 of them, namely 'CARCINOGEN', 'CLEAR_AIR_ACT_CHEMICAL' and 'Petroleum Bulk Terminals'
Since the comparisons and scope of this could be plenty, for the purpose of an assignment,
we decided to restrict ourselves to the three of these that felt most intuitive.

We started off with another dataset, got our hands dirty and then made our way to this.
We didn't have to do much pre processing. We let the undefined values be as is and handled
it in the front end.

Each of our visualizations have 4 files in them and the dataset.

Visualization method:

We have a driver method and another file called uStates.js that draws the
visualization for us. The driver method loads the data from the csv and cleans
it, a little bit before passing it onto our service that draws the map and colors
it according to the input. This means we read the data, store it in an array of
dicts and then process it to aggregate the values. We then normalize our values,
so that we get them in a range where we can intrapolate on our colors. We pass
this processed value to the service. The service has a bunch of Geo Location
co ordinates that we use to plot our map with. We use the processed data that
also has embedded in it the color values. It also shows the Yes and No values on
hovering over the state.

Execution steps:
This was done on a Mac, so on any UNIX based system:
1. cd into the directory with the files in them
2. python -m SimpleHTTPServer
3. double click on the .html file

* Please Note *
Since we're using JS to make calls to load the CSV, the browser might freak out
due to Cross Site Origin Requests. Since this check is in place, kindly turn that
off. The best way is to download a plugin that would turn it off for you on your
browser.
