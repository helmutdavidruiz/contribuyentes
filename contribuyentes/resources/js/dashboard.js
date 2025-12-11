import "../css/dashboard.scss"
import Chart   from 'chart.js/auto'
import { get } from './ajax'

window.addEventListener('DOMContentLoaded', function () {
    const contexto = document.getElementById('yearToDateChart')

    get('/stats/ytd').then(response => response.json()).then(response => {
        let honorariosData = Array(12).fill(null)
        let impuestosData   = Array(12).fill(null)
        let transferenciasData   = Array(12).fill(null)

        
        response.forEach(({m, impuestos, honorarios, transferencias}) => {
            impuestosData[m - 1] = impuestos
            honorariosData[m - 1]   = honorarios
            transferenciasData[m - 1]   = transferencias
        })

        new Chart(contexto, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov','Dic'],
                datasets: [
                    {
                        label: 'Impuestos',
                        data: impuestosData,
                        borderWidth: 1,
                        backgroundColor: 'rgba(205, 11, 11, 0.32)',
                        borderColor: 'rgba(6, 20, 2, 1)',
                    },
                    {
                        label: 'Honorarios',
                        data: honorariosData,
                        borderWidth: 1,
                        backgroundColor: 'rgba(14, 225, 31, 0.46)',
                        borderColor: 'rgba(13, 24, 24, 1)',
                    },
                    {
                        label: 'Transferencias',
                        data: transferenciasData,
                        borderWidth: 1,
                        backgroundColor: 'rgba(221, 240, 15, 0.91)',
                        borderColor: 'rgba(12, 26, 26, 1)',
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
    })
})

