<template>

    <div class="flex items-center fixed z-30 justify-center h-16 w-full border-black lg:hidden shadow-lg ">
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class=" lg:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                                 enter-from="opacity-0" enter-to="opacity-100"
                                 leave="transition-opacity ease-linear duration-300"
                                 leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-900/80"/>
                </TransitionChild>

                <div class="fixed inset-0 z-20">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                                     enter-from="-translate-y-full" enter-to="translate-y-0"
                                     leave="transition ease-in-out duration-300 transform" leave-from="translate-y-0"
                                     leave-to="-translate-y-full">
                        <DialogPanel class="w-full">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                             enter-to="opacity-100" leave="ease-in-out duration-300"
                                             leave-from="opacity-100"
                                             leave-to="opacity-0">
                                <div class="">

                                </div>
                            </TransitionChild>
                            <!-- Sidebar component, swap this element with another sidebar if you like -->

                            <div class="bg-blue h-lvh flex flex-col justify-between">
                                <header class=" flex items-center justify-between w-full bg-white relative">
                                    <div class="flex items-center justify-between p-3 w-full">
                                        <button type="button" class="bg-transparent text-gray-700 lg:hidden"
                                                @click="sidebarOpen = !sidebarOpen">
                                            <span class="sr-only">Open sidebar</span>
                                            <Bars3Icon v-if="!sidebarOpen" class="h-6 w-6" aria-hidden="true"/>
                                            <XMarkIcon v-if="sidebarOpen" class="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                        <div class="">
                                            <Link href="/"><img class="h-10" :src="'/img/logo.png'"></Link>
                                        </div>
                                        <div>

                                            <Link class="orange-button" href="/overons"> Contact</Link>
                                        </div>
                                    </div>
                                </header>
                                <div class="flex flex-col gap-12 ">
                                    <div class="flex flex-col">
                                        <div class="grid text-white text-center">
                                            <Link href="/aanbod" class="py-4"><span>Over ons</span></Link>
                                            <Link href="/overons#services" class="py-4"><span>Services</span></Link>
                                            <Link href="/overons" class="py-4"><span>Over ons</span></Link>
                                            <Link href="/overons#contactform" class="py-4"><span>Contact</span></Link>
                                        </div>
                                    </div>
                                    <div class="items-center flex flex-col gap-4 mx-6 ">

                                        <Button label="Whatsapp" class="orange-button sm:w-full"/>

                                        <Button label="Aanbod" class="clear-white-button sm:w-full"/>
                                    </div>
                                </div>
                                <div class="flex gap-10 justify-center items-end pb-5">
                                    <Link class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
                                                fill="white"/>
                                        </svg>
                                    </Link>
                                    <Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
                                                  fill="white"/>
                                        </svg>
                                    </Link>
                                    <Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M21.5928 7.20301C21.4789 6.78041 21.2563 6.39501 20.9472 6.08518C20.6381 5.77534 20.2532 5.55187 19.8308 5.43701C18.2648 5.00701 11.9998 5.00001 11.9998 5.00001C11.9998 5.00001 5.73584 4.99301 4.16884 5.40401C3.74677 5.52415 3.36266 5.75078 3.05341 6.06214C2.74415 6.3735 2.52013 6.75913 2.40284 7.18201C1.98984 8.74801 1.98584 11.996 1.98584 11.996C1.98584 11.996 1.98184 15.26 2.39184 16.81C2.62184 17.667 3.29684 18.344 4.15484 18.575C5.73684 19.005 11.9848 19.012 11.9848 19.012C11.9848 19.012 18.2498 19.019 19.8158 18.609C20.2383 18.4943 20.6236 18.2714 20.9335 17.9622C21.2434 17.653 21.4672 17.2682 21.5828 16.846C21.9968 15.281 21.9998 12.034 21.9998 12.034C21.9998 12.034 22.0198 8.76901 21.5928 7.20301ZM9.99584 15.005L10.0008 9.00501L15.2078 12.01L9.99584 15.005Z"
                                                fill="white"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <header class="grid grid-cols-5 xs:grid-cols-3 w-full bg-white relative">
            <div class="flex items-center h-full p-3 col-span-2 xs:col-span-1">
                <button type="button" class="bg-transparent text-gray-700 lg:hidden"
                        @click="sidebarOpen = !sidebarOpen">
                    <span class="sr-only">Open sidebar</span>
                    <Bars3Icon v-if="!sidebarOpen" class="h-6 w-6" aria-hidden="true"/>
                    <XMarkIcon v-if="sidebarOpen" class="h-6 w-6" aria-hidden="true"/>
                </button>
            </div>

            <div class="flex items-center justify-center">
                <Link class="hidden xs:block" href="/"><img class="h-10" :src="'/img/logo.png'"></Link>
                <Link class="block xs:hidden" href="/"><img class="h-10" :src="'/img/logo.png'"></Link>
            </div>
            <div class="flex justify-end p-3 col-span-2 xs:col-span-1">
                <Link class="orange-button" href="/overons"> Contact</Link>
            </div>
        </header>
    </div>
    <div class="hidden lg:block shadow-lg">
        <header class="flex justify-center z-50 app ">
            <nav
                class="navbar flex justify-between items-center rounded-lg mt-5 fixed py-0.5 px-4 h-16 w-11/12 max-w-7xl bg-white z-50 border-black  transition-all duration-300"
                :class="{ 'navbar--hidden': !showNavbar }">
                <Link href="/" class="items-center">
                    <img class="h-10" :src="'/img/logo.png'"</Link>
                <div class="flex justify-between gap-8 ml-28 text-black">
                    <div>
                        <Link href="/info">Bedrijfsinformatie</Link>
                    </div>
                    <div>
                        <Link href="/about">Over C<span
                            class="text-codes1">-</span>o<span class="text-codes2">-</span>d<span
                            class="text-codes3">-</span>e<span class="text-codes4">-</span>s</Link>
                    </div>
                    <div>
                        <Link href="/overons">Over ons</Link>
                    </div>
                </div>
                <div class="flex gap-4">
                    <Button label="Whatsapp" icon="pi pi-whatsapp" class="bg-white py-1 px-2"/>
                    <Button label="Whatsapp" icon="pi pi-whatsapp" class="bg-white py-1 px-2"/>
                </div>
            </nav>
        </header>
    </div>
</template>
<style>
.navbar {
    transition: 0.5s all ease-out;
}

.navbar.navbar--hidden {
    transform: translate3d(0, -20%, 0);
}
</style>
<script setup>
import Button from "primevue/button";
import "primeicons/primeicons.css";
import Inplace from 'primevue/inplace'
import {ref} from 'vue'
import {Link} from '@inertiajs/vue3';
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
const sidebarOpen = ref(false)
</script>
<script>
export default {
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0
        }

    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition
        }
    }
}
</script>
