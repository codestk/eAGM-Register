<template>
    <div class="stepper">
        <div class="top">
            <div v-for="(item, index) in options.headers" :class="{
                'step-header': true, 'active': index <= currentPosition,
                'start': index === 0, 'end': index === options.headers.length
            }">
                <div class="header-indicator">
                    <div class="step-header-line" v-if="index > 0">

                    </div>
                    <div class="step-header-content" :class="{ pointer: options.navigate !== false }"
                        @click="slideTo(index)">
                        {{ index + 1 }}
                    </div>
                </div>
                <div class="title" :class="{ 'title': true, }">
                    {{ item.title }}
                </div>
            </div>
        </div>

        <div style="width:100%">
            <!-- <transition-group :name="transitionType" class="body" mode="none"> -->
            <div v-for="(item, index) in options.headers" :key="'step' + index" v-show="currentPosition === index"
                :class="{ 'steps-item': true }">
                <slot :name="'step-' + (index + 1)"></slot>
            </div>
            <!-- </transition-group> -->
        </div>
        <div v-if="options.showfooter" class="foot">
            <button v-if="currentPosition > 0" class="prev-button" type="button" @click="prev()">{{ options.prevText ?
                    options.prevText : 'Prev'
            }}</button>
            <button v-if="currentPosition < options.headers.length - 1" class="next-button" type="button"
                @click="next()">{{ options.nextText ? options.nextText : 'Next' }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Stepper',
    props: { options: Object, position: Number },
    data() {
        return {
            currentPosition: this.position !== undefined ? this.position : 0,
            transitionType: 'slide'
        }
    },
    methods: {
        next() {
            if (this.currentPosition < this.options.headers.length - 1) {
                this.transitionType = 'stepper-slide-1'
                this.currentPosition++
            }
        },
        prev() {
            if (this.currentPosition > 0) {
                this.transitionType = 'stepper-slide-2'
                this.currentPosition--
            }
        },
        slideTo(index) {
            if (this.options.shownavigate !== false) {
                if (this.currentPosition === index) return
                if (this.currentPosition > index) {
                    this.transitionType = 'stepper-slide-2'
                } else {
                    this.transitionType = 'stepper-slide-1'
                }
                this.currentPosition = index;
            }
        }
    },
    watch: {
        position: function (newVal, oldVal) { // watch it
            this.currentPosition = newVal
        }
    }
}
</script>
<style src="./Stepper.css" scoped>

</style>
<style scoped>

</style>