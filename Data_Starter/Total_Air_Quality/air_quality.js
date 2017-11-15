d3.csv("http://localhost:8000/TRI_2015_US.csv", function(data) {
  //console.log(data[0]["ST"])
	console.log(data[0])
	var states = {}
	for(var i=0; i<data.length; i++){
		if(data[i]["CLEAR_AIR_ACT_CHEMICAL"] == "YES"){
		//if(data[i]["CARCINOGEN"] == "YES"){
			if(states[data[i]["ST"]]==undefined)
				states[data[i]["ST"]] = {"YES":1, "NO":0};
			else {
				var temp = states[data[i]["ST"]];
				temp["YES"]++;
				states[data[i]["ST"]] = temp;
			}
		}
		else{
			if(states[data[i]["ST"]]==undefined)
				states[data[i]["ST"]] = {"YES":0, "NO":1};
			else {
				var temp = states[data[i]["ST"]];
				temp["NO"]++;
				states[data[i]["ST"]] = temp;
			}
		}
	}

	function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
		return "<h4>"+n+"</h4><table>"+
			"<tr><td>Yes</td><td>"+(d["Yes"])+"</td></tr>"+
			"<tr><td>No</td><td>"+(d["No"])+"</td></tr>"+
			"</table>";
	}
	var bench_max = 0
	var bench_min = 0

	for(var obj in states){
		var no=states[obj]["NO"],
			yes=states[obj]["YES"];
		var val = yes/(yes+no)
		console.log(val)
		bench_max = bench_max>val? bench_max:val;
	}
	console.log(bench_min)
	console.log(bench_max)
	var sampleData ={};
	//console.log(states)
	for(var obj in states){
		var no=states[obj]["NO"],
			yes=states[obj]["YES"];
		sampleData[obj]={Yes:yes, No:no,
				color:d3.interpolate("#b70511", "#0b9ac1")( ( ((yes)/(yes+no)) - 0.5)/(bench_max-0.5) )};
				//color:d3.interpolate("#11c3f9", "#fc2a35")( ( ((yes)/(yes+no)) )/(0.45) )};

	}
	console.log(sampleData)
	/*["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
	"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
	"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
	"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
	"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
		.forEach(function(d){
			var low=Math.round(100*Math.random()),
				mid=Math.round(100*Math.random()),
				high=Math.round(100*Math.random());
			sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]),
					avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffcc", "#800026")(low/100)};
		});*/

	/* draw states on id #statesvg */
	uStates.draw("#statesvg", sampleData, tooltipHtml);

	d3.select(self.frameElement).style("height", "600px");
});
