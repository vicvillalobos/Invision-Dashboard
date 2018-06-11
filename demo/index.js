
		$(document).ready(function(){
			
			$('#calendar').fullCalendar({
				// put your options and callbacks here
				firstDay:1,
				header: false,
				dayNames:['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
				dayNamesShort:['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
				events:[
				  {
					title  : 'Firma Miguel Arias',
					start  : '2017-05-12T12:30:00',
					className : 'client-signature'
				  },
				  {
					title  : 'La Dehesa / Aguas Claras',
					start  : '2017-05-13T11:30:00',
					end    : '2017-05-13T12:30:00',
					className : 'open-house'
				  },
				  {
					title  : 'Colina Vista Hermosa',
					start  : '2017-05-09T10:00:00',
					end  : '2017-05-09T12:30:00',
					allDay : false ,
					className : 'open-house'
				  }
				]
			});
		
		});
		
		(function(){
			var data = {
			  series: [55, 15, 10, 20]
			};
			
			var sum = function(a, b) { return a + b };

			var options = {
			  labelInterpolationFnc: function(value) {
				return Math.round(value / data.series.reduce(sum) * 100) + '%';
			  }
			};

			new Chartist.Pie('#visitors-pie', data, options);
			
		})();
		
		(function(){
		
			var dataSales = {
			  labels: ['Jueves', 'Viernes', 'Sábado', 'Domingo', 'Lunes', 'Martes', 'Miércoles'],
			  series: [
				 [287, 385, 490, 492, 554, 586, 698,698],
				 [43, 52, 95, 49, 77, 85, 121,121]
			  ]
			};

			var optionsSales = {
			  lineSmooth: true,
			  low: 0,
			  high: 800,
			  showArea: true,
			  height: "245px",
			  chartPadding: { right: -220 },
			  axisX: {
				showGrid: false,
			  },
			  showLine: false,
			  showPoint: false,
			};

			var responsiveSales = [
			  ['screen and (max-width: 640px)', {
				axisX: {
				  labelInterpolationFnc: function (value) {
					return value[0];
				  }
				}
			  }]
			];

			Chartist.Line('#users-line', dataSales, optionsSales, responsiveSales);
		
		})();
		
		