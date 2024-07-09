<template>
    <div class="status">
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Status',
    props: {
      message: String
    }
  };
  </script>
  
  <style scoped>
  .status p {
    font-size: 23px;
    font-weight: bold;
  }
  </style>
  