<template>
    <div id="app">
        <Header :add-task="addTask"></Header>
        <router-view
            :do-check="doCheck"
            :remove-mask="removeMask"
            :need-do-list="needDoList"
            :complete-list="completeList"
        ></router-view>
    </div>
</template>

<script lang="ts">
import ToDoList from './components/ToDoList.vue';
import Header from './components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        ToDoList,
        Header,
    },
})
export default class App extends Vue {
    needDoList: Array<object> = [];
    completeList: Array<object> = [];

    doCheck(index: number, type: string) {
        if (type === 'need') {
            const completeMask = this.needDoList.splice(index, 1);
            this.completeList.push(...completeMask);
        } else {
            const noCompleteMask = this.completeList.splice(index, 1);
            this.needDoList.push(...noCompleteMask);
        }
    }
    removeMask(index: number, type: string) {
        const toDoList = type === 'need' ? this.needDoList : this.completeList;
        toDoList.splice(index, 1);
    }
    addTask(value: string) {
        if (value === '') {
            return;
        }
        this.needDoList.push({
            title: value,
            id: Date.now().toString(),
        });
        //this.value = '';
    }
}
</script>
