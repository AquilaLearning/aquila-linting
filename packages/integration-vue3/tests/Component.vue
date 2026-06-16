<script setup lang="ts">

// BAD
// eslint-disable-next-line vue/no-export-in-script-setup
export const msg = "Hello!";

// GOOD
const msg2 = "Hello!";
</script>

<template>
    <div>
        <i class="good self closing i tag" />
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <i class="bad non self closing i tag"></i>

        <good-comp-many-props
            bar="def"
            fizz="ghi"
            foo="abc"
            true
            @something="() => undefined"
        />

        <!-- eslint-disable vue/attributes-order -->
        <bad-prop-order
            bar="def"
            @something="() => undefined"
            true
            foo="abc"
            fizz="ghi"
        />
        <!-- eslint-enable vue/attributes-order -->

        <!-- eslint-disable-next-line vue/max-attributes-per-line -->
        <bad-comp-many-props foo="abc" bar="def" fizz="ghi" />

        <!-- eslint-disable vue/html-indent -->
        <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
        <bad-comp-partial-split foo="abc"
                bar="def"
        />
        <!-- eslint-enable vue/html-indent -->

        <!-- eslint-disable vue/html-closing-bracket-newline -->
        <bad-closing-bracket
            foo="bar"
            fizz="buzz">
            Bad closing bracket
        </bad-closing-bracket>
        <!-- eslint-enable vue/html-closing-bracket-newline -->

        <!-- eslint-disable vue/html-closing-bracket-newline -->
        <bad-self-closing-bracket
            foo="bar"
            fizz="buzz" />
        <!-- eslint-enable vue/html-closing-bracket-newline -->
    </div>
</template>

<!-- Good style-->
<style module="style">
</style>

<!-- Bad style -->
<!-- eslint-disable vue/enforce-style-attribute -->
<style>
</style>
<!-- eslint-enable vue/enforce-style-attribute -->
