<template>
  <div id="app">
    <Header></Header>
    <Status :message="statusMessage" />
    <Board :board="board" @cellClicked="cellClicked" />
    <button @click="resetGame">Nuova Partita</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Header from './components/Header.vue';
import Status from './components/Status.vue';
import Board from './components/Board.vue';

export default {
  name: 'App',
  components: {
    Header,
    Status,
    Board
  },
  setup() {
    const currentPlayer = ref('X');
    const board = ref(Array(9).fill(''));
    const winner = ref(null);

    const statusMessage = computed(() => {
      if (winner.value) {
        return `Giocatore ${winner.value} ha vinto!`;
      } else if (board.value.every(cell => cell !== '')) {
        return 'È un pareggio!';
      } else {
        return `Turno del giocatore ${currentPlayer.value}`;
      }
    });

    const cellClicked = (index) => {
      if (board.value[index] === '' && !winner.value) {
        board.value[index] = currentPlayer.value;
        if (checkWinner()) {
          winner.value = currentPlayer.value;
        } else {
          currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
        }
      }
    };

    const checkWinner = () => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c];
      });
    };

    const resetGame = () => {
      board.value = Array(9).fill('');
      currentPlayer.value = 'X';
      winner.value = null;
    };

    return {
      currentPlayer,
      board,
      winner,
      statusMessage,
      cellClicked,
      resetGame
    };
  }
};
</script>

<style>
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  background-color: #7586d3;
}
</style>
