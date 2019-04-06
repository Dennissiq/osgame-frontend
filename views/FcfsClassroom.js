function loadAPI() {
    let gameapi = axios.create({
			baseURL: "http://localhost:8080/api/rest/game",
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
			// timeout: 1000
		});

    // gameapi.get('/random')
    gameapi.get('/fcfs/')
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

            console.log(response)

                $('#textH1').text('Escalonador ' + response)
                $('#textH3').text("First Come First Served")

        })

        switch (response) {
            case 'FCFS':
                function animationFcfs(){

                    let $box = $('#box'),
                        $box2 = $('#box2'),
                        $box3 = $('#box3'),
                        $box4 = $('#box4'),
                        $title = $('#textH1'),
                        $subtitle = $('#textH3'),
                        $halfBox = $('#halfBox'),
                        $repeatAnimation = $('#repeatAnimation')
                        $boxes = $('.box'),
                        tl = new TimelineLite();

                    // animation timeline
                    tl.to($halfBox, 0, { x: '150', autoAlpha: 0 })
                        .from([$title, $subtitle], 0.7, { x: '150', y: '-40', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box2, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box3, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box4, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .to($box, 0.5, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box2, 2, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box3, 0.5, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box4, 2.2, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });
                        

                } animationFcfs()
                break;
            default:
                break;
        }

    }

    // $("#repeatAnimation").click(function () {
    //     // let hint = document.getElementById("audio");
    //     // hint.play();
    //     // animationSjf()
    //     location.reload()

    // });

}

loadAPI();







