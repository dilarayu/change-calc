<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { reactive } from 'vue'
import { OPERATORS } from '@/constants'

const MAIN_OPERATOR = 0

const state = reactive({ number: '', expression: '', total: 0 })

function addOperation(operador: number | string): void {
  state.expression = state.expression + String(operador)
}

function handleSum(): void {
  state.expression = eval(state.expression)
}

function handleReset(): void {
  state.expression = ''
}
</script>

<template>
  <div class="calculators">
    <div class="expression">
      {{ state.expression }}
    </div>
    <div class="operators">
      <button
        @click="addOperation(number)"
        v-for="(number, index) in OPERATORS"
        :class="number === MAIN_OPERATOR ? 'botao-maior' : 'botao'"
        :key="index"
        type="button"
      >
        {{ number }}
      </button>
    </div>

    <div class="flex-row inline-flex itmes-center" style="margin-top: 20px">
      <button style="width: 50px; margin-right: 20px" @click="handleReset">AC</button>
      <button style="width: 50px" @click="handleSum()">=</button>
    </div>
  </div>
</template>

<style>
.calculators {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.expression {
  max-width: 392px;
  width: 100%;
  height: 32px;
  margin-bottom: 16px;
  font-size: 1.25rem;
  text-align: right;
  padding: 6px;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: white;
}

.operators {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  max-width: 400px;
  width: 100%;
}

.botao,
.botao-maior {
  display: flex;
  justify-content: center;
}

.botao-maior {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
