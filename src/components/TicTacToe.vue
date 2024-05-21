<template>
  <div class="tictactoe">
    <header>
      <h1>Tic Tac Toe</h1>
    </header>
    <div class="status">
      <p>{{ statusMessage }}</p>
    </div>
    <div class="board">
      <div class="cell" v-for="(cell, index) in board" :key="index" @click="cellClicked(index)" :class="getClass(cell)">
        {{ cell }}
      </div>
    </div>
    <button @click="resetGame">Nuova Partita</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPlayer: 'X',
      board: Array(9).fill(''),
      winner: null
    };
  },
  computed: {
    statusMessage() {
      if (this.winner) {
        return `Giocatore ${this.winner} ha vinto!`;
      } else if (this.board.every(cell => cell !== '')) {
        return 'È un pareggio!';
      } else {
        return `Turno del giocatore ${this.currentPlayer}`;
      }
    }
  },
  methods: {
    cellClicked(index) {
      if (this.board[index] === '' && !this.winner) {
        this.$set(this.board, index, this.currentPlayer);
        if (this.checkWinner()) {
          this.winner = this.currentPlayer;
        } else {
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    },
    checkWinner() {
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
        return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c];
      });
    },
    resetGame() {
      this.board = Array(9).fill('');
      this.currentPlayer = 'X';
      this.winner = null;
    },
    getClass(cell) {
      return {
        'cell-x': cell === 'X',
        'cell-o': cell === 'O'
      };
    }
  }
};
</script>

<style scoped>
.tictactoe {
  text-align: center;
}

h1 {
  font-size: 40px;
}
.status p {
  font-size: 23px;
  font-weight: bold;

}
header {
  background-color: #7586d3;
  color: white;
  padding: 10px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
  background-color: #7586d3;
  padding: 5px;
  margin: 20px auto;
  width: max-content;
}

.cell {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.cell:hover {
  background-color: #f0f0f0;
}

.cell-x {
  font-size: 2.5em;
  font-weight: 500;
  color: #7586d3;
}


.cell-o {
  font-size: 2.5em;
  font-weight: 500;
  color: #d173bd;
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
