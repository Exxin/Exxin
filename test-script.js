const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gridSize = 58; // Розмір клітинки
let offsetY = 0; // Зсув сітки
let speed = 0.5; // Швидкість руху

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#191919";
    ctx.lineWidth = 1;

    // Малюємо горизонтальні лінії
    for (let y = offsetY % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Малюємо вертикальні лінії
    for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
}

function animate() {
    offsetY -= speed; // Змінюємо напрямок руху
    drawGrid();
    requestAnimationFrame(animate);
}

animate();