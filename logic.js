const nameInput = document.querySelector('.input-name')
const submit = document.querySelector('.enter')


submit.addEventListener('click', ()=>{
    state.name = nameInput.value
    render(root, renderGame())
    const player = document.querySelector('.player')
    const highScore = document.querySelector('.high-score')
    const display = document.querySelector('.container-display')
    player.innerHTML = `Player: ${state.name}`
    highScore.innerHTML = `Score: ${state.highScore}`
    

    setInterval(()=>{
        const ball = document.createElement('div')
        ball.classList.add('ball')
        ball.style.top = `${Math.ceil(Math.random() * 100) }px`
        ball.style.left = `${Math.ceil(Math.random() * 100)}px`
        display.append(ball)
        document.querySelectorAll('.ball').forEach(ball => {
            ball.addEventListener('click', ()=>{
                ball.remove()
                state.score = state.score + 1
                document.querySelector('.score').innerHTML = `Score: ${state.score}`

            })
        })
    }, state.speed)

    

})


