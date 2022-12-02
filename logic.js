const nameInput = document.querySelector('.input-name')
const submit = document.querySelector('.enter')






submit.addEventListener('click', () => {
    state.name = nameInput.value
    render(root, renderGame()) && (state.loginPage = false)
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



    const startGame = (initInterval) => {
        state.speed === null && clearInterval(interval)
        highScore.innerHTML = `High score: ${state.highScore}`

        const ball = document.createElement('div')
        ball.style.position = 'absolute'
        ball.style.marginTop = 'auto'
        ball.style.top = `${Math.ceil(Math.random() * 300)}px`
        ball.style.left = `${Math.ceil(Math.random() * 300)}px`
        ball.classList.add('ball')
        display.append(ball)
        document.querySelectorAll('.ball').length === 50 && (clearInterval(initInterval), display.innerHTML = "Game Over!", highScore.innerHTML = `${state.highScore}`)
        document.querySelectorAll('.ball').forEach(ball => {
            ball.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                audio.currentTime = 0;
                audio.play()
                ball.remove()
                state.score = state.score + 1
                state.score > state.highScore && localStorage.setItem('highScore', state.score)
                document.querySelector('.score').innerHTML = `Score: ${state.score}`

            })
        })



    }

    const interval = setInterval(startGame, state.speed)

    start.addEventListener('click', () => {
        state.speed = 800
        state.score = 0
        state.highScore = localStorage.getItem('highScore')
        document.querySelector('.score').innerHTML = `Score: ${state.score}`
        display.innerHTML = null
        clearInterval(interval)
        const easyinterval = setInterval(() => { startGame(easyinterval) }, state.speed)
        stop.addEventListener('click', () => { clearInterval(easyinterval) })
        highScore.innerHTML = `High score: ${state.highScore}`
    })


    easy.addEventListener('click', () => {
        state.speed = 800
        state.score = 0
        state.highScore = localStorage.getItem('highScore')
        document.querySelector('.score').innerHTML = `Score: ${state.score}`
        display.innerHTML = null
        clearInterval(interval)
        const easyinterval = setInterval(() => { startGame(easyinterval) }, state.speed)
        stop.addEventListener('click', () => { clearInterval(easyinterval) })
        highScore.innerHTML = `High score: ${state.highScore}`
    })

    medium.addEventListener('click', () => {
        state.score = 0
        state.speed = 500
        state.highScore = localStorage.getItem('highScore')
        document.querySelector('.score').innerHTML = `Score: ${state.score}`
        display.innerHTML = null
        clearInterval(interval)
        const mediuminterval = setInterval(() => { startGame(mediuminterval) }, state.speed)
        stop.addEventListener('click', () => { clearInterval(mediuminterval) })
        highScore.innerHTML = `High score: ${state.highScore}`
    })


    hard.addEventListener('click', () => {
        state.score = 0
        state.speed = 200
        state.highScore = localStorage.getItem('highScore')
        highScore.innerHTML = `High score: ${state.highScore}`
        document.querySelector('.score').innerHTML = `Score: ${state.score}`
        display.innerHTML = null
        clearInterval(interval)
        const hardinterval = setInterval(() => { startGame(hardinterval) }, state.speed)
        stop.addEventListener('click', () => { clearInterval(hardinterval) })
        highScore.innerHTML = `High score: ${state.highScore}`
    })





})
