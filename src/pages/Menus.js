import React, { useState } from 'react';

const Menus = () => {
    const [filter, setFilter] = useState('all');

    const handleFilter = (category) => {
        setFilter(category);
    };

    const menuItems = [
        // Appetizers
        {
            category: 'Appetizers',
            name: 'Soup of the Day',
            price: '$4.95',
            ingredients: 'A flavorful and comforting soup made with the freshest ingredients and daily specials.',
        },
        {
            category: 'Appetizers',
            name: 'Caesar Salad',
            price: '$6.95',
            ingredients: 'Crisp romaine lettuce, homemade croutons, and tangy Caesar dressing, topped with shaved Parmesan cheese.',
        },
        {
            category: 'Appetizers',
            name: 'Fresh Oysters',
            price: '$9.95',
            ingredients: 'Freshly shucked oysters served on a bed of ice, accompanied by a selection of zesty sauces.',
        },
        {
            category: 'Appetizers',
            name: 'Shrimp Salad',
            price: '$8.95',
            ingredients: 'A refreshing salad featuring succulent shrimp, mixed greens, cherry tomatoes, and a tangy vinaigrette.',
        },

        // Burgers
        {
            category: 'Burgers',
            name: 'Chicken Burger',
            price: '$10.95',
            ingredients: 'Succulent chicken burger with a grilled chicken patty, fresh vegetables, and special sauce, served on a soft bun.',
        },
        {
            category: 'Burgers',
            name: 'Beef Burger',
            price: '$11.95',
            ingredients: 'Juicy beef burger seasoned and cooked to your preference, accompanied by a variety of toppings and condiments, served on a toasted bun.',
        },
        {
            category: 'Burgers',
            name: 'Vegetarian Burger',
            price: '$9.95',
            ingredients: 'Delicious vegetarian burger with a plant-based patty made with flavorful ingredients, served with fresh vegetables and a choice of sauces.',
        },

        // Pizza
        {
            category: 'Pizza',
            name: 'Margherita Pizza',
            price: '$12.95',
            ingredients: 'Classic pizza topped with rich tomato sauce, mozzarella cheese, and fresh basil leaves, baked to perfection in our wood-fired oven.',
        },
        {
            category: 'Pizza',
            name: 'Pepperoni Pizza',
            price: '$13.95',
            ingredients: 'Mouthwatering pizza topped with generous slices of savory pepperoni, gooey mozzarella cheese, and our signature tomato sauce.',
        },
        {
            category: 'Pizza',
            name: 'Vegetarian Pizza',
            price: '$11.95',
            ingredients: 'Delightful pizza loaded with a medley of fresh vegetables, including bell peppers, mushrooms, onions, and olives, all covered in melted cheese.',
        },
        {
            category: 'Pizza',
            name: 'Seafood Pizza',
            price: '$14.95',
            ingredients: 'Tantalizing pizza topped with a delectable combination of succulent seafood such as shrimp, scallops, and calamari, complemented by a blend of flavorsome herbs and spices.',
        },

        // Pasta Dishes
        {
            category: 'Pasta-Dishes',
            name: 'Bolognese Pasta',
            price: '$10.95',
            ingredients: 'Traditional Italian pasta dish featuring al dente pasta tossed in a rich and savory bolognese sauce, garnished with Parmesan cheese.',
        },
        {
            category: 'Pasta-Dishes',
            name: 'Fettuccine Alfredo',
            price: '$12.95',
            ingredients: 'Creamy and indulgent pasta dish featuring fettuccine noodles coated in a velvety Alfredo sauce, garnished with grated Parmesan and fresh parsley.',
        },
        {
            category: 'Pasta-Dishes',
            name: 'Penne Arrabiata',
            price: '$11.95',
            ingredients: 'Spicy and flavorful pasta dish made with penne noodles tossed in a fiery arrabiata sauce, topped with grated cheese and fresh herbs.',
        },
        {
            category: 'Pasta-Dishes',
            name: 'Lasagna',
            price: '$13.95',
            ingredients: 'Classic Italian dish consisting of layers of pasta sheets, rich meat sauce, creamy béchamel sauce, and melted cheese, baked to perfection.',
        },

        // Steak
        {
            category: 'Steak',
            name: 'Beef Steak',
            price: '$16.95',
            ingredients: 'Succulent beef steak cooked to your liking, served with a choice of sides and accompanied by a flavorful sauce.',
        },
        {
            category: 'Steak',
            name: 'Chicken Steak',
            price: '$14.95',
            ingredients: 'Grilled chicken steak seasoned with aromatic herbs and spices, served with a medley of vegetables and a delicious sauce.',
        },
        {
            category: 'Steak',
            name: 'Vegetarian Steak',
            price: '$13.95',
            ingredients: 'Flavorful vegetarian steak made with a variety of plant-based ingredients, served with a delectable sauce and accompanied by a selection of sides.',
        },
        {
            category: 'Steak',
            name: 'Fish Steak',
            price: '$15.95',
            ingredients: 'Tender fish steak grilled to perfection, served with seasonal vegetables, and garnished with a tangy sauce.',
        },
        {
            category: 'Steak',
            name: 'Grilled Salmon Fillet',
            price: '$17.95',
            ingredients: 'Grilled salmon fillet cooked to perfection, served with a delicate sauce, and accompanied by a selection of sides and fresh greens.',
        },

        // Fish Dishes
        {
            category: 'Fish',
            name: 'Grilled Salmon Fillet',
            price: '$17.95',
            ingredients: 'Grilled salmon fillet seasoned with aromatic herbs, served with a side of roasted vegetables and a zesty lemon sauce.',
        },
        {
            category: 'Fish',
            name: 'Parmesan-Crusted Cod',
            price: '$16.95',
            ingredients: 'Cod fillet encrusted with Parmesan cheese and baked to golden perfection, served with a medley of sautéed vegetables.',
        },
        {
            category: 'Fish',
            name: 'Daily Catch with Lemon Sauce',
            price: '$18.95',
            ingredients: 'Catch of the day delicately cooked and served with a tangy lemon sauce, accompanied by a choice of sides.',
        },
        {
            category: 'Fish',
            name: 'Shrimp Skewers',
            price: '$15.95',
            ingredients: 'Skewered shrimp marinated in a flavorful blend of spices, grilled to perfection, and served with a side of seasoned rice.',
        },

        // Desserts
        {
            category: 'desserts',
            name: 'Crème brûlée',
            price: '$7.95',
            ingredients: 'Classic French dessert featuring a creamy vanilla custard topped with a caramelized sugar crust, served chilled.',
        },
        {
            category: 'desserts',
            name: 'Chocolate fondant',
            price: '$8.95',
            ingredients: 'Decadent chocolate fondant with a molten chocolate center, served warm with a scoop of vanilla ice cream.',
        },
        {
            category: 'desserts',
            name: 'Fruit tart',
            price: '$6.95',
            ingredients: 'Freshly baked fruit tart with a buttery crust, filled with a selection of seasonal fruits and glazed with a sweet glaze.',
        },
        {
            category: 'desserts',
            name: 'Artisanal ice cream',
            price: '$5.95',
            ingredients: 'Artisanal ice cream made with the finest ingredients, available in a variety of flavors to satisfy your sweet cravings.',
        },

        // Beverages
        {
            category: 'boissons',
            name: 'Mojito',
            price: '$8.95',
            ingredients: 'Refreshing rum and mint mix.',
        },
        {
            category: 'boissons',
            name: 'Margarita',
            price: '$9.95',
            ingredients: 'Tangy tequila and lime delight.',
        },
        {
            category: 'boissons',
            name: 'Cosmopolitan',
            price: '$10.95',
            ingredients: 'Vodka, cranberry, and citrus sophistication.',
        },
        {
            category: 'boissons',
            name: 'Daïquiri',
            price: '$8.95',
            ingredients: 'Refreshing rum and citrus concoction.',
        },
        {
            category: 'boissons',
            name: 'Martini',
            price: '$9.95',
            ingredients: 'Classic gin or vodka mixed drink.',
        },
        {
            category: 'boissons',
            name: 'Old Fashioned',
            price: '$11.95',
            ingredients: 'Whiskey, bitters, and sugar sophistication.',
        },
        {
            category: 'boissons',
            name: 'Piña Colada',
            price: '$10.95',
            ingredients: 'Creamy coconut and pineapple paradise.',
        },
        {
            category: 'boissons',
            name: 'Bloody Mary',
            price: '$9.95',
            ingredients: 'Spicy vodka and tomato juice mix.',
        },
        {
            category: 'boissons',
            name: 'Soda',
            price: '$2.95',
            ingredients: 'Bubbly and refreshing carbonated beverage.',
        },
        {
            category: 'boissons',
            name: 'Fruit juice',
            price: '$3.95',
            ingredients: 'Fresh and invigorating fruit juice selection.',
        },
        {
            category: 'boissons',
            name: 'Limonade',
            price: '$3.95',
            ingredients: 'Classic and refreshing lemon-flavored beverage.',
        },
        {
            category: 'boissons',
            name: 'Iced tea',
            price: '$4.95',
            ingredients: 'Cool and refreshing iced tea selection.',
        },
        {
            category: 'boissons',
            name: 'Coffee',
            price: '$2.95',
            ingredients: 'Classic and invigorating coffee selection.',
        },
        {
            category: 'boissons',
            name: 'Mineral water',
            price: '$1.95',
            ingredients: 'Refreshing and pure mineral water.',
        },
        {
            category: 'boissons',
            name: 'Smoothie',
            price: '$5.95',
            ingredients: 'Fresh and blended fruit-based delight.',
        },
        {
            category: 'boissons',
            name: 'Non-alcoholic beverage',
            price: '$3.95',
            ingredients: 'Non-alcoholic carbonated beverage selection.',
        },
        {
            category: 'boissons',
            name: 'Mocktail',
            price: '$4.95',
            ingredients: 'Alcohol-free mixed drink creation.',
        },

        // ... Add all the beverage items accordingly
    ];

    const filteredMenuItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

    return (
        <section id="menu" className="menu">
            <div className="container">
                <div className="section-title">
                    <h2>Check our tasty <span>Menu</span></h2>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                            <li onClick={() => handleFilter('all')} className={filter === 'all' ? 'filter-active' : ''}>All</li>
                            <li onClick={() => handleFilter('Appetizers')} className={filter === 'Appetizers' ? 'filter-active' : ''}>Appetizers</li>
                            <li onClick={() => handleFilter('Burgers')} className={filter === 'Burgers' ? 'filter-active' : ''}>Burgers</li>
                            <li onClick={() => handleFilter('Pizza')} className={filter === 'Pizza' ? 'filter-active' : ''}>Pizza</li>
                            <li onClick={() => handleFilter('Pasta-Dishes')} className={filter === 'Pasta-Dishes' ? 'filter-active' : ''}>Pasta Dishes</li>
                            <li onClick={() => handleFilter('Steak')} className={filter === 'Steak' ? 'filter-active' : ''}>Steak</li>
                            <li onClick={() => handleFilter('Fish')} className={filter === 'Fish' ? 'filter-active' : ''}>Fish Dishes</li>
                            <li onClick={() => handleFilter('desserts')} className={filter === 'desserts' ? 'filter-active' : ''}>Desserts</li>
                            <li onClick={() => handleFilter('boissons')} className={filter === 'boissons' ? 'filter-active' : ''}>Beverages</li>
                        </ul>
                    </div>
                </div>

                <div className="row menu-container">
                    {filteredMenuItems.map((item, index) => (
                        <div key={index} id={item.category}>
                            <div className={`col-lg-6 menu-item filter-${item.category}`}>
                                <div className="menu-content">
                                    <a href="#">{item.name}</a><span>{item.price}</span>
                                </div>
                                <div className="menu-ingredients">
                                    {item.ingredients}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menus;
