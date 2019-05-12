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
		.get('/priority/')
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

		// Set scheduler name
		$(document).ready(function() {
			console.log(response)

			$('#textH1').text('Escalonador ')
			$('#textH3').text(response)
			$('#textTime').text('Tempo de Execucao: 12ms')
			$('#textContent').text(
				'Escalonador por prioridade: A ideia por trás deste algoritmo é simples: oferecer um tratamento distinto à processos diversos. No instante da criação de um processo ele recebe uma prioridade, e quando o escalonador tiver que escolher entre os processos, escolherá aquele com maior prioridade.'
			)
		})

		switch (response) {
			case 'por Prioridade':
				function animationPriority() {
					if (response === 'por Prioridade') {
						$('#priorityBox1').text('2')
						$('#priorityBox2').text('1')
						$('#priorityBox3').text('3')
						$('#priorityBox4').text('1')
					}

					let $box = $('#box'),
						$box2 = $('#box2'),
						$box3 = $('#box3'),
						$box4 = $('#box4'),
						$halfBox = $('#halfBox'),
						$title = $('#textH1'),
						$subtitle = $('#textH3'),
						$textTime = $('#textTime'),
						$repeatAnimation = $('#repeatAnimation')
					;($boxes = $('.box')), ($textBox = $('#textBox')), (tl = new TimelineLite())

					tl.pause()
					TweenMax.to('.well-anim', 2, {
						repeat: -1,
						backgroundPosition: '-8800px',
						ease: SteppedEase.config(25)
					})

					tlText = new TimelineLite()
					tlText.from($textBox, 2, { x: '-250', autoAlpha: 0 }, Power4.easeInOut)

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
						.to($box2, 2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
						.to($box4, 2.2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
						.to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
						.to($box3, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
						.from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
				}
				animationPriority()
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
