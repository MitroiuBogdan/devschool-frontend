const main = {
  users: [],
  error: "",
  async init() {
    const users = await this.fetchUsers();
    console.log(users);

    if (users) {
      this.users = users;
    } else {
      this.error = "An error has occurred";
    }
    this.render();
  },

  async fetchUsers() {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    if (response.ok) {
      const userArray = await response.json();

      return userArray;
    } else {
      return null;
    }
  },

  render(){
    const item=this.users.map(user =>`<li>${user.name} &lt;${user.email}&gt;</li>`)
    const list = document.getElementById('list');
    list.innerHTML=item.join(' ');
    
    // this.users.forEach((user)=>{
    //   list.innerHTML+='<li>' +user.name +'</li>'
    // });


  }

};
