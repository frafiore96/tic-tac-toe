<template>
    <div class="board">
      <Cell v-for="(cell, index) in board" :key="index" :cell="cell" :index="index" @cellClicked="handleCellClicked" />
    </div>
  </template>
  
  <script>
  import Cell from './Cell.vue';
  
  export default {
    name: 'Board',
    components: {
      Cell
    },
    props: {
      board: Array
    },
    emits: ['cellClicked'],
    setup(props, { emit }) {
      const handleCellClicked = (index) => {
        emit('cellClicked', index);
      };
  
      return {
        handleCellClicked
      };
    }
  };
  </script>
  
  <style scoped>
  .board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 5px;
    background-color: #7586d3;
    padding: 5px;
    margin: 20px auto;
    width: max-content;
  }
  </style>
  