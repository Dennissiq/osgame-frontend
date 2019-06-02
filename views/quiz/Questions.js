function loadQuestionsApi() {
	Array.prototype.shuffle = function() {
		var currentIndex = this.length,
			temporaryValue,
			randomIndex
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1
			temporaryValue = this[currentIndex]
			this[currentIndex] = this[randomIndex]
			this[randomIndex] = temporaryValue
		}
		return this
	}

	let idsQuestions = axios.create({
		baseURL: 'http://localhost:8082/api/rest/quiz/ids/',
		//baseURL: 'http://localhost:8080/api/rest/quiz',
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	})

	idsQuestions.get().then(response => {
		console.log(response.data)
		let id = response.data.shuffle()[0]
		let gameapi = axios.create({
			baseURL: 'http://localhost:8082/api/rest/quiz/correct/',
			//baseURL: 'http://localhost:8080/api/rest/quiz',
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		})

		gameapi
			.get('/' + id + '/')
			.then(response => {
				let allQuestions = response.data.shuffle()

				$('#questionName').text(response.data[0].question_id.question)
				$('#alternative1').text(allQuestions[0].text)
				$('#alternative2').text(allQuestions[1].text)
				$('#alternative3').text(allQuestions[2].text)
				$('#alternative4').text(allQuestions[3].text)

				$('#alternative1').click(function() {
					if (allQuestions[0].answer === 2) {
						$('#correctAnswer').text('Parabéns!!! Certa resposta')
						$('#incorrectAnswer').text('')
						setTimeout(() => {
							window.location.reload()
						}, 1000)
					} else {
						$('#correctAnswer').text('')
						$('#incorrectAnswer').text('Que pena, você errou! :(')
						setTimeout(() => {
							window.location.reload()
						}, 1000)
					}
				})
				$('#alternative2').click(function() {
					if (allQuestions[1].answer === 2) {
						$('#correctAnswer').text('Parabéns!!! Certa resposta')
						$('#incorrectAnswer').text('')
						setTimeout(() => {
							window.location.reload()
						}, 1000)
					} else {
						$('#correctAnswer').text('')
						$('#incorrectAnswer').text('Que pena, você errou! :(')
						setTimeout(() => {
							window.location.reload()
						}, 1000)
					}
				})
				$('#alternative3').click(function() {
					if (allQuestions[2].answer === 2) {
						$('#correctAnswer').text('Parabéns!!! Certa resposta')
						$('#incorrectAnswer').text('')
						setTimeout(() => {
							window.location.reload()
						}, 1000)
					} else {
						$('#correctAnswer').text('')
						$('#incorrectAnswer').text('Que pena, você errou! :(')
						setTimeout(() => {
							window.location.reload()
						}, 1000)
					}
				})
				$('#alternative4').click(function() {
					if (allQuestions[3].answer === 2) {
						$('#correctAnswer').text('Parabéns!!! Certa resposta')
						$('#incorrectAnswer').text('')
						setTimeout(() => {
							window.location.reload()
						}, 1000)
					} else {
						$('#correctAnswer').text('')
						$('#incorrectAnswer').text('Que pena, você errou! :(')
						setTimeout(() => {
							window.location.reload()
						}, 1000)
					}
				})
			})
			.catch(error => {
				// location.href('http://localhost:8082/public/404.html')
				// window.location.href = "http://localhost:8082/public/404.html"

				alert(error + '\nPlease connect the gameapi backend server')
			})
	})
}

loadQuestionsApi()
