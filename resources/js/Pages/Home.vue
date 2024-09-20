<template>
    <Head title="Home | Website BPV">
        <meta name="description"
              content="C-o-d-e-s is een bedrijf dat websites en platformen maakt voor bedrijven en particulieren.">
    </Head>
    <div class="relative isolate overflow-hidden bg-gray-900">
        <svg
            class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true">
            <defs>
                <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1"
                         patternUnits="userSpaceOnUse">
                    <path d="M.5 200V.5H200" fill="none"/>
                </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
                <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                      stroke-width="0"/>
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"/>
        </svg>
        <div
            class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true">
            <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                 style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"/>
        </div>
        <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                <img class="h-11" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
                     alt="Your Company"/>
                <div class="mt-24 sm:mt-32 lg:mt-16">
                    <a href="#" class="inline-flex space-x-6 text-white">
                        <p>github hier etc</p>
                    </a>
                </div>
                <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Stagair bij<br> C<span
                    class="text-codes1">-</span>o<span class="text-codes2">-</span>d<span
                    class="text-codes3">-</span>e<span class="text-codes4">-</span>s
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-300">De keuze voor C<span
                    class="text-codes1">-</span>o<span class="text-codes2">-</span>d<span
                    class="text-codes3">-</span>e<span class="text-codes4">-</span>s als mijn stageplek is het
                    resultaat van zorgvuldige overweging en een diepgaande afstemming met mijn professionele doelen.
                    Hier krijg ik de unieke kans om mijn vaardigheden op het gebied van 3D Modellen, AR/VR en Webdesign
                    te verfijnen en uit te breiden, onder begeleiding van ervaren professionals die hun kennis graag
                    delen.</p>
                <div class="mt-10 flex items-center gap-x-6">
                    <a href="#bezig"
                       class="rounded-lg bg-indigo-500 px-4 py-3 font-bold
                       text-white hover:bg-indigo-600 transition duration-300">
                        Waar ben ik mee bezig geweest?</a>
                </div>
            </div>
            <div
                class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                    <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                         alt="App screenshot" width="2432" height="1442"
                         class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"/>
                </div>
            </div>
        </div>
    </div>

    <section id="bezig">
        <div class="bg-gray-900 py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">Waar ben ik mee bezig
                        geweest?</h2>
                </div>
                <div
                    class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
                        <div class="relative w-full">
                            <img :src="post.imageUrl" alt=""
                                 class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                        </div>
                        <div class="max-w-xl">
                            <div class="mt-8 flex items-center gap-x-4 text-xs">
                                <time :datetime="post.datetime" class="text-gray-50">{{ post.date }}</time>
                                <Link :href="post.category.href"
                                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100">
                                    {{
                                        post.category.title
                                    }}
                                </Link>
                            </div>
                            <div class="group relative">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-50 group-hover:text-gray-100">
                                    <Link :href="post.href">
                                        <span class="absolute inset-0"/>
                                        {{ post.title }}
                                    </Link>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-50">{{ post.description }}</p>
                                <Link href="#">
                                    <Button class="bg-gray-50 text-gray-900 py-1 px-2 rounded-lg mt-2">
                                        Informatie
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
    <div class="px-6 py-32 lg:px-8 bg-gray-900">
        <div class="mx-auto max-w-7xl text-base leading-7 text-gray-200">
            <p class="mt-6 text-5xl leading-8 font-bold">BPV taak 1 - Kant advocatuur</p>
            <div class="mt-10 max-w-7xl flex flex-row gap-32">
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">1. Oriëntatiefase</p>
                    <p>- Dick kant is na in april 1982 als politieagent bij de gemeente Rotterdam te zijn begonnen,
                        heeft
                        hij
                        studie Nederlands recht aan de Erasmus Universiteit Rotterdam voltooid in 1990.
                        In maart 1991 is Dick beëdigd als advocaat in Rotterdam en heeft hij daar 10 jaar gewerkt, met
                        een
                        focus op contractenrecht, faillissementsrecht en strafrecht.
                        In januari 2001 verhuisde hij naar het oosten van Nederland om bij een groot advocaten- en
                        notarissenkantoor te werken, waar hij zich specialiseerde in contracten- en
                        aansprakelijkheidsrecht,
                        huurrecht, faillissementsrecht en commercieel strafrecht.
                        Sinds 2008 is hij zelfstandig advocaat geworden, eerst in Zutphen, later in Almelo en Goor. Hij
                        bleef actief in dezelfde rechtsgebieden en was laatstelijk partner bij Van Zutphen Kant Hollema
                        advocaten.
                        Vanaf januari 2024 is hij teruggekeerd naar Rotterdam en heeft hij een kantoor gevestigd in
                        Capelle
                        aan den IJssel. Hij behandelde voornamelijk contracten- en aansprakelijkheidsrecht en
                        strafrecht.
                        Voor strafzaken werkte hij samen met mr. J.C. (Jaap) Spigt, gevestigd in hetzelfde
                        verzamelgebouw.
                    </p>
                </div>
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">2. Definitiefase</p>
                    <p>- De klant wil een website hebben die hij kan gebruiken voor zijn werkzaamheden.</p>
                    <p>- De website moet responsive zijn dat betekend dat de website werkt op desktop, tablet en
                        telefoon.
                        Dat alles werkt op de website. Dat de images snel inladen, dus niet dat het een paar seconden
                        duurt totdat de website in geladen. </p>
                    <p class="font-semibold text-xl pt-10">3. Ontwerpfase</p>
                    <p>- De designer Jeroen maakt designs in Figma dat is een programma waar je allemaal dingen in kan
                        doen zoals een website frame maken en nog veel meer zoals designs maken, en als het design klaar
                        is van een pagina wordt die gemaakt door de front-end developers. En uiteindelijk uit deze
                        “schetsen” komt er een idee voor de website. </p>
                </div>
            </div>
            <div class="flex flex-row justify-center gap-20 py-10">
                <!--Images from number 3. ontwerpfase-->
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>
            </div>
            <div class="mt-10 max-w-7xl flex flex-row gap-32">
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">4. Keuzefase</p>
                    <p>- Wij zouden de ideeën aan de klant presenteren met figma, wij hebben een designer (Jeroen) mijn
                        stagebegeleider die maakt in Figma alle designs, een design is een voorbeeld van wat er gemaakt
                        moet worden en dan moeten wij een website maken op basis van dat design dat alles er hetzelfde
                        zo goed als hetzelfde uitziet.
                        - Wij maken meestal 2 designs dus een A en B design en dat sturen we naar de klant op en kan hij
                        kiezen welke hij er mooier uit ziet zien en gaan wij dat design volgen die de klant uitkiest.
                    </p>
                    <p class="font-semibold text-xl pt-10">5. Voorbereidingsfase</p>
                    <p>- Wij werken met het platform teamleader, daar hou ik mijn uren bij en maak ik mijn planning
                        waardoor ik mijn leerdoel heb gehaald. Hier zetten we alles neer wat er gedaan moet worden en
                        dan plan je het in en hou je de uren dus bij.</p>
                </div>
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">6. Uitvoeringsfase</p>
                    <p>- Ik heb met de talen HTML en TailwindCSS en Laravel gebruikt om deze website voor de klant te
                        maken, ik heb met Jeroen samengewerkt hij heeft het design gemaakt, en vanaf dat design kon ik
                        dus zien wat ik allemaal moest doen om de website er mooi uit te komen laten zien.
                        <br>- Er was niet echt een plan van eisen maar er zijn wel een paar belangrijke
                        kwaliteitscriteria
                        en dat waren laadsnelheid, responsiviteit, gebruikersvriendelijkheid en beveiliging. Ook de
                        responsiviteit heb ik de website live gezet met een livelink waardoor de klant op de website kan
                        kijken en dan kan ik hem als developer testen op mijn telefoon en tablet om te kijken dat de
                        website niet schots en scheef staat op andere resoluties.
                        <br>- De Arbo- en milieueisen zijn minder relevant voor het ontwikkelen van een website maar heb
                        wel
                        bijvoorbeeld mijn bureaustoel goed versteld en mijn monitor goed recht gezet zodat ik goed op
                        ooghoogte kan kijken zodat ik rugklachten kan voorkomen, ik heb ook een sta zit bureau dus ik
                        ben af en toe ook gaan staan.
                        <br>- Ik heb met deze website alleen samengewerkt met de designer (Jeroen) mijn stagebegeleider,
                        want hij moest het design maken en toen heb ik verder de code geschreven en het design
                        uitgewerkt in code.
                    </p>
                </div>
            </div>
            <div class="flex flex-row justify-end gap-20 max-w-7xl mx-auto">
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">7. Keuzefase</p>
                    <p>- Wij leveren het product op met een livelink zodat de klant de website kan bekijken op hen
                        browser.
                        - De service die wij hebben is dat we om de paar dagen of week dat we de klant up-to-date houden
                        hoe het gaat met de website hoever die af is op dit moment dan sturen we een mailtje of geven we
                        de klant een belletje of een appje en met een livelink dan kan de klant kijken vanaf hun desktop
                        hoe de website eruitziet en kan de klant feedback teruggeven en verwerken wij dat gelijk.
                    </p>
                </div>
                <div class="gap-20 flex w-full pt-6">
                    <!--Images from number 5. Voorbereidingsfase-->
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image"
                           width="250"
                           preview/>
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image"
                           width="250"
                           preview/>
                </div>
            </div>
            <div class="mt-10 max-w-7xl flex flex-row gap-32">
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">7. Keuzefase</p>
                    <p>- Wij leveren het product op met een livelink zodat de klant de website kan bekijken op hen
                        browser.
                        - De service die wij hebben is dat we om de paar dagen of week dat we de klant up-to-date houden
                        hoe het gaat met de website hoever die af is op dit moment dan sturen we een mailtje of geven we
                        de klant een belletje of een appje en met een livelink dan kan de klant kijken vanaf hun desktop
                        hoe de website eruitziet en kan de klant feedback teruggeven en verwerken wij dat gelijk.
                    </p>
                </div>
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">8. Evaluatiefase</p>
                    <p>- Mijn uren en de planning staan hieronder in teamleader. Er waren wel een paar afwijkingen met
                        deze opdracht, want toen ik klaar was bleek dat de klant na dat hij de website bekeken had dat
                        hij de configurator er niet mooi uit zag zien dus moest ik er wat langer aan werken om de klant
                        tevreden te maken. Voor de rest zijn er geen afwijkingen geweest en is alles volgens plan
                        gelopen en was de klant uiteindelijk tevreden met het eindproduct.
                    </p>
                </div>
            </div>
            <div class="flex flex-row gap-20 justify-end">
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>
            </div>

        </div>
    </div>
    <div class="px-6 py-32 lg:px-8 bg-gray-900">
        <div class="mx-auto max-w-7xl text-base leading-7 text-gray-200">
            <p class="mt-6 text-5xl leading-8 font-bold">BPV taak 2 - Noyy Kussens</p>
            <div class="mt-10 max-w-7xl flex flex-row gap-32">
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">1. Oriëntatiefase</p>
                    <p>- NOYY is dé specialist in het vervaardigen van de mooiste kussens op maat, of het nu maatkussens
                        zijn voor uw lounge set, terras, caravan, boot of gewoon sierkussens, wij weten als geen ander
                        deze kussens op de beste manier te produceren.
                        - Wij leveren aan de zakelijke markt en particulier. Maatkussens voor uw huis, horecazaak of
                        ander
                        bedrijf? Wij zorgen ervoor dat u bij ons altijd de beste kwaliteitskussens krijgt.
                        Met meer dan 25 jaar aan ervaring in het ontwerpen en stikken van textiel kunt u bij ons rekenen
                        op de meest kwalitatieve kussens die er te vinden zijn, en dat voor de laagste prijzen. Dit
                        kunnen we doordat we in tegenstelling tot veel andere leveranciers alles in ons eigen atelier in
                        Almelo produceren, wij besteden niet uit aan derden. Hierdoor hebben we door het hele proces
                        heen de volledige controle over uw bestelling.
                        - Laat u verassen door de vele keuzes in kleur en stofsoorten, zo kunt u altijd uw droomkussen
                        ontwerpen. Want u ontwerpt het, wij maken het op maat en bezorgen het bij u thuis.
                        - Wij als C-o-d-e-s hebben nog niks gedaan voor Noyy dus er zijn geen voorbeelden, het bedrijf
                        blauwwolk waar mijn baas en stagebegeleider hebben gewerkt die hebben wel een website gemaakt
                        alleen die is nooit online gekomen omdat die niet mooi was, en wij hebben klanten meegenomen die
                        nu klanten zijn bij ons dus inclusief Noyy dus ik ben nu die website aan het vernieuwen.

                    </p>
                </div>
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">2. Definitiefase</p>
                    <p>- De klant had een website die door blauwolk was gemaakt alleen die was niet echt mooi dus heeft
                        de klant een lijstje gemaakt met wat er veranderd aan moest worden, er was een eis dat hij de
                        homepage langer wou hebben, lettertype wat groter en nog een paar kleine dingetjes. Aan de hand
                        hiervan heb ik een hele vernieuwde website gemaakt.
                        - Er moet natuurlijk responsiviteit inzitten, dat het op elke resolutie werkt zoals telefoon,
                        tablet en desktop. Dat de website snel laad zoals alle images.
                    </p>
                    <p class="font-semibold text-xl pt-10">3. Ontwerpfase</p>
                    <p>- Deze schetsen zijn gemaakt met Figma door de designer (Jeroen) Mijn stagebegeleider</p>
                    <div class="flex flex-row gap-16 pt-6">
                        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image"
                               width="250"
                               preview/>
                        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image"
                               width="250"
                               preview/>
                    </div>

                </div>
            </div>
            <div class="flex flex-row justify-end gap-20 py-2">
                <!--Images from number 3. ontwerpfase-->
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>

            </div>
            <div class="mt-10 max-w-7xl flex flex-row gap-32">
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">4. Keuzefase</p>
                    <p>- Er is een design die ik een volg, niet helemaal want het is het oude design maar daar hou ik me
                        wel een beetje aan, vooral toen de Head of code met hem een afspraak had hebben ze het gehad
                        over de componenments van Tailwindcss en daar was de klant erg verbaast over hoe mooi dat
                        eruitzag dus heb ik dat gebruikt in zijn vernieuwde website.
                    </p>
                    <p class="font-semibold text-xl pt-10">5. Voorbereidingsfase</p>
                    <p>- Mijn soort van werklijst en uren registratie staan in een platform genaamd Teamleader daar
                        zetten wij alle projecten in en dan alle uren registratie.
                        - Ik heb ingepland dat ik met deze website 50 uur mee bezig ben, want het is een vernieuwing van
                        een website dus ik heb al een voorbeeld.
                    </p>
                </div>
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">6. Uitvoeringsfase</p>
                    <p>- Ik heb de talen HTML, Vuejs en Tailwindcss gebruikt samen met laravel,
                        primevue en headlessui. Ik samen met de Jeroen de designer gewerkt omdat ik de designs van hem
                        krijg.
                        - Er was een plan van eisen want wat ik al had verteld was de website eerst door blauwwolk
                        gemaakt en die was niet goed want de website laadde heel langzaam, de foto’s die waren gebruikt
                        laadde te langzaam en op heel veel plekken was de website niet responsive dus als ik op de
                        telefoon keek stonden sommige teksten met foto’s op hele andere plekken dan dat ze moesten
                        staan. Dus de eisen waren dat de website pages langere pages had dus dat je langer kon scrollen,
                        de website moest natuurlijk responsive zijn dus op dat je op telefoon of tablet kijkt dat alles
                        goed staat en dat de website en de foto’s snel inladen.
                        - De Arbo- en milieueisen zijn minder relevant voor het ontwikkelen van een website maar heb wel
                        bijvoorbeeld mijn bureaustoel goed versteld en mijn monitor goed recht gezet zodat ik goed op
                        ooghoogte kan kijken zodat ik rugklachten kan voorkomen, ik heb ook een sta zit bureau dus ik
                        ben af en toe ook gaan staan.
                        - Ik heb samengewerkt met Emiel (Head of development) met hem heb ik samen de backend gemaakt
                        voor de configurator waar je kan kiezen welke soort kussen je wou hoe groot je het wou hebben
                        welke kleur en welk materiaal en uiteindelijk in de winkelwagen doen en bestellen. Ik met Jeroen
                        samengewerkt want ik moest het design volgen die hij had gemaakt dus vraag ik af en toe of dit
                        goed is wat ik heb gemaakt en soms heb ik ook nog andere ideeën en dan kijkt hij of dat ook mooi
                        zou kunnen zijn.

                    </p>
                </div>
            </div>
            <div class="flex flex-row justify-end gap-20 max-w-7xl mx-auto">
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">7. Presentatiefase</p>
                    <p>- Wij leveren het product op met een livelink zodat de klant de website kan bekijken op hen
                        browser.
                        - De service aan de klant gaat als volgt, om een bepaalde tijd houden wij de klant up-to-date
                        met een e-mail, telefoon en dat we een livelink dan sturen zodat de klant de website zelf op hen
                        browser kan bekijken. En als we dan een mailtje terugkrijgen met dat er veranderingen moeten
                        komen verwerken wij dat meteen.
                    </p>
                </div>
                <div class="gap-20 flex w-full pt-6">
                    <!--Images from number 5. Voorbereidingsfase-->
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image"
                           width="250"
                           preview/>
                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image"
                           width="250"
                           preview/>
                </div>
            </div>
            <div class="mt-10 max-w-7xl flex flex-row gap-32">
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">7. Keuzefase</p>
                    <p>- Wij leveren het product op met een livelink zodat de klant de website kan bekijken op hen
                        browser.
                        - De service die wij hebben is dat we om de paar dagen of week dat we de klant up-to-date houden
                        hoe het gaat met de website hoever die af is op dit moment dan sturen we een mailtje of geven we
                        de klant een belletje of een appje en met een livelink dan kan de klant kijken vanaf hun desktop
                        hoe de website eruitziet en kan de klant feedback teruggeven en verwerken wij dat gelijk.
                    </p>
                </div>
                <div class="flex flex-col w-full">
                    <p class="font-semibold text-xl">8. Evaluatiefase</p>
                    <p>- Mijn uren en de planning staan hieronder in teamleader. Er waren wel een paar afwijkingen met
                        deze opdracht, want toen ik klaar was bleek dat de klant na dat hij de website bekeken had dat
                        hij de configurator er niet mooi uit zag zien dus moest ik er wat langer aan werken om de klant
                        tevreden te maken. Voor de rest zijn er geen afwijkingen geweest en is alles volgens plan
                        gelopen en was de klant uiteindelijk tevreden met het eindproduct.
                    </p>
                </div>
            </div>
            <div class="flex flex-row gap-20 justify-end">
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>
                <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250"
                       preview/>
            </div>

        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue'
