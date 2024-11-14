import { LightningElement, api } from "lwc";
export default class ProductRow extends LightningElement {
	@api enable;
	@api recordId;
	@api objectApiName;
	@api product;
}