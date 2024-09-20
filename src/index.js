import "./style.css";

function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    
    ['Home', 'Menu', 'Contact'].forEach(text => {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', () => loadPage(text.toLowerCase()));
        nav.appendChild(button);
    });
    
    header.appendChild(nav);
    return header;
}

function createMain() {
    const main = document.createElement('main');
    main.id = 'content';
    return main;
}

function loadPage(page) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    switch (page) {
        case 'home':
            content.innerHTML = `
                <h1>Welcome to Ipsum Eats</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                <img src="https://picsum.photos/400/300" alt="Restaurant interior" />
                <p>Ut aliquam sollicitudin leo, sit amet bibendum nisl consectetur et. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at.</p>
            `;
            break;
        case 'menu':
            content.innerHTML = `
                <h1>Our Menu</h1>
                <h2>Appetizers</h2>
                <ul>
                    <li>Lorem Ipsum Salad - $8.99</li>
                    <li>Dolor Sit Amet Soup - $6.99</li>
                    <li>Consectetur Bruschetta - $7.99</li>
                </ul>
                <h2>Main Courses</h2>
                <ul>
                    <li>Adipiscing Elit Steak - $24.99</li>
                    <li>Nullam In Dui Pasta - $16.99</li>
                    <li>Vivamus Hendrerit Fish - $22.99</li>
                </ul>
                <h2>Desserts</h2>
                <ul>
                    <li>Sed Auctor Cheesecake - $8.99</li>
                    <li>Neque Eu Tellus Ice Cream - $6.99</li>
                    <li>Rhoncus Ut Eleifend Tiramisu - $7.99</li>
                </ul>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h1>Contact Us</h1>
                <p>Get in touch with Ipsum Eats:</p>
                <ul>
                    <li>Phone: (123) 456-7890</li>
                    <li>Email: info@ipsumeats.com</li>
                    <li>Address: 123 Lorem Ipsum St, Consectetur City, AB 12345</li>
                </ul>
                <h2>Opening Hours</h2>
                <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                <img src="https://picsum.photos/400/300?random=1" alt="Restaurant exterior" />
            `;
            break;
    }
}

document.body.appendChild(createHeader());
document.body.appendChild(createMain());

// Load the home page by default
loadPage('home');