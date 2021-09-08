var ctx = document.getElementById('grafico1');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['A Receber', 'A Pagar'],
        datasets: [{
            label: '',
            data: [38151250, 62941890],
            backgroundColor: [
                'green',
                'red'
            ],
            borderColor: [
                'green',
                'red'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('grafico2');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Novas', 'Canceladas', 'Transferidas', 'Reservadas', 'Pré-Matriculados'],
        datasets: [{
            data: [23, 1, 0, 3, 8],
            backgroundColor: [
                'blue',
                'red',
                'yellow',
                'green',
                'orange',
                'cyan'
            ],
            borderColor: [
                'blue',
                'red',
                'yellow',
                'green',
                'orange',
                'cyan'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});