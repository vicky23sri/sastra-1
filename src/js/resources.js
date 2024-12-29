const books = [
    {
        title: "Bhagavad Gita: As It Is",
        author: "A.C. Bhaktivedanta Swami Prabhupada",
        description: "The definitive English edition with detailed purports, original Sanskrit verses, Roman transliterations, and word-for-word translations.",
        price: 29.99,
        rating: 5,
        reviews: 5420,
        image: "https://img.freepik.com/free-photo/photorealistic-representation-krishna-deity_23-2151067766.jpg?uid=R75331262&ga=GA1.1.415415411.1725936376&semt=ais_hybrid",
        badge: "Best Seller",
        stock: "In Stock",
        edition: "Hardcover Collector's Edition"
    },
    {
        title: "Bhagavad Gita: A Manual for Life",
        author: "Eknath Easwaran",
        description: "A practical and accessible translation with detailed commentary on applying the Gita's teachings in daily life.",
        price: 24.99,
        rating: 4.8,
        reviews: 3250,
        image: "https://www.gitamritam.com/images/18ni-gita/n18-gita-21.jpg",
        badge: "Popular Choice",
        stock: "Limited Stock",
        edition: "Special Anniversary Edition"
    },
    {
        title: "The Holy Geeta",
        author: "Swami Chinmayananda",
        description: "An in-depth commentary explaining the philosophical concepts with practical insights for modern readers.",
        price: 34.99,
        rating: 4.9,
        reviews: 2840,
        image: "https://www.holy-bhagavad-gita.org/public/images/nourish-your-soul-swami-mukundananda-jkyog-home.jpg",
        badge: "Premium Edition",
        stock: "In Stock",
        edition: "Deluxe Hardbound"
    },
    {
        title: "God Talks With Arjuna",
        author: "Paramahansa Yogananda",
        description: "A comprehensive interpretation revealing the Gita's psychological and spiritual wisdom.",
        price: 39.99,
        rating: 4.9,
        reviews: 1920,
        image: "https://img.freepik.com/free-photo/photorealistic-representation-deity-krishna_23-2151067807.jpg?uid=R75331262&ga=GA1.1.415415411.1725936376&semt=ais_hybrid",
        badge: "Spiritual Classic",
        stock: "In Stock",
        edition: "2-Volume Set"
    },
    {
        title: "Bhagavad Gita: The Song Divine",
        author: "Swami Mukundananda",
        description: "A contemporary interpretation with practical applications and spiritual insights for modern life.",
        price: 22.99,
        rating: 4.7,
        reviews: 1580,
        image: "https://i0.wp.com/www.unbrokenself.com/wp-content/uploads/2019/11/Purple-Dainty-Floral-Facebook-Ad-6.png?resize=678%2C381&ssl=1",
        badge: "New Release",
        stock: "In Stock",
        edition: "Illustrated Edition"
    },
    {
        title: "Gita: The Supreme Song",
        author: "Swami Swarupananda",
        description: "A traditional commentary following the Advaita Vedanta interpretation with Sanskrit verses.",
        price: 27.99,
        rating: 4.8,
        reviews: 980,
        image: "https://i.pinimg.com/474x/12/8c/4c/128c4c86dd621aec6cf9e2417b8b91ff.jpg",
        badge: "Traditional",
        stock: "Few Left",
        edition: "Sanskrit Scholar's Edition"
    }
];

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star text-yellow-400"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star text-yellow-400"></i>';
    }
    return starsHTML;
}

function createBookCard(book) {
    return `
        <div class="book-card bg-white rounded-xl custom-shadow overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div class="relative book-card-gradient book-image-container">
                <img src="${book.image}" alt="${book.title}" class="book-image" style="height: 300px; width: 100%; object-fit: cover;"/>
                <div class="absolute top-4 right-4 bg-white text-[#4c1204] px-4 py-2 rounded-lg text-sm font-bold">
                    ${book.badge}
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <div class="flex items-center gap-2">
                        <div class="flex gap-1">
                            ${renderStars(book.rating)}
                        </div>
                        <span class="text-white font-semibold">${book.rating}</span>
                        <span class="text-white/80">(${book.reviews.toLocaleString()} reviews)</span>
                    </div>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="mb-4 flex-grow">
                    <h3 class="font-bold text-2xl mb-2 text-gray-800">${book.title}</h3>
                    <p class="text-[#4c1204] font-semibold">${book.author}</p>
                    <p class="text-gray-500 text-sm">${book.edition}</p>
                </div>
                <p class="text-gray-600 mb-6 line-clamp-2">${book.description}</p>
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <span class="text-3xl font-bold text-gray-800">$${book.price}</span>
                        <span class="text-sm text-gray-500 ml-2">Free shipping</span>
                    </div>
                    <span class="bg-[#4c1204]/10 text-[#4c1204] px-3 py-1 rounded-full text-sm font-semibold">
                        ${book.stock}
                    </span>
                </div>
                <button class="w-full bg-[#4c1204] text-white py-4 rounded-lg font-bold hover:bg-[#b55206] transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('booksContainer');
    books.forEach(book => {
        container.innerHTML += createBookCard(book);
    });
});