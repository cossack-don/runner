<script setup lang="ts">
import {Container, ListItems, TitleText} from "./components";
import PayloadJSON from "./payload.json"
</script>

<template>
<TitleText style="text-align: center" color="red" as="h2">Справочник</TitleText>

<Container row wrap between>
  <Container>
    <TitleText
        style="margin-bottom: 20px"
        color="blue"
        as="h2">
      {{PayloadJSON.JS.module1.title}}
    </TitleText>
    <ListItems :list="PayloadJSON.JS.module1.payload"/>
  </Container>

  <Container>
    <TitleText
        style="margin-bottom: 20px"
        color="blue"
        as="h2">
      {{PayloadJSON.JS.module2.title}}
    </TitleText>
    <ListItems :list="PayloadJSON.JS.module2.payload"/>
  </Container>

  <Container>
    <TitleText
        style="margin-bottom: 20px"
        color="blue"
        as="h2">
      {{PayloadJSON.JS.module3.title}}
    </TitleText>
    <ListItems :list="PayloadJSON.JS.module3.payload"/>
  </Container>

  <Container>
    <TitleText
        style="margin-bottom: 20px"
        color="blue"
        as="h2">
      {{PayloadJSON.JS.module2.title}}
    </TitleText>
    <ListItems :list="PayloadJSON.JS.module2.payload"/>
  </Container>
</Container>

<!--  <code>const userData = {-->
<!--    name: "John",-->
<!--    age: 25,-->
<!--    isOnline: true-->
<!--    } <br/>-->
<!--    console.log(Object.entries(userData)); <br/>-->
<!--    //возвращает: [["name", "John"], ["age", 25], ["isOnline", true]]-->
<!--  </code>-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
