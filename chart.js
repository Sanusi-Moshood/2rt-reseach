var ctx = document.getElementById("myChart");
var pie = document.getElementById("piechart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7, 
            8, 
            9, 
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
        ],
        datasets: [{
            label: '# of Votes',
            data: [
            0.981810779459562,
            0.981606855028768,
            0.600481386823708,
            0.626231801193748,
            0.914570208647975,
            0.814537743612507,
            0.235377875741741,
            0.272151179388729,
            0.547289084420651,
            0.662383938893407,
            0.138117644534956,
            0.374621963248484,
            0.278777437380796,
            0.0173600770652519,
            0.632783921580705,
            0.239310166408201,
            0.823830041160261,
            0.923679225370836,
            0.932097948725709,
            0.524056578452647,
            0.36426300392239,
            0.583625895490993,
            ],

            backgroundColor: [
                "rgba(255, 129, 0, 0.8)"
            ],
            borderColor: [
                "rgba(255, 129, 0, 1)"
            ],
            borderWidth: 1
        }]
    },

    options: {
        responsive: true
    }
});


var myChart = new Chart(pie, {
    type: 'doughnut',
    data: {
        labels: [
            'BTC', 'ETH', 'Alt-Coin', 'Cash'
        ],
        datasets: [{
            label: '# of Votes',
            data: [
                0.12037037037037,
                0.212962962962963,
                0.296296296296296,
                0.37037037037037
            ],
            backgroundColor: [
                "rgba(255, 129, 0, 0.8)", "rgba(207, 105, 0, 0.8)", "rgba(102, 49, 0, 0.8)", "rgba(255, 199, 0, 0.8)", 
            ],
            borderColor: [
                "rgba(255, 129, 0, 1)", "rgba(255, 129, 0, 1)", "rgba(255, 129, 0, 1)", "rgba(255, 129, 0, 1)",
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});