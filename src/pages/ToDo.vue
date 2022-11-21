<template>
    <div>
        <h1 class="to-do">To do {{ $route.params.id }}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class ToDo extends Vue {
    @Prop() doCheck!: string;
    @Prop() removeMask!: string;
    @Prop() needDoList!: string;
    @Prop() completeList!: string;
}
</script>