import {Link, Head} from '@inertiajs/vue3'
import Image from 'primevue/image';

const posts = [
    {
        id: 1,
        title: 'Kant Advocatuur',
        href: '/kant',
        description:
            'Kant advocatuur is een zelfstandig advocaat die gespecialiseerd is in een drietal rechtsgebieden, strafrecht, contractenrecht en aansprakelijkheidsrecht. En hiervoor maakt C-o-d-e-s een website.',
        imageUrl:
            'img/kant/HeroKant.png',
        date: 'Feb 27, 2024',
        datetime: '2024-02-27',
        category: {title: 'Website', href: '/kant'},

    },
    {
        id: 2,
        title: 'MTF-Automobielen',
        href: '/mtf',
        description:
            'MTF gaat binnenkort een website lanceren die lijkt op een autodealer die door C-o-d-e-s wordt gemaakt, en daarnaast komt er een platform waar particulieren hun auto kunnen verkopen.',
        imageUrl:
            'img/mtf/HeroMTF.png',
        date: 'Feb 27, 2024',
        datetime: '2024-02-27',
        category: {title: 'Website', href: '/mtf'},

    },
    {
        id: 3,
        title: 'Lean Canvas',
        href: '/canvas',
        description:
            'Een lean canvas is een formulier waar klanten dingen kunnen invullen voor ons zodat wij dan kunnen zien wat zij willen en dan zouden wij dat uiteindelijk kunnen maken.',
        imageUrl:
            'img/canvas/HeroCanvas.png',
        date: 'Mar 13, 2024',
        datetime: '2024-03-13',
        category: {title: 'Platform', href: '/canvas'},

    },
    {
        id: 4,
        title: 'Autosnelweg (Mas)',
        href: '/mas',
        description:
            'Mas is het platform van MTF-Automobielen waar je als autodealer je auto\'s kan verkopen en waar particulieren hun auto\'s kunnen verkopen.',
        imageUrl:
            'img/mas/HeroMas.png',
        date: 'Apr 22, 2024',
        datetime: '2024-04-22',
        category: {title: 'Platform', href: '/mas'},

    },
    {
        id: 5,
        title: 'Noyy Kussens',
        href: '/noyy',
        description:
            'Mas is het platform van MTF-Automobielen waar je als autodealer je auto\'s kan verkopen en waar particulieren hun auto\'s kunnen verkopen.',
        imageUrl:
            'img/noyy/HeroNoyy.png',
        date: 'Juni 2, 2024',
        datetime: '2024-04-22',
        category: {title: 'Website', href: '/noyy'},

    },
]
</script>
