function loadQuestionsApi() {
	let gameapi = axios.create({
		baseURL: 'http://localhost:8082/api/rest/quiz',
		//baseURL: 'http://localhost:8080/api/rest/quiz',
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	})

	gameapi
		.get('/questions/')
		.then(response => {
			// schedulerName(response.data)
			let singleQuestion = response.data[0]
			let allQuestions = response.data
			console.log(response.data[0][1])
			console.log(singleQuestion)
			console.log(allQuestions)

			$('#questionName').text(response.data[0][1])
			$('#alternative1').text('Atendendo as tarefas em sequência de chegada')
			$('#alternative2').text('Atendendo as tarefas com maior tempo de duração')
			$('#alternative3').text('Atendendo as tarefas aleatoriamente')
			$('#alternative4').text('Atendendo as tarefas com menor prioridade')
		})
		.catch(error => {
			// location.href('http://localhost:8082/public/404.html')
			// window.location.href = "http://localhost:8082/public/404.html"

			alert(error + '\nPlease connect the gameapi backend server')
		})
}

loadQuestionsApi()
