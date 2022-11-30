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
    const easy = document.querySelector('.easy')
    const medium = document.querySelector('.medium')
    const hard = document.querySelector('.hard')

    const startGame = () => {

        const ball = document.createElement('div')
        ball.style.position = 'absolute'
        ball.style.marginTop = 'auto'
        ball.style.top = `${Math.ceil(Math.random() * 300)}px`
        ball.style.left = `${Math.ceil(Math.random() * 300)}px`
        ball.classList.add('ball')
        display.append(ball)
        document.querySelectorAll('.ball').length === 50 && (clearInterval(interval), display.innerHTML = "Game Over!")
        document.querySelectorAll('.ball').forEach(ball => {
            ball.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                ball.remove()
                state.score = state.score + 1

                document.querySelector('.score').innerHTML = `Score: ${state.score}`

            })
        })



    }

    const interval = setInterval(startGame, state.speed)

    easy.addEventListener('click', () => {
        state.speed = 1000
        display.innerHTML = null
        clearInterval(interval)
        const easyinterval = setInterval(startGame, state.speed)
        

    })

    medium.addEventListener('click', ()=>{
        state.speed = 700
        display.innerHTML = null
        clearInterval(interval)
        const mediuminterval = setInterval(startGame, state.speed)
    })


    hard.addEventListener('click', ()=>{
        state.speed = 300
        display.innerHTML = null
        clearInterval(interval)
        const hardinterval = setInterval(startGame, state.speed)
    })

   



})





// console.log(easy)

// easy.addEventListener('click', ()=>{
//     state.speed = 1000
// })

// medium.addEventListener('click', ()=>{
//     state.speed = 700
// })

// hard.addEventListener('click', ()=>{
//     state.speed = 400
// })