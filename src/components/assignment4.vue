<template>
  <div class="about">
      <!-- dynamic style-->
    <h1 :style="{color : 'red'}">Computed examples</h1>
    <!-- computed variables -->
    <p>FullName: {{ fullName }}</p>
    <p>Filter even Numbers: {{ filterEvenNumbers }}</p>
    <p>Filter odd numbers: {{ filterOddNumbers }}</p>
    <!--  conditonal dynamic style-->
    <h1 :style="[ isgreen? {color: 'green', fontsize: 16+'px'} : {color: 'red'} ]">
        Watcher example</h1>
    Enter hours to convert to Minutes:<input v-model="hours" />Minutes:<input
      v-model="minutes"
    /><br><br>
    <!-- dynamic class -->
    <h1 :class="mixinclass">Mixins example</h1>
    <!--conditional dynamic style-->
    <div :class="{darkmode : isloggedin=== 'true', whitemode: isloggedin === 'false' }">
        <!--mixin example-->
        Name:{{mixinname}}<br><br>
        Login status:{{isloggedin}}<br><br>
        Enter your name: <input v-model="name">
        <span v-if="isloggedin==='false'">
            <button @click='changemixin(name)'>clickHeretoLogin</button>
        </span>
        <span v-else>
            <button @click='loggedout'>clickHeretoLogout</button>
        </span>
    </div>
  </div>
</template>

<script>
import mixinexamp from './mixinexamp.vue';

export default {
  name: 'assignment4',
  // mixin
  mixins: [mixinexamp],
  data() {
    return {
      arraydata: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      firstName: 'ravi',
      lastName: 'gattupalli',
      hours: 0,
      minutes: 0,
      name: '',
      isgreen: 'false',
      mixinclass: 'mixinclass',
    };
  },
  computed: {
    fullName() {
      return this.firstName + this.lastName;
    },
    filterEvenNumbers() {
      return this.arraydata.filter((item) => item % 2 === 0);
    },
    filterOddNumbers() {
      return this.arraydata.filter((item) => item % 2 !== 0);
    },
  },
  watch: {
    hours() {
      this.minutes = this.hours * 60;
    },
    minutes() {
      this.hours = this.minutes / 60;
    },
  },
  methods: {
    changemixin(name) {
      this.mixinname = name;
      this.isloggedin = 'true';
    },
    loggedout() {
      this.name = '';
      this.mixinname = 'none';
      this.isloggedin = 'false';
    },
  },
};
</script>
<style scoped>
.mixinclass{
    font-family: cursive;
    color:brown;
}
.darkmode{
    background-color:teal;
    font-family: cursive;
}
.whitemode{
    background-color: wheat;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>
