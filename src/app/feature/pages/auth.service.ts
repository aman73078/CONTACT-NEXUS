import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string = 'HELLO-MYCONTACTS';
  users: any = [
    {
      id: 1,
      fullName: 'Aman Tripathi',
      username: 'aman1234',
      email: 'aman@gmail.com',
      password: '1234',
    },
    {
      id: 1,
      fullName: 'Rahul Kumar',
      username: 'rahul1234',
      email: 'rahul@gmail.com',
      password: '1234',
    },
  ];

  login(param: any) {
    const user = this.users.find(
      (item: any) =>
        item.emial === param.email && item.password === param.password
    ) ?? {};
    if (!user && Object.keys(user).length === 0) {
      return { status: false, data: user, message: 'User is not valid.' };
    } else {
      localStorage.setItem('token', this.token);
      return {status:true, message:"User loggedin successfully.", accessToken: this.token};
    }
  }

  logOut(){
    localStorage.removeItem('token');
  }

  register(param: any) {
    const data = {
      id: this.users.length,
      fullName: param.fullName,
      username: param.username,
      email: param.email,
      password: param.password,
    };
    this.users.push(data);
    delete data.password;
    return {status:true, message:"User created successfully.", data:data};
  }

  getToken() {
    return localStorage.getItem('token');
  }

  authentication() {
    return !!this.getToken();
  }
}
