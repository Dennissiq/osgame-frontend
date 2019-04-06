function loadAPI() {
    let gameapi = axios.create({
        baseURL: "http://localhost:8080/api/rest/game",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
        // timeout: 1000
    });

    // gameapi.get('/random')
    gameapi.get('/priority/')
        .then((response) => {

            schedulerName(response.data);

        })
        .catch((error) => {
            // location.href('http://localhost:8080/public/404.html')
            // window.location.href = "http://localhost:8080/public/404.html"

            alert(error + '\nPlease connect the gameapi backend server');
        })

    function schedulerName(response) {

        console.log('Escalonador: ' + response)

        // Set scheduler name
        $(document).ready(function () {

            console.log(response)

            $('#textH1').text('Escalonador ' + response)

        })

        switch (response) {
            case 'por Prioridade':
                function animationPriority() {

                    if (response === 'por Prioridade') {
                        $('#priorityBox1').text("2")
                        $('#priorityBox2').text("1")
                        $('#priorityBox3').text("3")
                        $('#priorityBox4').text("1")
                    }

                    let $box = $('#box'),
                        $box2 = $('#box2'),
                        $box3 = $('#box3'),
                        $box4 = $('#box4'),
                        $halfBox = $('#halfBox'),
                        $title = $('#textH1'),
                        $subtitle = $('#textH3')
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
                        .to($box2, 2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box4, 2.2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box3, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });

                } animationPriority()
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