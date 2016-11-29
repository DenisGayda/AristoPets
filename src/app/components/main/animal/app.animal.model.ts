export interface IAnimal {
	id: number;
	idUser: number;
	name: string;
	image: string[];
	bread: string;
	sex: string;
	sexWork: boolean;
	color: string;
	club: string;
	description: string;
}

export class Animal implements IAnimal {
	id: number;
	idUser: number;
	name: string;
	image: string[];
	bread: string;
	sex: string;
	sexWork: boolean;
	color: string;
	club: string;
	description: string;


	constructor(
		id: number,
		idUser: number,
		name: string,
		image: string[],
		bread: string,
		sex: string,
		sexWork: boolean,
		color: string,
		club: string,
		description: string
	) {
		this.id = id;
		this.idUser = idUser;
		this.name = name;
		this.image = image;
		this.bread = bread;
		this.sex = sex;
		this.sexWork = sexWork;
		this.color = color;
		this.club = club;
		this.description = description;
	}
}