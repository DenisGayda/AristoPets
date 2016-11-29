export interface IAd {
	id: number;
	idUser: number;
	name: string;
	image: string[];
}

export class Ad implements IAd {
	id: number;
	idUser: number;
	name: string;
	image: string[];


	constructor(id: number,	idUser: number, name: string, image: string[]) {
		this.id = id;
		this.idUser = idUser;
		this.name = name;
		this.image = image;
	}
}