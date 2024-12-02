<template>
    <div class="customer-experience">
      <div class="image-container">
        <img src="https://via.placeholder.com/300" alt="Retro Device" />
      </div>
      <div class="content-container">
        <h1>Experiencia del Usuario</h1>
        <p>
            Descripcion de experiencia del usuario
        </p>
        <button @click="talkToConsultant">Habla con un consultor de WMS</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomerExperience',
    methods: {
      talkToConsultant() {
        alert('Connecting to a consultant...');
      }
    }
  }
  </script>
  
  <style scoped>
  .customer-experience {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 60px;
    

    h1, p{
        color: aliceblue;
    }
  }
  
  .image-container {
    flex: 1;
    padding-right: 20px;
  }
  
  .content-container {
    flex: 2;
    text-align: left;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: rgb(0, 223, 130);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: rgb(44, 194, 149);
    color: rgb(4, 34, 34);
    transition: 0.5s;
  }
  </style>
  