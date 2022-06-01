function initChart3(id) {
    const ctx = document.getElementById(id).getContext('2d');

    let gradient = ctx.createLinearGradient(0, 0, 0, 0);
    gradient.addColorStop(0.2, "rgba(0, 148, 255, 0)");
    gradient.addColorStop(1, "rgba(0, 148, 255, 0)");

    const myChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', "9d", "10d", '11d', '12d', '13d', '14d', '15d', '16d', '17d', '18d', "19d", "20d", '21d', '22d', '23d',],
            datasets: [
                {
                    label: 'Net P/L',
                    backgroundColor: [
                        gradient
                    ],
                    data: [200, 480, 490, 500, 470, 100, 180, 580, 490, 580, 430, 60, 0, 490, 610, 580, 610, 190, 90, 595, 500, 470, 500,],
                    borderWidth: 1,
                    borderColor: '#0094FF',
                    fill: true,
                    radius: 0,
                    hitRadius: 100,
                    hoverRadius: 6,
                    hoverBackgroundColor: "#0094FF",
                    hoverBorderColor: "#fff",
                    hoverBorderWidth: 2,
                },
            ],
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
                    backgroundColor: '#242529',
                    borderColor: '#3042A0',
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
                                label += new Intl.NumberFormat('en-US', { style: 'percent' }).format(context.parsed.y);
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
                        borderDashOffset: 10,
                    },
                    ticks: {
                        color: "#B2B2B2",
                        font: {
                            size: 14,

                        },
                        stepSize: 50,
                        padding: 20,
                    },
                },
                x: {
                    min: 1,
                    max: 10 * 2,
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#B2B2B2",
                        stepSize: 50,
                        font: {
                            size: 13,
                        },
                        padding: 20,
                    },
                },
            },
        },
    }
    );
}

initChart3("graphs");