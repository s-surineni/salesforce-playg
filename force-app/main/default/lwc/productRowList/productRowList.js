import { LightningElement, api } from "lwc";
const productsData = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "price": 89.99,
        "description": "High-quality wireless headphones with noise-cancellation feature."
    },
    {
        "id": 2,
        "name": "Smartphone Stand",
        "price": 15.99,
        "description": "Adjustable smartphone stand suitable for all phone sizes."
    },
    {
        "id": 3,
        "name": "Portable Charger",
        "price": 25.99,
        "description": "Compact 10000mAh portable charger with fast charging capability."
    },
    {
        "id": 4,
        "name": "Bluetooth Speaker",
        "price": 45.50,
        "description": "Waterproof Bluetooth speaker with excellent sound quality."
    },
    {
        "id": 5,
        "name": "Fitness Tracker",
        "price": 49.99,
        "description": "Wearable fitness tracker with heart rate monitor and step counter."
    }
]

export default class ProductRowList extends LightningElement {
	@api enable;
	@api recordId;
	@api objectApiName;
	products = productsData;
}