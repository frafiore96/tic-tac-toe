<template>
  <div class="cell" @click="handleClick" :class="cellClass">
    {{ cell }}
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Cell',
  props: {
    cell: String,
    index: Number
  },
  emits: ['cellClicked'],
  setup(props, { emit }) {
    const handleClick = () => {
      emit('cellClicked', props.index);
    };

    const cellClass = computed(() => {
      return {
        'cell-x': props.cell === 'X',
        'cell-o': props.cell === 'O'
      };
    });

    return {
      handleClick,
      cellClass
    };
  }
};
</script>

<style scoped>
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
</style>
