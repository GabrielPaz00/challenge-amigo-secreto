const nameList = {
  listFriends: ['Gabriel'],
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
