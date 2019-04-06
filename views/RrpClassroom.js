function loadAPI() {
    let gameapi = axios.create({
			baseURL: "http://localhost:8080/api/rest/game",
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
			// timeout: 1000
		});

    // gameapi.get('/random')
    gameapi.get('/roundrobin/preemptive/')
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

            if (response === 'Round Robin 1 Quantum P') {
                $('#textH1').text('Escalonador Round Robin 1 Quantum')
                $('#textH3').text("Preemptive")
            }
        })

        switch (response) {
            case 'Round Robin 1 Quantum P':
                function animationRrOneP() {

                    if (response === 'Round Robin 1 Quantums') {
                        $('#priorityBox1').text("1")
                        $('#priorityBox2').text("2")
                        $('#priorityBox3').text("1")
                        $('#priorityBox4').text("3")
                    }

                    let $box = $('#box'),
                        $box2 = $('#box2'),
                        $box3 = $('#box3'),
                        $box4 = $('#box4'),
                        $title = $('#textH1'),
                        $subtitle = $('#textH3'),
                        $halfBox = $('#halfBox')
                    $repeatAnimation = $('#repeatAnimation')
                    $boxes = $('.box'),
                        tl = new TimelineLite();

                    // animation timeline
                    tl.to($halfBox, 0, { x: '-350', autoAlpha: 0 })
                        .from([$title, $subtitle], 0.7, { x: '150', y: '-40', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box2, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box3, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box4, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .to($box, 0.5, { x: '-365', ease: Power4.easeInOut })
                        .to($box, 0.5, { x: '-365', ease: Power4.easeInOut, autoAlpha: 0 })
                        // halfbox
                        .to($halfBox, 0.5, { x: '-350', ease: Power4.easeInOut, autoAlpha: 1 })
                        .to($halfBox, 0.5, { y: '-100', ease: Power4.easeInOut, autoAlpha: 1 })
                        .to($box, 0, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        // box2
                        .to($box2, 1, { x: '-332', ease: Bounce.easeOut })
                        .to($box2, 1, { x: '-388', ease: Power4.easeOut })
                        .to($box2, 0.5, { x: '-388', ease: Power4.easeInOut, autoAlpha: 0 })
                        // back to cpu position
                        .to($box2, 0, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 1 })

                        .to($halfBox, 0.5, { x: '310', ease: Power4.easeInOut, autoAlpha: 1 })
                        .to($halfBox, 0.5, { y: '-30', ease: Power4.easeInOut, autoAlpha: 1 })


                        .to($box, 1, { y: '-100', ease: Power4.easeInOut })
                        .to($box, 1, { x: '365', ease: Power4.easeInOut })

                        .to($box, 0.5, { y: '-30', ease: Power4.easeInOut })
                        .to($box3, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })

                        .to($box4, 0.5, { x: '-200', ease: Power4.easeInOut })
                        .to($halfBox, 0.5, { x: '0', ease: Power4.easeInOut, autoAlpha: 1 })
                        .to($box, 0.5, { x: '65', ease: Power4.easeInOut })
                        // box4
                        .to($box4, 1, { x: '-332', ease: Bounce.easeOut })
                        .to($box4, 1, { x: '-388', ease: Power4.easeOut })
                        .to($box4, 0.5, { x: '-388', ease: Power4.easeOut, autoAlpha: 0 })
                        .to($box2, 0.5, { x: '-332', ease: Power4.easeOut, autoAlpha: 1 })
                        .to($box2, 1, { y: '-100', ease: Power4.easeInOut })
                        .to($box2, 1, { x: '130', ease: Power4.easeInOut })
                        .to($box2, 1, { y: '-30', ease: Power4.easeInOut })
                        // last box 2 (splited - box 1)
                        .to($halfBox, 0.5, { x: '-350', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })

                        .to($box2, 0.5, { x: '-200', ease: Power4.easeInOut })
                        .to($box, 0.5, { x: '0', ease: Power4.easeInOut })

                        .to($box2, 1, { x: '-332', ease: Bounce.easeOut })
                        .to($box2, 1, { x: '-388', ease: Power4.easeOut })
                        .to($box2, 0.5, { x: '-388', ease: Power4.easeInOut, autoAlpha: 0 })
                        // back to cpu position
                        .to($box2, 0, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })

                        .to($box, 0, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 1 })
                        // .to($box, 0.5, { y: '-100', ease: Power4.easeInOut, autoAlpha: 1 })

                        .to($box, 0.5, { x: '-450', ease: Power4.easeInOut, autoAlpha: 0 })
                        // .to($box, 0.5, { y: '-100', ease: Power4.easeInOut })
                        // .to($box, 0.5, { x: '0', ease: Power4.easeInOut })
                        // .to($box, 0.5, { y: '-30', ease: Power4.easeInOut })
                        // .to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })                                     

                        // .to($box4, 2.2, {x: '-332', ease: Power4.easeInOut})
                        .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });

                } animationRrOneP()
                break;
            default:
                break;
        }

    }

}

loadAPI();






