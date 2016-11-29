export interface IUser {
	id: number;
	name: string;
	email: string;
	pitomnik: string;
	facebook: string;
	skype: string;
	phone: Number;
	city: string;
	club: string;
	bread: string;
	image: string;
}

export class User implements IUser {
	id: number;
	name: string;
	email: string;
	pitomnik: string;
	facebook: string;
	skype: string;
	phone: Number;
	city: string;
	club: string;
	bread: string;
	image: string;


	constructor (
		name: string,
		email: string,
		pitomnik: string,
		facebook: string,
		skype: string,
		phone: Number,
		city: string,
		club: string,
		bread: string,
		image:  string
		) {
			this.name = name;
			this.email = email;
			this.pitomnik = pitomnik;
			this.city = city;
			this.club = club;
			this.bread = bread;
			this.image = image;
			this.phone = phone;
			this.skype = skype;

		}
}

