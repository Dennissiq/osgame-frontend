function loadAPI() {
	let gameapi = axios.create({
		baseURL: 'http://localhost:8082/api/rest/game',
		//baseURL: 'http://localhost:8080/api/rest/game',
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
		// timeout: 1000
	})

	// gameapi.get('/random')
	gameapi
		.get('/memory/random/')
		.then(response => {
            console.log("teste " + response.data)
            memoryUrl(response.data)
      
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

        function memoryUrl(response) {
          // t =  window.location.href = 'localhost:8081/public/' + response
        //    console.log("rota: " + t)
        window.location.href = 'http://localhost:8081/public/' + response
            
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
