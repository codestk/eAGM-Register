<template>
  <div class="stepform">
    <h1>Customize with Props</h1>
    <stepper :options="stepperOptions" :position="currentPosition">
      <template v-slot:step-1>
        <h3>Step 1</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque
        </div>
        <button @click="goNext">Next</button>
      </template>

      <template v-slot:step-2>
        <h3>Step 2</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque
        </div>
        <button @click="goNext">Next</button>
      </template>

      <template v-slot:step-3>
        <h3>Step 3</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque
        </div>
        <button @click="goNext">Next</button>
      </template>

      <template v-slot:step-4>
        <h3>Step 4</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque
        </div>
        <button @click="goNext">Next</button>
      </template>
    </stepper>
  </div>
</template>

<script>
import { ref } from 'vue'

import HelloWorld from "./components/HelloWorld.vue"
import Step1 from "./components/Step1.vue"

import Stepper from './components/Stepper/Stepper.vue'

export default {
  name: 'App',
  components: {
    Stepper,
    HelloWorld,
    Step1,
  },
  setup() {
    const stepperOptions = ref({
      headers: [
        { title: 'Title One' },
        { title: 'Title Two' },
        { title: 'Title Three' },
        { title: 'Title Four' }
      ],
      prevText: 'Previous',
      nextText: 'Next',
      showfooter: false,
      shownavigate: false,
    })

    const currentPosition = ref(0)

    const goNext = () => {
      if (currentPosition.value < stepperOptions.value.headers.length - 1)
        currentPosition.value++;
    }

    return {
      stepperOptions,
      currentPosition,

      goNext
    }
  }
}
</script>

<style>
.stepform {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 800px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}

h1 {
  font-size: 2rem !important;
  line-height: 2rem !important;
}

.step-progress__step span {
  font-size: 16px;
  display: initial;
}

.step-progress__step:after {
  height: 50px;
  width: 50px;
}

.step-progress__step--active span {
  color: #fff;
  font-size: 16px;
}

.step-progress__step--active:after {
  border: var(--activeBorder) solid var(--activeColor);
  background-color: #039;
}

.step-progress__step--valid span {
  color: #fff;
  opacity: 1;
  font-size: 16px;
}

.step-progress__step--valid:after {
  border: var(--activeBorder) solid var(--activeColor);
  background-color: #039;
}

.fw-card {
  background: #ffffff;
  border: 0px solid #eff0f7;
  box-shadow: none;
  margin-top: 30px;
}

.fw-overflow-scroll .fw-body-list::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: linear-gradient(90deg, #4a3aff 0%, #6d3aff 100%);
}

.form-wizard-vue .fw-body-list .fw-list-progress-active {
  background: #eff0f7;
}

.fw-step-title {
  margin: 10px 0 0 0;
}

.form-wizard-vue .fw-step-active {
  background: #039 !important;
  color: #fff !important;
}

.form-wizard-vue .fw-step-checked {
  border: 1px solid #039;
  background: #fff !important;
}

.form-wizard-vue .fw-body-list .fw-list-progress {
  position: absolute;
  width: 80%;
  height: 8.47px;
  background: #eff0f7;
  top: 38%;
  left: 60%;
}

.form-wizard-vue .fw-body-list li .fw-list-wrapper-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #eff0f7;
  color: #6f6c90;
  width: 48.89px;
  height: 48px;
  border-radius: 50%;
}

.form-wizard-vue .fw-body-list li .fw-list-wrapper-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  background: #eff0f7;
  color: #6f6c90;
  width: 48.89px;
  height: 48px;
  border-radius: 50%;
}
</style>
