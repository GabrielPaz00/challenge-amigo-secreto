const nameList = {
  //array para almacenar los nombres
  listFriends: [],
  get() {
    return this.listFriends;
  },
  deleteFriend(index) {
    this.listFriends.splice(index, 1);
  },
  addFriend(name) {
    this.listFriends.push(name);
  },
};

export default nameList;
