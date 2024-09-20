<template>
    <div class="bg-gray-900 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <p class="text-5xl text-center pt-10 font-bold leading-7 pb-10 text-indigo-500">Lean Canvas</p>
                <div
                    class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-50 lg:max-w-none lg:grid-cols-2">
                    <div>
                        <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                            sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
                            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                            eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                        <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                            blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                            varius vulputate et ultrices hac adipiscing egestas.</p>
                    </div>
                    <div>
                        <p>Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id
                            dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor.</p>
                        <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                            blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                            varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac
                            lorem vel integer orci.</p>
                    </div>
                </div>
                <div class="mt-10 flex">
                    <Link href="/#bezig"
                          class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Go back
                    </Link>
                </div>
            </div>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 mx-auto max-w-7xl px-6 lg:px-8 gap-4 pt-10">
            <div>
                <Image src="/img/canvas/HeroCanvas.png" alt="Image" preview/>
            </div>
            <div>
                <Image src="/img/canvas/Canvas.png" alt="Image" preview/>
            </div>
        </div>
    </div>
</template>
<script setup>
import {Link} from '@inertiajs/vue3'
import Image from 'primevue/image';
</script>
