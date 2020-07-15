<template>
    <article id="com">
        <section>
            <h1 id="size">Todo List</h1>
            <gb-input
                size="large"
                v-model="name"
                placeholder="Write todo"
                @submit="createTodo(name)"></gb-input>
        </section>
        <section id="list">
            <ul>
                <li v-for="(todo, index) in todos" v-bind:key="todo">
                    <gb-alert color="black" @close="deleteTodo(index)">{{todo.name}}</gb-alert>
                </li>
            </ul>
        </section>
    </article>
</template>

<style>
    ul {
        list-style: none;
        padding-left: 0;
    }
    #com {
        padding: 50px;
    }
    #size {
        text-align: left;
        font-size: 4rem;
        margin-bottom: 30px;
    }
    #list {
        margin-top: 30px;
    }
</style>

<script>
    export default {
        data() {
            return {
                name: null,
                todos: [
                    {
                        name: 'Test'
                    }, {
                        name: 'Sample'
                    }, {
                        name: 'example'
                    }, {
                        name: 'EX'
                    }
                ]
            }
        },
        methods: {
            deleteTodo(i) {
                this
                    .todos
                    .splice(i, 1);
            },
            createTodo(name) {
                console.log(name);
                if (name != null) {
                    this
                        .todos
                        .push({name: name});
                    this.name = null
                }
            }
        }
    }
</script>