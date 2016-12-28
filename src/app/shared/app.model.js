"use strict";
var User = (function () {
    function User(userType, lastName, firstName, email, photo, club, nursery, phoneNumber, socials, contractOfSale) {
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
    return User;
}());
exports.User = User;
var Animal = (function () {
    function Animal(name, birthday, gender, club, photos, nursery, readyToCopulation, titles, breedId, moreInfo, color, id) {
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
    return Animal;
}());
exports.Animal = Animal;
var Ad = (function () {
    function Ad(title, birthday, fParentRef, breedId, mParentRef, fParentId, mParentId, club, photos, description, firstVaccination, secondVaccination, advertItems) {
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
    return Ad;
}());
exports.Ad = Ad;
//# sourceMappingURL=app.model.js.map