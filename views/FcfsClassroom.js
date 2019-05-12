function loadAPI() {
	let gameapi = axios.create({
		baseURL: 'http://localhost:8082/api/rest/game',
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
		// timeout: 1000
	})

	// gameapi.get('/random')
	gameapi
		.get('/fcfs/')
		.then(response => {
			schedulerName(response.data)
			setTimeout(() => {
				$('#content').removeClass('hidden-content')
				$('#load').addClass('hidden-content')
			}, 1000)
		})
		.catch(error => {
			// location.href('http://localhost:8082/public/404.html')
			// window.location.href = "http://localhost:8082/public/404.html"

			alert(error + '\nPlease connect the gameapi backend server')
		})

	function schedulerName(response) {
		console.log('Escalonador: ' + response)
		// $('#content').addClass('hidden-content')

		// Set scheduler name
		$(document).ready(function() {
			console.log(response)

			$('#textH1').text('Escalonador ' + response)
			$('#textH3').text('First Come First Served')
			$('#textTime').text('Tempo de Execucao: 8ms')
			$('#textContent').text(
				'Vamos falar sobre a técnica de escalonamento First Come First Served, também conhecido pelas siglas FCFS e FIFO. Assim como a tradução sugere, o escalonamento de FCFS classifica os processos por ordem de chegada, independente do seu tempo de duração ou prioridade.'
			)
		})

		switch (response) {
			case 'FCFS':
				// console.log('fcfs ds')

				function animationFcfs() {
					// let M1 = TweenMax.to('.well-anim', 2, { repeat: -1, backgroundPosition: "-8800px", ease: SteppedEase.config(25) });

					// M1.pause();

					let $box = $('#box'),
						$box2 = $('#box2'),
						$box3 = $('#box3'),
						$box4 = $('#box4'),
						$title = $('#textH1'),
						$subtitle = $('#textH3'),
						$textTime = $('#textTime'),
						$halfBox = $('#halfBox'),
						$textBox = $('#textBox'),
						$repeatAnimation = $('#repeatAnimation')
					;($boxes = $('.box')), (tl = new TimelineLite())

					tl.pause()
					TweenMax.to('.well-anim', 2, {
						repeat: -1,
						backgroundPosition: '-8800px',
						ease: SteppedEase.config(25)
					})

					tlText = new TimelineLite()
					tlText.from($textBox, 2, { x: '-250', autoAlpha: 0 }, Power4.easeInOut)

					// tl.play();
					// animation timeline
					tl.to($halfBox, 0, { x: '150', autoAlpha: 0 })
						.from([$title, $subtitle, $textTime], 0.7, {
							x: '150',
							y: '-40',
							autoAlpha: 0,
							ease: Power4.easeInOut
						})
						.from($box, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
						.from($box2, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
						.from($box3, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
						.from($box4, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
						.to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
						.to($box2, 2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
						.to($box3, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
						.to($box4, 2.2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
						.from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
				}
				animationFcfs()
				break
			default:
				break
		}
	}

	$('#playAnimation').click(function() {
		let showTextBox = document.getElementById('textBox')
		showTextBox.style.visibility = 'hidden'

		let hint = document.getElementById('hintAudio')
		hint.play()
		tl.play()
	})

	$('#repeatAnimation').click(function() {
		// let hint = document.getElementById("audio");
		// hint.play();
		// animationSjf()
		let hint = document.getElementById('hintAudio')
		hint.play()
		tl.restart()
	})
}

loadAPI()
