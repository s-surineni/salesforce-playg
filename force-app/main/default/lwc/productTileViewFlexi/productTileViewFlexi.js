import { LightningElement, track } from 'lwc';

export default class ProductTileViewFlexi extends LightningElement {
    @track books;
    observer
    fetchingData = false;
    pageNumber = 1;
    showPrductTile = false;
    @track cardNums = [];
    sampleVal = 1;
    constructor() {
        super();
    }



    renderedCallback() {
        this.initialize();
    }

    initialize() {
        this.observer = new IntersectionObserver(entries => {
            console.log("entries", entries);
            const loadMore = entries[0];
            console.log("fetchingData", this.fetchingData);
            if (loadMore.isIntersecting && !this.fetchingData) {
                console.log("fetching data actually");
                // this.getBooks(++this.pageNumber);
                this.makeCards();

            }
        })
        const observingElement = this.template.querySelector('.load-more');

        console.log("observingElement", observingElement);
        this.observer.observe(observingElement);
        // this.getBooks()
        // this.makeCards();
    }

    async getBooks(pageNumber) {
        console.log("fetching data");
        this.fetchingData = true;
        try {
            const response = await fetch("https://openlibrary.org/search.json?q=te&page=" + pageNumber);
            const items = await response.json();
            // console.log("items", JSON.stringify(items));
            this.books = items.docs.map(b => b.title);
        } catch (error) {
            console.error("There's a problem with your fetch operation:", error);
        } finally {
            // console.log("books", JSON.stringify(this.books));
            this.fetchingData = false;
            console.log("fetchingData after", this.fetchingData);
        }
    }
    sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms));
    }
    async makeCards() {
        // console.log(JSON.stringify(this.cardNums));
        this.fetchingData = true;
        const finalPageNumber = this.pageNumber + 10;
        console.log("finalPageNumber ", finalPageNumber);
        console.log("pageNumber ", this.pageNumber);
        try {
            await this.sleep(2000);
        } catch (error) {
            console.error("There's a problem with promise", error);
            console.error(error.message);
            console.error(error.name);

        }
        for (; this.pageNumber < finalPageNumber; this.pageNumber++) {
            this.cardNums.push(this.pageNumber);
            // this.pageNumber += 1;
        }
        this.pageNumber = finalPageNumber;
        this.fetchingData = false;
    }
}