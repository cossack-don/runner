<script setup lang="ts">
import {Container, ListItems, TitleText,SyntaxHighlighter} from "./components";
import PayloadJSON from "./payload.json"
</script>

<template>
<TitleText style="text-align: center" color="red" as="h2">Справочник</TitleText>

  <SyntaxHighlighter language="javascript">
    const message = 'Hello, highlight.js!';
    console.log(message);
  </SyntaxHighlighter>
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
</template>
