function initChart3(id) {
    const ctx = document.getElementById(id).getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 0, 0);

    const myChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1d', '1d', '1d', '2d', '2d', '2d', '3d', '3d', '3d', '4d', '4d', '4d', '5d', '5d', '5d', '6d', '6d', '6d', '7d', '7d', '7d', '8d', '8d', '8d', '9d', '9d', '9d', '10d', '10d', '10d', ],
            datasets: [{
                backgroundColor: [
                    gradient
                ],
                data: [100, 400, 450, 420, 400, 60, 100, 500, 450, 500, 420, 80, 50, 320, 400, 550, 480, 100, 70, 490, 430, 460, 490, 60, 60, 200, 350, 410, 400],
                // 21
                borderWidth: 1,
                borderColor: '#0094FF',
                radius: 0,
                hitRadius: 20,
                hoverRadius: 7,
                hoverBackgroundColor: "#0094FF",
                hoverBorderWidth: 0,
            }, ],
        },
        options: {
            /* spanGaps: 1000 * 60 * 60 * 24 * 10, */
            responsive: true,

            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    padding: {
                        left: 20,
                        top: 20,
                        right: 20,
                        bottom: 20
                    },
                    backgroundColor: 'rgba(60, 66, 84, 0.5)',
                    borderWidth: 1,
                    borderColor: "#3C4254",
                    caretSize: 0,
                    usePointStyle: true,
                    callbacks: {
                        label: function (context) {
                            let index = context.dataIndex - 1;
                            let precent;

                            if (index >= 0) {
                                let prevNum = context.dataset.data[index];
                                let currentNum = context.parsed.y;

                                if (prevNum <= currentNum) {
                                    precent = (((currentNum - prevNum) / prevNum) * 1 ).toFixed(2) + "%";
                                } else if (prevNum > currentNum) {
                                    precent = -(((prevNum - currentNum) / prevNum) * 1).toFixed(2) + "%";
                                }
                            } else {
                                precent = "0%";
                            }
                            return precent;
                        },
                        labelColor: function (context) {
                            return {
                                borderColor: '#11CABE',
                                backgroundColor: '#11CABE',
                                borderWidth: 0,
                            };
                        },

                        labelPointStyle: function (context) {
                            return {
                                pointStyle: 'triangle',
                                rotation: 0
                            };
                        }
                    }
                },
            },
            scales: {
                y: {
                    grid: {
                        color: '#282C38',
                        tickWidth: 0,
                        borderWidth: 0,
                        borderDash: [10, 5]
                    },
                    ticks: {
                        color: "#3C4254",
                        font: {
                            size: 14,
                        },
                        stepSize: 200,
                        padding: 20,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#3C4254",
                        font: {
                            size: 14,
                        },
                        padding: 10,
                        maxTicksLimit: 10,
                        stepSize: 3,
                    },
                },
            },
        },
    });
}

initChart3("graphs");