import { LightningElement, api } from "lwc";
const productsData = [
    {
        "id": 1,
        "name": "HP 15s, 12th Gen Intel Core i3-1215U, 8GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.69kg), Anti-Glare, 15.6-inch (39.6cm) FHD Laptop, Intel UHD Graphics, HD Camera, Dual Speakers, fy5011TU",
        "price": 89.99,
        "description": "Wireless headphones offer unmatched freedom and convenience. Enjoy crystal-clear audio and noise cancellation without the hassle of cords. Perfect for music lovers, gym enthusiasts, and busy professionals on the go. Stay connected and immersed in your favorite tunes or calls with long-lasting battery life and comfortable design. Elevate your audio experience today!"
    },
    {
        "id": 2,
        "name": "HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.59kg), Anti-Glare, 15.6-inch(39.6cm) FHD Laptop, Iris Xe Graphics, FHD Camera, Backlit KB, fd0316TU/fd0315TU",
        "price": 15.99,
        "description": "Wireless headphones provide unmatched freedom and convenience, allowing you to move without the hassle of tangled cords. Enjoy crystal-clear audio with advanced noise cancellation technology, ensuring you're fully immersed in your music or calls. These headphones are perfect for music lovers, gym enthusiasts, and busy professionals on the go. With a comfortable design and ergonomic fit, they can be worn for extended periods without discomfort. Many models also feature touch controls and built-in voice assistants for easy navigation and hands-free functionality. Long-lasting battery life ensures you stay connected throughout the day, while fast charging capabilities minimize downtime. Whether you're commuting, working out, or relaxing at home, wireless headphones elevate your audio experience, keeping you connected and untethered. Embrace the future of audio with wireless headphones and enjoy a seamless, high-quality listening experience."
    },
    {
        "id": 3,
        "name": "HP 15s, 12th Gen Intel Core i3-1215U, 8GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.69kg) Anti-glare, Micro-edge, 15.6-inch(39.6cm) FHD laptop, Intel UHD Graphics, HD camera, Backlit KB, fq5327tu",
        "price": 25.99,
        "description": "Compact 10000mAh portable charger with fast charging capability."
    },
    {
        "id": 4,
        "name": "Wireless headphones provide unmatched freedom and convenience, allowing you to move without the hassle of tangled cords. Enjoy crystal-clear audio with advanced noise cancellation technology, ensuring you're fully immersed in your music or calls. These headphones are perfect for music lovers, gym enthusiasts, and busy professionals on the go. With a comfortable design and ergonomic fit, they can be worn for extended periods without discomfort. Many models also feature touch controls and built-in voice assistants for easy navigation and hands-free functionality. Long-lasting battery life ensures you stay connected throughout the day, while fast charging capabilities minimize downtime. Whether you're commuting, working out, or relaxing at home, wireless headphones elevate your audio experience, keeping you connected and untethered. Embrace the future of audio with wireless headphones and enjoy a seamless, high-quality listening experience.",
        "price": 45.50,
        "description": "Waterproof Bluetooth speaker with excellent sound quality."
    },
    {
        "id": 5,
        "name": "Fitness Tracker",
        "price": 49.99,
        "description": "Wearable fitness tracker with heart rate monitor and step counter."
    },
    {
        "id": 6,
        "name": "Wireless Earbuds",
        "price": 99.99,
        "description": "Wireless earbuds with noise cancellation and long-lasting battery life."
    }
]

export default class ProductRowList extends LightningElement {
	@api enable;
	@api recordId;
	@api objectApiName;
	products = productsData;
}