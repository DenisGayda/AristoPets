"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            {
                id: 1,
                name: 'Mr. Nice',
                club: 'Winner',
                city: 'Odessa',
                bread: 'dog'
            },
            {
                id: 2,
                name: 'Mr. Good',
                club: 'Looser',
                city: 'Kiev',
                bread: 'dyYYYg'
            },
            {
                id: 3,
                name: 'Mr. Bad',
                club: 'XXX',
                city: 'YYYY',
                bread: 'dYYYYg'
            }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=app.data.js.map