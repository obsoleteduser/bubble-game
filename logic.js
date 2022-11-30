const nameInput = document.querySelector('.input-name')
const submit = document.querySelector('.enter')



submit.addEventListener('click', () => {
    state.name = nameInput.value
    render(root, renderGame())
    const player = document.querySelector('.player')
    const highScore = document.querySelector('.high-score')
    const display = document.querySelector('.container-display')
    player.innerHTML = `Player: ${state.name}`
    highScore.innerHTML = `Score: ${state.highScore}`

    console.log(document.querySelector('.ball'))

   const interval = setInterval(() => {
        
        const ball = document.createElement('div')
        ball.style.position = 'absolute'
        ball.style.marginTop = 'auto'
        ball.style.top = `${Math.ceil(Math.random() * 300)}px`
        ball.style.left = `${Math.ceil(Math.random() * 300)}px`
        ball.classList.add('ball')
        display.append(ball)
        document.querySelectorAll('.ball').length === 5 && (clearInterval(interval), display.innerHTML = "Game Over!")
        document.querySelectorAll('.ball').forEach(ball => {
            ball.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                ball.remove() 
                state.score = state.score + 1
                
                document.querySelector('.score').innerHTML = `Score: ${state.score}`

            })
        })


    }, state.speed)



})


