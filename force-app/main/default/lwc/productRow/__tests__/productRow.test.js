import { createElement } from "lwc";
import ProductRow from "c/productRow";

// import { registerLdsTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
// import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';

describe("c-product-row", () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it("has component name on the header", () => {
        const element = createElement("c-product-row", {
            is: ProductRow
        });
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            const componentHeader = element.shadowRoot.querySelector("h1");
            expect(componentHeader.textContent).toBe("productRow");
        });
    });
});