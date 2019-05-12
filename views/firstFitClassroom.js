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
		.get('/firstFit')
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
		console.log('alocação de memória: ' + response)

		// Set scheduler name
		$(document).ready(function() {
			console.log('titulo' + response)
			$('#textH1').text('Estrategia de Alocacao')
			$('#textH3').text(response)
			$('#textListProcess').text('Lista de Processos')
			$('#textContent').text(
				'First Fit (primeiro encaixe) que percorre a fila até encontrar o primeiro espaço em que caiba todo o processo. É um algoritmo bem rápido!'
			)
		})
		switch (response) {
			case 'First Fit':
				function animationFirstFit() {
					if (response == 'First Fit') {
						$('#memoryRectangle2').text('UI0Detect.exe 10K')
					}

					let $box = $('#box-memory'),
						$box2 = $('#box-memory2'),
						$box3 = $('#memory-piece1'),
						$box4 = $('#memory-piece2'),
						$box5 = $('#memory-piece3'),
						$title = $('#textH1'),
						$subtitle = $('#textH3'),
						$textTime = $('#textTime'),
						$textListProcess = $('#textListProcess'),
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
					tl.from([$title, $subtitle, $textTime], 0.7, {
						x: '150',
						y: '-40',
						autoAlpha: 0,
						ease: Power4.easeInOut
					})
						.from($textListProcess, 0.1, {
							x: '-300',
							autoAlpha: 0,
							ease: Power4.easeInOut
						})
						.from($textListProcess, 0.1, {
							y: '-300',
							autoAlpha: 0,
							ease: Power4.easeInOut
						})
						.to($textListProcess, 0.1, {
							x: '-290',
							autoAlpha: 1,
							ease: Power4.easeInOut
						})
						.from([$box, $box3, $box4, $box5], 0.5, {
							x: '150',
							autoAlpha: 0,
							ease: Power4.easeInOut
						})
						.from($box2, 0.5, { x: '-30', autoAlpha: 0, ease: Power4.easeInOut })

						.to($box2, 2.5, { x: '145', autoAlpha: 1, ease: Bounce.easeOut })
						.to($box2, 0.5, { y: '90', autoAlpha: 1, ease: Power4.easeInOut })
						.to($box2, 0.5, { x: '270', autoAlpha: 1, ease: Power4.easeInOut })
						.from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
				}
				animationFirstFit()
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
