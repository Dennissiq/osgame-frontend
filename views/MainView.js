function loadAPI() {
    let gameapi = axios.create({
			baseURL: "http://localhost:8080/api/rest/game",
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
			// timeout: 1000
		});

    gameapi.get('/random')
        .then((response) => {
            
            schedulerName(response.data);  
    
        })
        .catch((error) => {
            // location.href('http://localhost:8080/public/404.html')
            // window.location.href = "http://localhost:8080/public/404.html"

            alert(error + '\nPlease connect the gameapi backend server');
        })

    function schedulerName(response){

        console.log('Escalonador: ' + response)

        // Set scheduler name
        $(document).ready(function () {
            $('#textH1').text('Escalonador ' + response)
            // $('#textH1').text('Escalonador ')
            // $('#textH3').text("Shortest Job First")
            if (response === 'FCFS'){
                $('#textH3').text("First Come First Served")
            }
            if (response === 'SJF'){
                $('#textH3').text("Shortest Job First")
            }
        })

        switch (response) {
            case 'SJF':
                function animationSjf() {

                    let $box = $('#box'),
                        $box2 = $('#box2'),
                        $box3 = $('#box3'),
                        $box4 = $('#box4'),
                        $title = $('#textH1'),
                        $subtitle = $('#textH3')
                    $repeatAnimation = $('#repeatAnimation')
                    $boxes = $('.box'),
                        tl = new TimelineLite();

                    // animation timeline
                    tl.from([$title, $subtitle], 0.7, { x: '150', y: '-40', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box, 1, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box2, 1, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box3, 1, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box4, 1, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .to($box, 0.7, { x: '-450', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box3, 0.7, { x: '-450', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box2, 0.7, { x: '-450', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box4, 0.7, { x: '-450', ease: Power4.easeInOut, autoAlpha: 0 })
                        .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });

                } animationSjf()
                break;

            case 'FCFS':
                function animationFcfs(){

                    let $box = $('#box'),
                        $box2 = $('#box2'),
                        $box3 = $('#box3'),
                        $box4 = $('#box4'),
                        $title = $('#textH1'),
                        $subtitle = $('#textH3')
                        $repeatAnimation = $('#repeatAnimation')
                        $boxes = $('.box'),
                        tl = new TimelineLite();

                    // animation timeline
                    tl.from([$title, $subtitle], 0.7, { x: '150', y: '-40', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box, 1, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box2, 1, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box3, 1, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box4, 1, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .to($box, 0.7, {x: '-450', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box2, 0.7, {x: '-450', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box3, 0.7, {x: '-450', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box4, 0.7, {x: '-450', ease: Power4.easeInOut, autoAlpha: 0})
                        .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });
                        

                } animationFcfs()
                
                break;
            default:
                break;
        }

    }

    $("#repeatAnimation").click(function () {

        // animationSjf()
        location.reload()

    });

}

loadAPI();







