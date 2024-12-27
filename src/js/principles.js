const principles = [
    {
        number: "01",
        title: "DISCUSS SRILA PRABHUPADA'S BOOKS WITH FAMILY MEMBERS AND FRIENDS",
        description: "So you European, American students, you take full advantage of this Vedic culture. I am therefore so much laboring hard that we, before my leaving this body.",
        link: "/principles/discuss-books"
    },
    {
        number: "02",
        title: "SYSTEMATICALLY SCRUTINISE THE BOOKS TOGETHER",
        description: "This Bhagavad-gita is the ABCD of knowledge. This is entrance examination, matriculation examination, school-leaving examination. And Srimad-Bhagavatam is graduate.When you become graduate in spiritual knowledge, then you can understand Srimad-Bhagavatam. ",
        link: "/principles/systematic-study"
    },
    {
        number: "03",
        title: "DO THIS REGULARLY",
        description: "At least one day, this Sunday, you devote, seriously studying Bhagavad-gita, and discuss amongst you whenever there is any doubt.",
        link: "/principles/regular-study"
    },
    {
        number: "04",
        title: "REPEAT THE MEANING IN OWN WORDS",
        description: "So one who is spreading krishna-upadesa, simply repeat what is said by Krishna, then you become acarya. Not difficult at all. Everything is stated there.",
        link: "/principles/repeat-meaning"
    },
    {
        number: "05",
        title: "AVOID DEBATE",
        description: "I am very much stressing nowadays that my students shall increase their reading of my books and try to understand them from different angles of vision.",
        link: "/principles/avoid-debate"
    },
    {
        number: "06",
        title: "HEAR EACH OTHER EMPATHICALLY",
        description: "In both the above verses, Lord Chaitanya expresses his inability to understand the text alone. He says that Sanatana Goswami's presence enabled him to understand.",
        link: "/principles/empathic-hearing"
    },
    {
        number: "07",
        title: "SUBMISSIVELY RAISE YOUR DOUBTS",
        description: "Doubt is one of the important functions of intelligence; blind acceptance of something does not give evidence of intelligence. Therefore the word samsaya is very important",
        link: "/principles/raise-doubts"
    },
    {
        number: "08",
        title: "DISCUSS A REALISTIC APPLICATION",
        description: "Brahmana must be well-educated, jnana, and he must apply the knowledge in practical life and believe in the Vedic injunctions.",
        link: "/principles/practical-application"
    },
    {
        number: "09",
        title: "CITE SASTRIC EVIDENCE",
        description: "The process of speaking in spiritual circles is to say something up held by the scriptures. One should at once quote from scriptural authority to back up what he is saying.",
        link: "/principles/cite-evidence"
    },
    {
        number: "10",
        title: "PRACTICE THEN PREACH",
        description: "So that is part of our business to preach, but to practice personally, that is our main business. To practice personally, that is our main business.",
        link: "/principles/practice-preach"
    }
];

function createCard(principle, index) {
    return `
        <a href="${principle.link}" class="block">
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl card-hover-effect" 
                data-aos="fade-up"
                data-aos-delay="${index * 100}"
                data-aos-duration="800"
                data-principle-id="${index}"
                style="min-height: 220px;"
            >
                <div class="flex flex-col h-full p-6">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="number-circle flex items-center justify-center w-20 h-20 bg-brand-primary rounded-full shadow-2xl p-2">
                                <span class="text-5xl font-bold text-white">${principle.number}</span>
                            </div>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-brand-primary mb-2 line-clamp-2">${principle.title}</h3>
                            <p class="text-gray-600 leading-relaxed line-clamp-2">${principle.description}</p>
                        </div>
                    </div>
                    <div class="mt-4 flex justify-end">
                        <button class="view-more-btn group flex items-center bg-tertiary text-white px-4 py-2 rounded-lg hover:bg-tertiary/90 transition-all duration-300"
                                onclick="showPrinciplePage(${index})">
                            <span class="button-text">View More</span>
                            <i class="fas fa-arrow-right ml-2 arrow-icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Insert cards into the grid
const grid = document.querySelector('.grid');
principles.forEach((principle, index) => {
    grid.innerHTML += createCard(principle, index);
});