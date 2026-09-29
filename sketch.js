const r = require("raylib");

const WINDOW_WIDTH = 400;
const WINDOW_HEIGHT = 400;
const TITLE = "Raylib Template";
const FPS = 60;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

function update() {

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    // Start Coding


    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};