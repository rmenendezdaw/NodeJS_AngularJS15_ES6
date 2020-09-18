class ListGamesCtrl {
    constructor(User, games) {
        "ngInject";
    this.games = games;
    

        this.listConfig = {
            type: User.current ? "feed" : "all"
        };

    }
    changeList(newList){
        this._$scope.$broadcast("setListTo", newList);
    }

}

export default ListGamesCtrl;