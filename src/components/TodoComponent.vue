<template>
    <main>
        <div class="container col">
            <div class="todo-input-container">
                <input type="checkbox" class="todo-checkbox">
                <input type="text" class="todo-inputs" placeholder="Create a new Todo...">

            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

    .container {
        width: 80%;
        margin: 0 auto;
    }
    .col {
        align-items: center;
    }

    .container {
        width: 80%;
        display: flex;
    }

    .todo-input-container {
        display: flex;
        background: $VeryDarkSatBlue;
        width: 50%;
        padding: 1rem;

        .todo-checkbox {
            padding: 1rem;
        }
        .todo-inputs {
            width: 100%;
            background: inherit;
            padding: 1rem;
            color: $LightGrayBlue;
            outline: 0;
            border: 0;
        }

      

    }
</style>