function loadAPI() {
    let gameapi = axios.create({
			baseURL: "http://localhost:8082/api/rest/game",
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
			// timeout: 1000
		});

    // gameapi.get('/random')
    gameapi.get('/random/')
        .then((response) => {
            
            schedulerName(response.data);  
            console.log(response);
    
        })
        .catch((error) => {
            // location.href('http://localhost:8082/public/404.html')
            // window.location.href = "http://localhost:8082/public/404.html"

            alert(error + '\nPlease connect the gameapi backend server');
        })

    function schedulerName(response){
        // showhHalfBox
        let showhHalfBox = document.getElementById('halfBox');
        showhHalfBox.style.visibility = 'hidden';

        console.log('Escalonador: ' + response)

        // Set scheduler name
        $(document).ready(function () {

            console.log(response)
            if (response === 'Round Robin 1 Quantum NP'){
                $('#textH1').text('Escalonador Round Robin 1 Quantum')
                $('#textH3').text("Non preemptive")
                $('#textTime').text("Tempo de Execucao: 10ms")
                $('#textContent').text("Iremos falar um pouco sobre a técnica de escalonamento Round Robin, que também se conhece por 'RR'. Basicamente, o escalonamento de Round Robin usa fatias do tempo iguais e em ordem circular, manipulando todos os processo, independente da prioridade.")

                
            }
            if (response === 'Round Robin 1 Quantum P'){
                $('#textH1').text('Escalonador Round Robin 1 Quantum')
                $('#textH3').text("Preemptive")
                $('#textTime').text("Tempo de Execucao: 15ms")
                $('#textContent').text("Iremos falar um pouco sobre a técnica de escalonamento Round Robin, que também se conhece por 'RR', porém agora sendo preemptiva. Basicamente, o escalonamento de Round Robin continua manipulando todos os processo da mesma forma, só que por ser preemptiva, ele pode interromper um processo em execução para executar outro.")
            }

            if (response !== 'Round Robin 1 Quantum NP' && response !== 'Round Robin 1 Quantum P' ){
                $('#textH1').text('Escalonador ' + response)
            }
            // $('#textH1').text('Escalonador ' + response)
            // $('#textH1').text('Escalonador ')
            // $('#textH3').text("Shortest Job First")
            if (response === 'FCFS'){
                $('#textH3').text("First Come First Served")
                $('#textTime').text("Tempo de Execucao: 8ms")
                $('#textContent').text("Vamos falar sobre a técnica de escalonamento First Come First Served, também conhecido pelas siglas FCFS e FIFO. Assim como a tradução sugere, o escalonamento de FCFS classifica os processos por ordem de chegada, independente do seu tempo de duração ou prioridade.")

            }
            if (response === 'SJF'){
                $('#textH3').text("Shortest Job First")
                $('#textTime').text("Tempo de Execucao: 7ms")
                $('#textContent').text("No escalonamento Shortest Job First (SJF), o processo que necessita do menor tempo para execução na CPU é o escolhido pelo escalonador ou seja, ele privilegia os processos de tamanho menor. Para o funcionamento deste escalonador é necessário o conhecimento prévio do tempo de execução de todos os processos. Caso existam dois processos com o mesmo tempo de execução é utilizado o padrão de ordem de chegada(FCFS).")
                $('#timeBox').text('1ms')
                $('#timeBox2').text('2ms')
                $('#timeBox3').text('1ms')
                $('#timeBox4').text('4ms')

            }
            if (response === 'por Prioridade'){
                $('#textH1').text("Escalonador")
                $('#textH3').text("por Prioridade")
                $('#textTime').text("Tempo de Execucao: 12ms")
                $('#textContent').text("Escalonador por prioridade: A ideia por trás deste algoritmo é simples: oferecer um tratamento distinto à processos diversos. No instante da criação de um processo ele recebe uma prioridade, e quando o escalonador tiver que escolher entre os processos, escolherá aquele com maior prioridade.")

            }
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

            case 'FCFS':
                function animationFcfs(){

                    let $box = $('#box'),
                        $box2 = $('#box2'),
                        $box3 = $('#box3'),
                        $box4 = $('#box4'),
                        $title = $('#textH1'),
                        $subtitle = $('#textH3'),
                        $textTime = $('#textTime'),
                        $halfBox = $('#halfBox'),
                        $textBox = $('#textBox'),
                        $repeatAnimation = $('#repeatAnimation')
                    $boxes = $('.box'),
                        tl = new TimelineLite();

                    tl.pause();
                    TweenMax.to('.well-anim', 2, { repeat: -1, backgroundPosition: "-8800px", ease: SteppedEase.config(25) });

                    tlText = new TimelineLite();
                    tlText.from($textBox, 2, { x: '-250', autoAlpha: 0 }, Power4.easeInOut)


                    // tl.play();
                    // animation timeline
                    tl.to($halfBox, 0, { x: '150', autoAlpha: 0 })
                        .from([$title, $subtitle, $textTime], 0.7, { x: '150', y: '-40', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box2, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box3, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box4, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box2, 2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box3, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box4, 2.2, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });
                        

                } animationFcfs()
                break;
            case 'por Prioridade':
                function animationPriority(){

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
                        $subtitle = $('#textH3'),
                        $textTime = $('#textTime'),
                        $repeatAnimation = $('#repeatAnimation')
                        $boxes = $('.box'),
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
                        .to($box2, 2, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box4, 2.2, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box, 0.5, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box3, 0.5, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });
                        
                } animationPriority()
                break;
            case 'Round Robin 1 Quantum NP':
                function animationRrOneNp(){

                    /* if (response === 'Round Robin 1 Quantums') {
                        $('#priorityBox1').text("1")
                        $('#priorityBox2').text("2")
                        $('#priorityBox3').text("1")
                        $('#priorityBox4').text("3")
                    } */

                    let $box = $('#box'),
                        $box2 = $('#box2'),
                        $box3 = $('#box3'),
                        $box4 = $('#box4'),
                        $halfBox = $('#halfBox')
                        $title = $('#textH1'),
                        $subtitle = $('#textH3'),
                        $textTime = $('#textTime'),
                        $textBox = $('#textBox'),
                        $repeatAnimation = $('#repeatAnimation')
                        $boxes = $('.box'),
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
                        .to($box, 0.5, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        // .to($box2, 1, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        // box2
                        .to($box2, 1, {x: '-332', ease: Bounce.easeOut})
                        .to($box2, 1, {x: '-388', ease: Power4.easeOut})
                        .to($box2, 0.5, {x: '-388', ease: Power4.easeInOut, autoAlpha: 0})
                        // back to cpu position
                        .to($box2, 0, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
                        .to($box, 0.5, {x: '-332', ease: Power4.easeInOut, autoAlpha: 1})
                        .to($box, 1, {y: '-100', ease: Power4.easeInOut})
                        .to($box, 1, {x: '325', ease: Power4.easeInOut})

                        .to($box, 0.5, {y: '-30', ease: Power4.easeInOut})
                        .to($box3, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })

                        .to($box4, 0.5, {x:'-200', ease: Power4.easeInOut})
                        .to($box, 0.5, {x:'0', ease: Power4.easeInOut})
                        // box4
                        .to($box4, 1, { x: '-332', ease: Bounce.easeOut })
                        .to($box4, 1, { x: '-388', ease: Power4.easeOut })
                        .to($box4, 0.5, { x: '-388', ease: Power4.easeOut, autoAlpha: 0 })
                        .to($box2, 0.5, { x: '-332', ease: Power4.easeOut, autoAlpha: 1 })
                        .to($box2, 1, { y: '-100', ease: Power4.easeInOut })
                        .to($box2, 1, { x: '70', ease: Power4.easeInOut })
                        .to($box2, 1, { y: '-30', ease: Power4.easeInOut })
                        // last box 2 (splited - box 1)
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
                        .to($box, 0.5, { x: '-450', ease: Power4.easeInOut, autoAlpha: 0 })
                        // .to($box, 0.5, { y: '-100', ease: Power4.easeInOut })
                        // .to($box, 0.5, { x: '0', ease: Power4.easeInOut })
                        // .to($box, 0.5, { y: '-30', ease: Power4.easeInOut })
                        // .to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })                                     
                        
                        // .to($box4, 2.2, {x: '-332', ease: Power4.easeInOut})
                        .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });
                        
                } animationRrOneNp()
                break;
            case 'Round Robin 1 Quantum P':
                function animationRrOneP(){
/* 
                    if (response === 'Round Robin 1 Quantums') {
                        $('#priorityBox1').text("1")
                        $('#priorityBox2').text("2")
                        $('#priorityBox3').text("1")
                        $('#priorityBox4').text("3")
                    } */

                    let $box = $('#box'),
                        $box2 = $('#box2'),
                        $box3 = $('#box3'),
                        $box4 = $('#box4'),
                        $title = $('#textH1'),
                        $subtitle = $('#textH3'),
                        $halfBox = $('#halfBox'),
                        $textBox = $('#textBox'),
                        $repeatAnimation = $('#repeatAnimation')
                        $boxes = $('.box'),
                        $textTime = $('#textTime'),
                        tl = new TimelineLite();

                    tl.pause();
                    TweenMax.to('.well-anim', 2, { repeat: -1, backgroundPosition: "-8800px", ease: SteppedEase.config(25) });

                    tlText = new TimelineLite();
                    tlText.from($textBox, 2, { x: '-250', autoAlpha: 0 }, Power4.easeInOut)

                    // animation timeline
                    tl.to($halfBox, 0, { x: '-350', autoAlpha: 0 })
                        .from([$title, $subtitle, $textTime], 0.7, { x: '150', y: '-40', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box2, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box3, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .from($box4, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
                        .to($box, 0.5, {x: '-365', ease: Power4.easeInOut})
                        .to($box, 0.5, {x: '-365', ease: Power4.easeInOut, autoAlpha: 0})
                        // halfbox
                        .to($halfBox, 0.5, {x: '-350', ease: Power4.easeInOut, autoAlpha:1})
                        .to($halfBox, 0.5, {y: '-100', ease: Power4.easeInOut, autoAlpha:1})
                        .to($box, 0, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        // box2
                        .to($box2, 1, { x: '-332', ease: Bounce.easeOut })
                        .to($box2, 1, { x: '-388', ease: Power4.easeOut })
                        .to($box2, 0.5, { x: '-388', ease: Power4.easeInOut, autoAlpha: 0 })
                        // back to cpu position
                        .to($box2, 0, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        .to($box, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 1 })

                        .to($halfBox, 0.5, {x: '310', ease: Power4.easeInOut, autoAlpha:1})
                        .to($halfBox, 0.5, {y: '-30', ease: Power4.easeInOut, autoAlpha:1})


                        .to($box, 1, {y: '-100', ease: Power4.easeInOut})
                        .to($box, 1, {x: '365', ease: Power4.easeInOut})

                        .to($box, 0.5, {y: '-30', ease: Power4.easeInOut})
                        .to($box3, 0.5, { x: '-332', ease: Power4.easeInOut, autoAlpha: 0 })
                        
                        .to($box4, 0.5, {x:'-200', ease: Power4.easeInOut})
                        .to($halfBox, 0.5, { x: '0', ease: Power4.easeInOut, autoAlpha: 1 })
                        .to($box, 0.5, {x:'65', ease: Power4.easeInOut})
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
            // case 'Round Robin 2 Quantums NP':
            //     function animationRrTwo(){

            //         if (response === 'Round Robin 2 Quantums') {
            //             $('#priorityBox1').text("1")
            //             $('#priorityBox2').text("2")
            //             $('#priorityBox3').text("1")
            //             $('#priorityBox4').text("3")
            //         }

            //         let $box = $('#box'),
            //             $box2 = $('#box2'),
            //             $box3 = $('#box3'),
            //             $box4 = $('#box4'),
            //             $title = $('#textH1'),
            //             $subtitle = $('#textH3')
            //             $repeatAnimation = $('#repeatAnimation')
            //             $boxes = $('.box'),
            //             tl = new TimelineLite();

            //         // animation timeline
            //         tl.from([$title, $subtitle], 0.7, { x: '150', y: '-40', autoAlpha: 0, ease: Power4.easeInOut })
            //             .from($box, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
            //             .from($box2, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
            //             .from($box3, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
            //             .from($box4, 0.5, { x: '150', autoAlpha: 0, ease: Power4.easeInOut })
            //             .to($box2, 2, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
            //             .to($box4, 2.2, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
            //             .to($box, 0.5, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
            //             .to($box3, 0.5, {x: '-332', ease: Power4.easeInOut, autoAlpha: 0})
            //             .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });
                        
            //     } animationRrTwo()
            //     break;
            default:
                break;
        }

    }

    $("#playAnimation").click(function () {
        let showTextBox = document.getElementById('textBox');
        showTextBox.style.visibility = 'hidden';

        let hint = document.getElementById("hintAudio");
        hint.play()
        let showhHalfBox = document.getElementById('halfBox');
        showhHalfBox.style.visibility = 'visible';
        tl.play();
    })


    $("#repeatAnimation").click(function () {

        // animationSjf()
        let hint = document.getElementById("hintAudio");
        hint.play()

        location.reload()

    });

}

loadAPI();







