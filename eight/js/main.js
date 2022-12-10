import {Tile, GameView, clickToTail} from "./gameview.js"
import {move} from "./game.js"

const initialState = [
    [4, 1, 3],
    [7, 2, 5],
    [8, 0, 6]]

let t1 = new Tile(0, 0, 2);
t1.draw();

let s1 = initialState
new GameView(s1)


canvas.addEventListener('click', moveView)


function moveView(event)
{
    const [i, j] = clickToTail(event.offsetX, event.offsetY)
    s1 = move(s1, i, j)
    new GameView(s1)
}

