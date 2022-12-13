<template>
    <div class="form-center">
        <FormKit type="form">
            <FormKitSchema :schema="schema" />
        </FormKit>
    </div>
</template>

<script setup>
import { FormKitSchema } from "@formkit/vue";

const schema = [
    {
        $formkit: "text",
        name: "name",
        label: "Full Name",
        placeholder: "Enter your name",
    },
    {
        $formkit: "email",
        name: "email",
        label: "Email Address",
        placeholder: "Enter your email",
    },
];

</script>

<style>
.form-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.formkit-wrapper {
    max-width: 800px !important;
    width: 600px;
}

.formkit-inner {
    position: relative;
    box-shadow: none !important;
    border-radius: var(--fk-border-radius);
    display: flex;
    align-items: center;
}

.formkit-input {
    border: 1px solid #e6e6e6 !important;
    border-radius: 30px !important;
    padding: 24px !important;
    height: 15px;
}

.formkit-label {
    position: relative;
    top: 8px;
    left: 20px;
    text-align: left;
    background: #fff;
    padding: 0 5px 0 5px !important;
    z-index: 1;
    display: table !important;
}

[data-type="button"] .formkit-input,
[data-type="submit"] .formkit-input {
    line-height: 24px !important;
    height: auto;
    width: 160px !important;
    background: #039 !important;
    padding: 10px !important;
    text-transform: uppercase;
}
</style>