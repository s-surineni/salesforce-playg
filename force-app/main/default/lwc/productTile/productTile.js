import { LightningElement, api } from "lwc";
export default class ProductTile extends LightningElement {
	@api visible;
	@api recordId;
	@api objectApiName;
}