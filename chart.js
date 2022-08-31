
// Getting the csv files and converting to json
d3.csv("line-graph.csv").then(makeLineChart);
d3.csv("allocation.csv").then(makePieChart);


function makeLineChart(values) {
    var Date = values.map(function (d) {
      return d.Date;
    });
    var value = values.map(function (d) {
      return d.Price;
    });
    var BTC = values.map(function (d) {
      return d.Btc;
    });

    var chart = new Chart("myChart", {
      type: "line",
      data: {
        labels: Date,
        datasets: [{
            label: '2RT-Price-Performance',
            data: value ,
            backgroundColor: ["rgba(255, 129, 0, 0.8)"],
            borderColor: ["rgba(255, 129, 0, 1)"],
            borderWidth: 1,
          },
          {
            label: 'Btc-Price-Performance',
            data: BTC ,
            backgroundColor: ["rgba(255, 199, 0, 0.9)"],
            borderColor: ["rgba(255, 199, 0, 0.9)"],
            borderWidth: 1,
            yAxisID:'Percentage'
          },

        ]
      },
      
    options: {

      plugins:{
        legend:{
          display:true
        }
      },
        responsive: true,
        scales: {
          y: {
            grid:{
              display:false
            },
              title: {
                display: true,
                text:'2RT-Price-Performance',
                font: {
                  family: "Turret Road",
                  size: 25,
                  weight: 'bold',
                  lineHeight: 1.2,
                },
                padding: {top: 10, left: 0, right: 0, bottom: 0}
              }
          },
          Percentage: {
            grid:{
              display:true
            },
            beginAtZero: true,
            position: 'right',
            title: {
              display: true,
              text:'Btc-Price-Performance',
              font: {
                family: "Turret Road",
                size: 25,
                weight: 'bold',
                lineHeight: 1.2,
              },
              padding: {top: 10, left: 0, right: 0, bottom: 0}
            }

          },
          x: {
            grid:{
              display:false
            },
              title: {
                display:true,
                text:'date',
                fotSize:100,
                font: {
                  family: "Turret Road",
                  size: 25,
                  weight: 'bold',
                  lineHeight: 1.2,
                },
                padding: {top: 10, left: 0, right: 0, bottom: 0}
              }
          }
      }
    }
    });
  }

  const defaultLegendClickHandler = Chart.defaults.plugins.legend.onClick;

  function newLegendClickHandler(e, legendItem, legend) {
    const index = legendItem.datasetIndex;
    const ci = legend.chart;
    if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = false;
    } else {
        ci.show(index);
        legendItem.hidden = false;
    }
}
 

  function makePieChart(values) {

    var currency = values.map(function (d) {
      return d.currency;
    });
    var amount = values.map(function (d) {
      return d.amount;
    });

    var myChart = new Chart("piechart", {
        type: 'doughnut',
        data: {
            labels: currency,
            datasets: [{
                label: '',
                data: amount,
                backgroundColor: [
                    "rgba(255, 129, 0, 0.8)", "rgba(255, 238, 0, 0.5)", "rgba(102, 49, 0, 0.8)", "rgba(255, 199, 0, 0.8)", 
                ],
                borderColor: [
                    "rgba(255, 129, 0, 1)", "rgba(255, 238, 0, 0.5)", "rgba(255, 129, 0, 1)", "rgba(255, 129, 0, 1)",
                ],
                borderWidth: 1
            }],
            
        },
        options: {
            responsive: true,
            plugins: {
              legend: {
                  onClick: newLegendClickHandler
              }
          }

        }
    });
  }









// var ctx = document.getElementById("myChart");
// var pie = document.getElementById("piechart");
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: [
//             1, 
//             2, 
//             3, 
//             4, 
//             5, 
//             6, 
//             7, 
//             8, 
//             9, 
//             10,
//             11,
//             12,
//             13,
//             14,
//             15,
//             16,
//             17,
//             18,
//             19,
//             20,
//             21,
//             22,
//         ],
//         datasets: [{
//             label: '',
//             data: [
//             0.981810779459562,
//             0.981606855028768,
//             0.600481386823708,
//             0.626231801193748,
//             0.914570208647975,
//             0.814537743612507,
//             0.235377875741741,
//             0.272151179388729,
//             0.547289084420651,
//             0.662383938893407,
//             0.138117644534956,
//             0.374621963248484,
//             0.278777437380796,
//             0.0173600770652519,
//             0.632783921580705,
//             0.239310166408201,
//             0.823830041160261,
//             0.923679225370836,
//             0.932097948725709,
//             0.524056578452647,
//             0.36426300392239,
//             0.583625895490993,
//             ],

//             backgroundColor: [
//                 "rgba(255, 129, 0, 0.8)"
//             ],
//             borderColor: [
//                 "rgba(255, 129, 0, 1)"
//             ],
//             borderWidth: 1
//         }]
//     },

//     options: {
//         responsive: true
//     }
// });


// var myChart = new Chart(pie, {
//     type: 'doughnut',
//     data: {
//         labels: [
//             'BTC', 'ETH', 'Alt-Coin', 'Cash'
//         ],
//         datasets: [{
//             label: '# of Votes',
//             data: [
//                 0.12037037037037,
//                 0.212962962962963,
//                 0.296296296296296,
//                 0.37037037037037
//             ],
//             backgroundColor: [
//                 "rgba(255, 129, 0, 0.8)", "rgba(255, 238, 0, 0.5)", "rgba(102, 49, 0, 0.8)", "rgba(255, 199, 0, 0.8)", 
//             ],
//             borderColor: [
//                 "rgba(255, 129, 0, 1)", "rgba(255, 238, 0, 0.5)", "rgba(255, 129, 0, 1)", "rgba(255, 129, 0, 1)",
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true
//     }
// });