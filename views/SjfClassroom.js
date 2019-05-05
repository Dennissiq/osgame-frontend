function loadAPI() {
    let gameapi = axios.create({
			baseURL: "http://localhost:8082/api/rest/game",
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
			// timeout: 1000
		});

    // gameapi.get('/random')
    gameapi.get('/sjf/')
        .then((response) => {
            
            schedulerName(response.data);  
    
        })
        .catch((error) => {
            // location.href('http://localhost:8082/public/404.html')
            // window.location.href = "http://localhost:8082/public/404.html"

            alert(error + '\nPlease connect the gameapi backend server');
        })

    function schedulerName(response){

        console.log('Escalonador: ' + response)

        // Set scheduler name
        $(document).ready(function () {

            console.log(response)

            $('#textH1').text('Escalonador ' + response)
            $('#textH3').text('Shortest Job First')
            $('#textTime').text("Tempo de Execucao: 8ms")
            $('#textContent').text("No escalonamento Shortest Job First (SJF), o processo que necessita do menor tempo para execução na CPU é o escolhido pelo escalonador ou seja, ele privilegia os processos de tamanho menor. Para o funcionamento deste escalonador é necessário o conhecimento prévio do tempo de execução de todos os processos. Caso existam dois processos com o mesmo tempo de execução é utilizado o padrão de ordem de chegada(FCFS).")
            $('#timeBox').text('1ms')
            $('#timeBox2').text('2ms')
            $('#timeBox3').text('1ms')
            $('#timeBox4').text('4ms')

        })

        switch (response) {
            case 'SJF':
                function animationSjf() {

                    let $box = $('#box'),
                        $box2 = $('#box2'),
                        $box3 = $('#box3'),
                        $box4 = $('#box4'),
                        $halfBox = $('#halfBox')
                        $title = $('#textH1'),
                        $subtitle = $('#textH3'),
                        $textTime = $('#textTime'),
                        $repeatAnimation = $('#repeatAnimation'),
                        $textBox = $('#textBox'),
                        tl = new TimelineLite();

                    tl.pause();
                    TweenMax.to('.well-anim', 2, { repeat: -1, backgroundPosition: "-8800px", ease: SteppedEase.config(25) });

                    tlText = new TimelineLite();
                    tlText.from($textBox, 2, { x: '-250', autoAlpha: 0 }, Power4.easeInOut)

                    // animation timeline
                    tl.to($halfBox, 0, { x: '150', autoAlpha: 0 })
                        .from([$title, $subtitle, $textTime], 0.7, { x: '150', y: '-40', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box2, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box3, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box4, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box3, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box2, 2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box4, 2.2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });

                } animationSjf()
                break;
            default:
                break;
        }

    }

    $("#playAnimation").click(function () {
        let showTextBox = document.getElementById('textBox');
        showTextBox.style.visibility = 'hidden';

        let hint = document.getElementById("hintAudio");
        hint.play()
        tl.play();
    })

    $("#repeatAnimation").click(function () {
        // let hint = document.getElementById("audio");
        // hint.play();
        // animationSjf()
        let hint = document.getElementById("hintAudio");
        hint.play()
        tl.restart();

    });
}

loadAPI();







