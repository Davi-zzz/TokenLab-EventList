<template>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
body, html, #app{
  height: 100%;
}
body {
  background-color: #f5f5f6;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f5f5f6;
}

::-webkit-scrollbar-thumb {
  background: #a3a3a3;
  border-radius: 20px;
}
</style>