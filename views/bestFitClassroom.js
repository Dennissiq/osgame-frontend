function loadAPI() {
    let gameapi = axios.create({
        baseURL: "http://localhost:8080/api/rest/game",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
        // timeout: 1000
    });

    // gameapi.get('/random')
    gameapi.get('/bestFit')
        .then((response) => {
            schedulerName(response.data);
        })
        .catch((error) => {
            // location.href('http://localhost:8080/public/404.html')
            // window.location.href = "http://localhost:8080/public/404.html"
            alert(error + '\nPlease connect the gameapi backend server');
        })

    function schedulerName(response) {
        console.log('alocação de memória: ' + response)
        
        // Set scheduler name
        $(document).ready(function () {
            console.log("titulo"+ response)
            $('#textH1').text('Estratégia de Alocação')
            $('#textH3').text(response)
            $('#textListProcess').text('Lista de Processos')
            $('#textContent').text("Best Fit (melhor encaixe), consiste em verificar toda a lista e procurar o buraco que tiver espaço mais próximo das necessidades do processo. É mais lento, e desempenho pior que o First Fit")
        })
        switch (response) {
            case 'Best Fit':
                function animationBestFit() {
                    if (response == 'Best Fit') {
                        $('#memoryRectangle2').text("UI0Detect.exe 10K")
                    }
                    
                    let $box = $('#box-memory'),
                        $box2 = $('#box-memory2'),
                        $box3 = $('#memory-piece1'),
                        $box4 = $('#memory-piece2'),
                        $box5 = $('#memory-piece3'),
                        $box6 = $('#box-memory3'),
                        
                        $title = $('#textH1'),
                        $subtitle = $('#textH3'),
                        $textTime = $('#textTime'),
                        $textListProcess = $('#textListProcess'),
                        $repeatAnimation = $('#repeatAnimation')
                        $boxes = $('.box'),
                        $textBox = $('#textBox'),
                        tl = new TimelineLite();

                    tl.pause();
                    TweenMax.to('.well-anim', 2, { repeat: -1, backgroundPosition: "-8800px", ease: SteppedEase.config(25) });

                    tlText = new TimelineLite();
                    tlText.from($textBox, 2, { x: '-250', autoAlpha: 0}, Power4.easeInOut)

                    // animation timeline
                    tl.from([$title, $subtitle, $textTime], 0.7, { x: '150', y: '-40', autoAlpha: 0, ease: Power4.easeInOut })
                      .from($textListProcess, 0.1 , { x: '-300',  autoAlpha: 0, ease: Power4.easeInOut })
                      .from($textListProcess, 0.1 , { y: '-300',  autoAlpha: 0, ease: Power4.easeInOut })
                      .to  ($textListProcess, 0.1 , { x: '-290',  autoAlpha: 1, ease: Power4.easeInOut })
                       
                      .from([$box, $box3, $box4, $box5],  0.5, { x: '150',  autoAlpha: 0, ease: Power4.easeInOut })
                      .from($box2, 0.5, { x: '-30',  autoAlpha: 0, ease: Power4.easeInOut })
                      
                      .to  ($box2, 2.5, { x: '145',  autoAlpha: 1, ease: Bounce.easeOut })
                      .to  ($box2, 0.5, { y: '108',   autoAlpha: 1, ease: Power4.easeInOut })
                      .to  ($box2, 0.5, { x: '270',  autoAlpha: 1, ease: Power4.easeInOut })
                                      
                      .from($repeatAnimation, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });
                    } animationBestFit()
               break;
           default:
               break;
        }

    }

    $("#playAnimation").click(function () {
        let showTextBox = document.getElementById('textBox');
        showTextBox.style.visibility = 'hidden';

        let hint = document.getElementById("hintAudio");
        hint.play();
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