/* Skripte für die Erstellung des Charts */
console.log('script.js geladen')

//dom content loaded event
document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM geladen')

	// Daten: https://opendata.swiss/en/dataset/beziehende-von-alv-taggeldern-sozialhilfe-und-iv-renten3/resource/e50e4727-60e9-4784-b79b-0a71fe7f6685
	let parseUrl = 'https://data.stadt-zuerich.ch/dataset/sid_stapo_hundenamen_od1002/download/KUL100OD1002.csv'

	let parsedData = Papa.parse(parseUrl, {
		download: true,
		// headers: true,
		
		complete: function (results) {
			console.log(results)

			Highcharts.chart('chart', {
				title: {
					text: 'U.S Solar Employment Growth by Job Category, 2010-2020',
					align: 'left',
				},

				subtitle: {
					text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
					align: 'left',
				},

				yAxis: {
					title: {
						text: 'Number of Employees',
					},
				},

				xAxis: {
					accessibility: {
						rangeDescription: 'Range: 2010 to 2020',
					},
				},

				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
				},

				plotOptions: {
					series: {
						label: {
							connectorAllowed: false,
						},
						pointStart: 2014,
					},
				},

				series: [
					{
						name: 'ALV-Taggelder',
						data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610],
					},
					{
						name: 'Sozialhilfe',
						data: [24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 31050],
					},
					{
						name: 'IV-Renten',
						data: [11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213, 25663],
					},
				],

				responsive: {
					rules: [
						{
							condition: {
								maxWidth: 500,
							},
							chartOptions: {
								legend: {
									layout: 'horizontal',
									align: 'center',
									verticalAlign: 'bottom',
								},
							},
						},
					],
				},
			})
		},
		error: function (error) {
			console.log(error)
		},
	})

	// fetch('https://data.bs.ch/api/v2/catalog/datasets/100245/exports/json')
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data))
	// 	.catch((error) => console.error(error))
})
