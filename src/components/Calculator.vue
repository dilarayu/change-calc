<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { MATH_OPERATORS, OPERATORS } from 'src/components/constants';

const MAIN_OPERATOR = 0;

const state = reactive({ number: '', expression: '', total: 0 });
const difference = ref(0);

function addOperation(operator: number | string): void {
  state.expression = state.expression + String(operator);
}

function handleSum(): void {
  state.expression = eval(state.expression);
}

function handleReset(): void {
  state.expression = '';
}

function calcDiff(bankNote: number) {
  difference.value = bankNote - Number(state.expression);
}
</script>

<template>
  <h1>Rückgeld: {{ difference }}</h1>

  <div class="structure">
    <div class="calculators">
      <div class="expression">
        {{ state.expression }}
      </div>
      <div class="operators">
        <q-btn
          round
          @click="addOperation(number)"
          v-for="(number, index) in OPERATORS"
          :class="number === MAIN_OPERATOR ? 'botao-maior' : 'botao'"
          :key="index"
        >
          {{ number }}
        </q-btn>
      </div>

      <div class="flex-row inline-flex itmes-center" style="margin-top: 20px">
        <q-btn style="width: 50px; margin-right: 20px" @click="handleReset">
          AC
        </q-btn>
        <q-btn style="width: 50px" @click="handleSum()">=</q-btn>
      </div>
    </div>
    <div class="bills">
      <div>
        <img
          style="width: 15rem"
          @click="calcDiff(100)"
          src="../assets/hundertEur.jpg"
        />
        <img
          style="width: 15rem"
          @click="calcDiff(50)"
          src="../assets/fünfzigEur.jpg"
        />
      </div>
      <div>
        <img
          style="width: 15rem"
          @click="calcDiff(20)"
          src="../assets/zwantigEur.jpg"
        />
        <img
          style="width: 15rem"
          @click="calcDiff(10)"
          src="../assets/zehnEur.jpg"
        />
      </div>
      <div>
        <img
          style="width: 15rem"
          @click="calcDiff(5)"
          src="../assets/fünfEur.jpg"
        />
        <input />
      </div>
    </div>
  </div>
</template>

<style>
.structure {
  display: flex;
  flex-direction: row;
}
.calculators {
  height: 100vh;
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 2px;
}

.bills {
  width: 40rem;
  display: flex;
  flex-direction: column;
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
  background-color: antiquewhite;
  color: black;
}

.operators {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  max-width: 400px;
  width: 100%;
  max-height: 400px;
  height: 100%;
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
