<template>
    <header>
        <div class="container row">
            <h1 class="hero__title">TODO</h1>

            <a href="#" id="theme-mode-toggler">
                <img src="/assets/images/icon-sun.svg" alt="Sun icon">
            </a>
        </div>
    </header>
</template>

<style lang="scss" scoped>

header {
    background: url("/assets/images/bg-mobile-dark.jpg") no-repeat;
    background-size: cover;
    padding: 2rem;

    @media screen and (min-width: 800px) {
        background: url("/assets/images/bg-desktop-dark.jpg") no-repeat;

    }

    .container {
     max-width: 600px;   
     margin:0 auto;
    }

    .row {
        align-items: center;
        justify-items: center;
    }
    .hero__title {
        color: white;
        font-size: 2rem;
    }

    #theme-mode-toggler {
        margin-left: auto;
        scale: 1.5;
    }
}


</style>