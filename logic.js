const nameInput = document.querySelector('.input-name')
const submit = document.querySelector('.enter')



submit.addEventListener('click', () => {
    state.name = nameInput.value
    render(root, renderGame())
    const audio = new Audio("./assets/mixkit-egg-bubble-pop-3192.wav");
    const player = document.querySelector('.player')
    const highScore = document.querySelector('.high-score')
    const display = document.querySelector('.container-display')
    const start = document.querySelector('.start')
    const stop = document.querySelector('.stop')
    const easy = document.querySelector('.easy')
    const medium = document.querySelector('.medium')
    const hard = document.querySelector('.hard')
    player.innerHTML = `Player: ${state.name}`
    highScore.innerHTML = `High score: ${state.highScore}`



    const startGame = (initInterval) => {
        state.speed === null && clearInterval(interval)
        const ball = document.createElement('div')
        ball.style.position = 'absolute'
        ball.style.marginTop = 'auto'
        ball.style.top = `${Math.ceil(Math.random() * 300)}px`
        ball.style.left = `${Math.ceil(Math.random() * 300)}px`
        ball.classList.add('ball')
        display.append(ball)
        document.querySelectorAll('.ball').length === 50 && (clearInterval(initInterval), display.innerHTML = "Game Over!")
        document.querySelectorAll('.ball').forEach(ball => {
            ball.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                audio.currentTime = 0;
                audio.play()
                ball.remove()
                state.score = state.score + 1

                document.querySelector('.score').innerHTML = `Score: ${state.score}`

            })
        })



    }

    const interval = setInterval(startGame, state.speed)

    start.addEventListener('click', () => {
        state.speed = 800
        state.score = 0
        document.querySelector('.score').innerHTML = `Score: ${state.score}`
        display.innerHTML = null
        clearInterval(interval)
        const easyinterval = setInterval(() => { startGame(easyinterval) }, state.speed)
        stop.addEventListener('click', () => { clearInterval(easyinterval) })

    })


    easy.addEventListener('click', () => {
        state.speed = 800
        state.score = 0
        document.querySelector('.score').innerHTML = `Score: ${state.score}`
        display.innerHTML = null
        clearInterval(interval)
        const easyinterval = setInterval(() => { startGame(easyinterval) }, state.speed)
        stop.addEventListener('click', () => { clearInterval(easyinterval) })

    })

    medium.addEventListener('click', () => {
        state.score = 0
        state.speed = 500
        document.querySelector('.score').innerHTML = `Score: ${state.score}`
        display.innerHTML = null
        clearInterval(interval)
        const mediuminterval = setInterval(() => { startGame(mediuminterval) }, state.speed)
        stop.addEventListener('click', () => { clearInterval(mediuminterval) })
    })


    hard.addEventListener('click', () => {
        state.score = 0
        state.speed = 200
        document.querySelector('.score').innerHTML = `Score: ${state.score}`
        display.innerHTML = null
        clearInterval(interval)
        const hardinterval = setInterval(() => { startGame(hardinterval) }, state.speed)
        stop.addEventListener('click', () => { clearInterval(hardinterval) })
    })





})
