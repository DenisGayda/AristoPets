export interface IUser {
	id?: number;
	userType: string;
	lastName: string;
	firstName: string;
	authType?: string;
	authId?: number;
	email: string;
	photo: string;
	club: string;
	nursery: string;
	phoneNumber: string
	socials: string;
	contractOfSale: boolean;
	animals?: any;
	adverts?: any;
}

export class User implements IUser {
	animals?: any;
	adverts?: any;
	id?: number;
	userType: string;
	lastName: string;
	firstName: string;
	authType?: string;
	authId?: number;
	email: string;
	photo: string;
	club: string;
	nursery: string;
	phoneNumber: string;
	socials: string;
	contractOfSale: boolean;

	constructor (
		userType: string,
		lastName: string,
		firstName: string,
		email: string,
		photo: string,
		club: string,
		nursery: string,
		phoneNumber: string,
		socials: string,
		contractOfSale: boolean
		) {
			this.userType = userType;
			this.lastName = lastName;
			this.firstName = firstName;
			this.email = email;
			this.photo = photo;
			this.club = club;
			this.nursery = nursery;
			this.phoneNumber = phoneNumber;
			this.socials = socials;
			this.contractOfSale = contractOfSale;
		}
}

export interface IAnimal {
	name: string;
	birthday: string;
	gender: string;
	photos: string[];
	nursery: string;
	readyToCopulation: boolean;
	titles: string[];
	breedId: number;
	moreInfo: string;
	club: string;
	id?: number;
	color: string;

}

export class Animal implements IAnimal {
	name: string;
	birthday: string;
	gender: string;
	club: string;
	photos: string[];
	nursery: string;
	readyToCopulation: boolean;
	titles: string[];
	breedId: number;
	moreInfo: string;
	color: string;
	id?: number;


	constructor(
		name: string,
		birthday: string,
		gender: string,
		club: string,
		photos: string[],
		nursery: string,
		readyToCopulation: boolean,
		titles: string[],
		breedId: number,
		moreInfo: string,
		color: string,
		id?: number
	) {
		this.club = club;
		this.name = name;
		this.birthday = birthday;
		this.gender = gender;
		this.photos = photos;
		this.nursery = nursery;
		this.readyToCopulation = readyToCopulation;
		this.titles = titles;
		this.breedId = breedId;
		this.moreInfo = moreInfo;
		this.color = color;
		this.id = id;
	}
}

export interface advertItem {
	id?: number,
	gender: string,
	state: string,
	price: number,
	color: string,
	photos: string[]
}

export interface IAd {
	id?: number,
	title: string,
	birthday: string,
	breedId: number;
	fParentRef: string,
	mParentRef: string,
	fParentId: number,
	mParentId: number,
	photos: string[],
	club: string,
	description: string,
	firstVaccination: string,
	secondVaccination: string,
	advertItems: advertItem[];
}

export class Ad implements IAd {
	id?: number;
	title: string;
	breedId: number;
	birthday: string;
	fParentRef: string;
	mParentRef: string;
	photos: string[];
	fParentId: number;
	mParentId: number ;
	club: string;
	description: string;
	firstVaccination: string;
	secondVaccination: string;
	advertItems: advertItem[];


	constructor(
		title: string,
		birthday: string,
		fParentRef: string,
		breedId: number,
		mParentRef: string,
		fParentId: number,
		mParentId: number,
		club: string,
		photos: string[],
		description: string,
		firstVaccination: string,
		secondVaccination: string,
		advertItems: advertItem[])
	{
		this.fParentId = fParentId;
		this.breedId = breedId;
		this.mParentId = mParentId;
		this.photos = photos;
		this.title = title;
		this.fParentRef = fParentRef;
		this.mParentRef = mParentRef;
		this.birthday = birthday;
		this.club = club;
		this.description = description;
		this.firstVaccination = firstVaccination;
		this.secondVaccination = secondVaccination;
		this.advertItems = advertItems;
	}
}

export interface Breed {
	id: number,
	name: string,
	animalType: string
}