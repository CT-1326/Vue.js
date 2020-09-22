<template>
    <div>
        <h1>WWWWWWWWWelcome!</h1>
        <h3>This is the First page at vuejs</h3>
        <ul>
            <li>
                <router-link id="text" to='/todo'>Todo list</router-link>
            </li>
            <li>
                <router-link id="text" to='/aos'>AOS</router-link>
            </li>
        </ul>
    </div>
</template>

<style>
    #text {
        font-size: 150%;
    }
</style>