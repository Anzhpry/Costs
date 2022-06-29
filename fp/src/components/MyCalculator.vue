<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <div class="display">
      <input v-model.number="operand1" type="number" name="operand1" />
      <input v-model.number="operand2" type="number" name="operand2" />
      = {{ result }}
    </div>
    <div class="errors" v-if="error" name="error">Ошибка: {{ error }}</div>
    <div class="keyboard">
      <button
        v-for="operand in operands"
        :key="operand"
        @click="calculate(operand)"
        :name="operand"
      >
        {{ operand }}
      </button>
    </div>

    <div>
      <input type="checkbox" id="keybord" v-model="checkedNames" />
      <label for="keybord">Отобразить экранную клавиатуру</label>
    </div>

    <div v-show="checkedNames">
      <button v-for="btn in btns" :key="btn" @click="pushBtn(btn)">
        {{ btn }}
      </button>
      <button name="delete" @click="deleteNum()">&#10229;</button>
    </div>

    <div>
      <input
        type="radio"
        id="one"
        name="operand"
        value="operand1"
        v-model="picked"
      />
      <label for="one">Операнд 1</label>
      <input
        type="radio"
        id="two"
        name="operand"
        value="operand2"
        v-model="picked"
      />
      <label for="two">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      operands: ["+", "-", "/", "*", "**"],
      operand1: 0,
      operand2: 0,
      error: "",
      result: 0,
      checkedNames: "",
      btns: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      picked: "",
    };
  },
  methods: {
    deleteNum() {
      if (this.picked === "operand1") {
        this.operand1 = Number(String(this.operand1).slice(0, -1));
      } else if (this.picked === "operand2") {
        this.operand2 = Number(String(this.operand2).slice(0, -1));
      }
    },
    pushBtn(btn) {
      if (this.picked === "operand1") {
        this.operand1 = +(this.operand1 + btn);
      } else if (this.picked === "operand2") {
        this.operand2 = +(this.operand2 + btn);
      }
    },
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "/":
          this.divide();
          break;
        case "*":
          this.multiply();
          break;
        case "**":
          this.degree();
          break;
      }
    },
    add() {
      this.result = this.operand1 + this.operand2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      if (this.operand2 === 0) {
        this.error = "На 0 делить нельзя!";
        return;
      } else {
        this.result = this.operand1 / this.operand2;
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    degree() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
  },
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
