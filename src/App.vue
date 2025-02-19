<script setup lang="ts">
import {isRef} from "vue";
import {Container, ListItems, TitleText,SyntaxHighlighter} from "./components";
import PayloadJSON from "./payload.json"
import {PatternBuilder} from './example-patterns/builder'
import {_checks} from 'chkutils'

{{_checks.isDef([12])}}

  const builder = PatternBuilder().setName('Laptop').setPrice(1200).setCategory('Electronics').setDescription('A powerful laptop for work and gaming.').build();

  // console.log(isRef(builder),builder)
</script>

<template>
<TitleText style="text-align: center" color="red" as="h2">Справочник</TitleText>

  <SyntaxHighlighter language="javascript">
    const message = 'Hello, highlight.js!';
    console.log(message);
  </SyntaxHighlighter>

  <TitleText style="text-align: center" color="red" as="h2">JavaScript</TitleText>

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
</Container>

  <TitleText style="text-align: center" color="red" as="h2">Vue.js v3</TitleText>


  <Container row wrap between>
    <Container>
      <TitleText
          style="margin-bottom: 20px"
          color="blue"
          as="h2">
        {{PayloadJSON.Vue.module1.title}}
      </TitleText>
      <ListItems :list="PayloadJSON.Vue.module1.payload"/>
    </Container>

    <Container>
      <TitleText
          style="margin-bottom: 20px"
          color="blue"
          as="h2">
        {{PayloadJSON.Vue.module2.title}}
      </TitleText>
      <ListItems :list="PayloadJSON.JS.module2.payload"/>
    </Container>

    <Container>
      <TitleText
          style="margin-bottom: 20px"
          color="blue"
          as="h2">
        {{PayloadJSON.Vue.module3.title}}
      </TitleText>
      <ListItems :list="PayloadJSON.JS.module3.payload"/>
    </Container>
  </Container>


  <TitleText style="text-align: center" color="red" as="h2">Паттерны</TitleText>

  <Container row wrap between>
    <Container>
      <TitleText
          style="margin-bottom: 20px"
          color="blue"
          as="h2">
        {{PayloadJSON.Patterns.module1.title}}
      </TitleText>
      <ListItems :list="PayloadJSON.Patterns.module1.payload"/>
    </Container>

    <Container>
      <TitleText
          style="margin-bottom: 20px"
          color="blue"
          as="h2">
        {{PayloadJSON.Patterns.module2.title}}
      </TitleText>
      <ListItems :list="PayloadJSON.Patterns.module2.payload"/>
    </Container>

    <Container>
      <TitleText
          style="margin-bottom: 20px"
          color="blue"
          as="h2">
        {{PayloadJSON.Patterns.module3.title}}
      </TitleText>
      <ListItems :list="PayloadJSON.Patterns.module3.payload"/>
    </Container>
  </Container>
</template>
