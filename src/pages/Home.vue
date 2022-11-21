<template>
    <ToDoList
        :do-check="doCheck"
        :remove-mask="removeMask"
        :need-do-list="needDoList"
        :complete-list="completeList"
    ></ToDoList>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ToDoList from '../components/ToDoList.vue';

@Component({
    components: { ToDoList },
})
export default class Home extends Vue {
    @Prop() doCheck!: string;
    @Prop() removeMask!: string;
    @Prop() needDoList!: string;
    @Prop() completeList!: string;
}
</script>
