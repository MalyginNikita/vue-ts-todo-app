<template>
    <div class="header">
        <div class="container">
            <div class="logo" @click="$router.push('/')">ToDo List</div>
            <div class="form">
                <input
                    type="text"
                    v-model="valueInput"
                    @keypress.enter="addTask(valueInput), (valueInput = '')"
                />
                <button
                    class="btn"
                    @click="addTask(valueInput), (valueInput = '')"
                >
                    Add a new task
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Prop() addTask!: string;
    valueInput = '';
}
</script>
