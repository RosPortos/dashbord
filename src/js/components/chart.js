function initChart3(id) {
    const ctx = document.getElementById(id).getContext('2d');

    let gradient = ctx.createLinearGradient(0, 0, 0, 0);
    gradient.addColorStop(0.2, "rgba(0, 148, 255, 0)");
    gradient.addColorStop(1, "rgba(0, 148, 255, 0)");

    const myChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1d', '1d', '1d', '2d', '2d', '2d', '3d', '3d', '3d', '4d', '4d', '4d', '5d', '5d', '5d', '6d', '6d', '6d', '7d', '7d', '7d', '8d', '8d', '8d', '9d', '9d', '9d', '10d', '10d', '10d',],
            datasets: [{
                label: 'Net P/L',
                backgroundColor: [
                    gradient
                ],
                data: [100, 400, 450, 420, 400, 20, 100, 500, 450, 500, 420, 40, 10, 320, 400, 550, 480, 100, 70, 490, 430, 460, 490, 10, 10, 200, 350, 410, 400],
                                                                                                                         // 21
                borderWidth: 1,
                borderColor: '#0094FF',
                fill: true,
                radius: 0,
                hitRadius: 100,
                hoverRadius: 6,
                hoverBackgroundColor: "#0094FF",
                hoverBorderColor: "#fff",
                hoverBorderWidth: 0,
            }, ],
        },
        options: {
            /* spanGaps: 1000 * 60 * 60 * 24 * 10, */
            responsive: true,
            interaction: {
                mode: 'index',
            },
            plugins: {
                legend: {
                    display: false,
                },

                tooltips: {
                    mode: 'index',
                    intersect: false,
                    padding: {
                        left: 15,
                        top: 15,
                        right: 15,
                        bottom: 15
                    },
                    titleAlign: 'center',
                    caretSize: 0,
                    backgroundColor: "'#242529'",
                    borderColor: '#3C4254',
                    borderWidth: 1,
                    usePointStyle: true,
                    boxWidth: 0,
                    callbacks: {
                        labelTextColor: function (context) {
                            return '#fff';
                        },
                        label: function (context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', {
                                    style: 'percent'
                                }).format(context.parsed.y);
                            }
                            return label;
                        }
                    },
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