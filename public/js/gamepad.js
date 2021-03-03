const gamepad = {
    controller: {},
    turbo: false,
    connect: function () { },
    disconnect: function () { },
    update: function () { },
    buttonPressed: function () { },
    buttons: ['DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right',
        'Start', 'Back', 'Axis-Left', 'Axis-Right',
        'LB', 'RB', 'Power', 'A', 'B', 'X', 'Y',],
    buttonsCache: [],
    buttonsStatus: [],
    axesStatus: []
}

window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);