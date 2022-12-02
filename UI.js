const root  = document.body


const render = (element, module)=>{
    element.innerHTML = module
}

 const renderGame = ()=>{
    return `<div class="game-container">
    <div class="score-container">
        <div class="player">Player</div>
        <div class="score">Score:</div>
        <div class="high-score">High Score: </div>
    </div>
    <div class="container-display"></div>
    <div class="controller">
        <button class="easy">Easy</button>
        <button class="medium">Medium</button>
        <button class="hard">Hard</button>
        <button class="start">Start Game</button>
        <button class="stop">Stop Game</button>
    </div>
    <audio id="audio" src="./assets/mixkit-egg-bubble-pop-3192.wav"></audio>
</div>`
}



const renderIntro = (element) => {
    return ` <div class="container">
    <h1>Bubble Game</h1>
    <input placeholder="Enter the name: " type="text" class="input-name">
    <button class="enter">Enter</button>
</div>`
}

render(root, renderIntro())


