$(function () {

    let player1 = {
        id: 1,
        text: 'X',
        color: '#FF0000FF',
    };

    let player2 = {
        id: 2,
        text: 'O',
        color: '#0011ff',
    };

    let currentPlayer = player1;

    let counter = 0;

    let table = {
        1: {
            playerId: null,
            isFilled: false,
            row: 1,
            column: 1
        },
        2: {
            playerId: null,
            isFilled: false,
            row: 1,
            column: 2
        },
        3: {
            playerId: null,
            isFilled: false,
            row: 1,
            column: 3
        },
        4: {
            playerId: null,
            isFilled: false,
            row: 2,
            column: 1
        },
        5: {
            playerId: null,
            isFilled: false,
            row: 2,
            column: 2
        },
        6: {
            playerId: null,
            isFilled: false,
            row: 2,
            column: 3
        },
        7: {
            playerId: null,
            isFilled: false,
            row: 3,
            column: 1
        },
        8: {
            playerId: null,
            isFilled: false,
            row: 3,
            column: 2
        },
        9: {
            playerId: null,
            isFilled: false,
            row: 3,
            column: 3
        },
    };

    let hasWinner = false;

    $('button').click(function (event) {
        counter++;
        buttonNumber = event.target.id.charAt(event.target.id.length - 1)

        if (table[buttonNumber].isFilled || hasWinner) {
            return;
        }

        $("#" + event.target.id).html(currentPlayer.text).css('color', currentPlayer.color);
        table[buttonNumber].isFilled = true;
        table[buttonNumber].playerId = currentPlayer.id;
        currentPlayer = currentPlayer == player1 ? player2 : player1;
        checkWinConditions();
        setTimeout(function () {
                if (counter == 9 && !hasWinner) {
                    window.alert('DEU VELHA, CLIQUE PARA REINICIAR');
                    restart(true);
                }
            }, 300
        );
    });

    function checkWinConditions() {
        checkHorizontalWin();
        checkVerticalWin();
        checkDiagonalWin();
    }

    function checkHorizontalWin() {
        for (let button of Object.keys(table)) {
            button = parseInt(button)
            if (table[button].isFilled) {
                if (table[button + 1]) {
                    if (table[button + 1].isFilled &&
                        table[button + 1].playerId == table[button].playerId &&
                        table[button + 1].row == table[button].row) {
                        if (table[button + 2]) {
                            if (table[button + 2].isFilled &&
                                table[button + 2].playerId == table[button + 1].playerId &&
                                table[button + 2].row == table[button + 1].row) {
                                hasWinner = true;
                                console.log('HORZONTAL');
                                setTimeout(function () {
                                        window.alert('O JOGADOR ' + table[button].playerId + ' VENCEU')
                                        restart(true);
                                    }, 100
                                );
                                return;
                            }
                        }
                    }
                }
            }
        }
    }

    function checkVerticalWin() {
        for (let button of Object.keys(table)) {
            button = parseInt(button)
            if (table[button].isFilled) {
                if (table[button + 3]) {
                    if (table[button + 3].isFilled &&
                        table[button + 3].playerId == table[button].playerId &&
                        table[button + 3].column == table[button].column) {
                        if (table[button + 6]) {
                            if (table[button + 6].isFilled &&
                                table[button + 6].playerId == table[button + 3].playerId &&
                                table[button + 6].column == table[button + 3].column) {
                                console.log('VERTICAL');
                                hasWinner = true;
                                setTimeout(function () {
                                        window.alert('O JOGADOR ' + table[button].playerId + ' VENCEU');
                                        restart(true);
                                    }, 100
                                );
                                return;
                            }
                        }
                    }
                }
            }
        }
    }

    function checkDiagonalWin() {
        for (let button of Object.keys(table)) {
            button = parseInt(button)
            if (table[button].isFilled) {
                if (table[button + 4]) {
                    if (table[button + 4].isFilled && table[button + 4].playerId == table[button].playerId) {
                        if (table[button + 8]) {
                            if (table[button + 8].isFilled && table[button + 8].playerId == table[button + 4].playerId) {
                                console.log('DIAGONAL');
                                hasWinner = true;
                                setTimeout(function () {
                                        window.alert('O JOGADOR ' + table[button].playerId + ' VENCEU');
                                        restart(true);
                                    }, 100
                                );
                                return;
                            }
                        }
                    }
                }
                // Esse foi a unica excessão:
                if (button == 7) {
                    if (table[button - 2].isFilled && table[button - 2].playerId == table[button].playerId) {
                        if (table[button - 4].isFilled && table[button - 4].playerId == table[button - 2].playerId) {
                            console.log('DIAGONAL');
                            hasWinner = true;
                            setTimeout(function () {
                                    window.alert('O JOGADOR ' + table[button].playerId + ' VENCEU');
                                    restart(true);
                                }, 100
                            );
                            return;
                        }
                    }
                }
            }
        }
    }


    $('#restart').click(function (event) {
        restart();
    });

    function restart(skipConfirm = false) {
        if (!skipConfirm) {
            if (!confirm('Deseja realmente reiniciar o jogo?')) {
                return;
            }
        }
        $('button').html('');
        table = {
            1: {
                playerId: null,
                isFilled: false,
                row: 1,
                column: 1
            },
            2: {
                playerId: null,
                isFilled: false,
                row: 1,
                column: 2
            },
            3: {
                playerId: null,
                isFilled: false,
                row: 1,
                column: 3
            },
            4: {
                playerId: null,
                isFilled: false,
                row: 2,
                column: 1
            },
            5: {
                playerId: null,
                isFilled: false,
                row: 2,
                column: 2
            },
            6: {
                playerId: null,
                isFilled: false,
                row: 2,
                column: 3
            },
            7: {
                playerId: null,
                isFilled: false,
                row: 3,
                column: 1
            },
            8: {
                playerId: null,
                isFilled: false,
                row: 3,
                column: 2
            },
            9: {
                playerId: null,
                isFilled: false,
                row: 3,
                column: 3
            },
        };

        counter = 0;
        hasWinner = false;
        currentPlayer = player1
    }
});







