import React, { Component } from 'react'
import TableComponent from './TableComponent';
// import AlertComponet from './AlertComponent';

export default class InputComponent extends Component {
  constructor(){
    super();
    this.state = {
      student: [
        { id:1,
          email:"123",
          userName:"john",
          age:12,
          status:"Pending"},
        
      ],
      newEmail: "",
      newUser : "",
      newAge : "",
      newstatus:"Pending",
    }
    
  }

  onUser = (event) => {
    this.setState({
      newUser: event.target.value,
    });
  };

changeBtn = (e) => {
    const spreadThis = this.state.student;
    for(let i=0;i<spreadThis.length;i++){
      if(spreadThis[i].id === e.id){
        e.status = e.status === "Pending"? "Done" : "Pending";
      }
    }
    this.setState({...this.state.student})
    console.log(this.state.student);
    
}

  onEmail = (event) => {
    this.setState({
      newEmail: event.target.value,
    })
  }
  onAge = (event) => {
    this.setState({
      newAge: event.target.value,
    });
  }
  register = () => {
    const newObj = {
      id: this.state.student.length + 1,
      email: this.state.newEmail,
      userName: this.state.newUser,
      age: this.state.newAge,
      status: this.state.newstatus,
    };
    const spreadList ={...newObj}
    this.setState(
      {
        student: [...this.state.student, spreadList],
        newEmail: "",
        newUser : "",
        newAge : "",
        // newstatus:"",
      },
      () => console.log(this.state.student)
    );
  };

  render() {
    return (
      <div className='block'>
      
        <h1 className="mt-5 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
             Please Fill Your Information
        </h1><br /><br />
        <label class="flex items-start text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Your Mail
            </label>
        <div class="flex">
            
            <span class="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700">
            <svg
                    fill="none"
                    class="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
            </span>
            <input class="w-full border border-gray-400 p-2 focus:outline-none" type="email" placeholder="Enter you email" 
            required
            onChange={this.onEmail}></input>
        </div><br/><br/>
        <label class="flex items-start  text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Yourname
            </label>
        <div class="flex">
            
            <span class="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg></span>
            <input class="w-full border border-gray-400 p-2 focus:outline-none" type="text" placeholder="Enter your name" 
          required
          onChange={this.onUser}></input>
        </div>
        <br/><br/>
        <label class="flex items-start  text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Age
            </label>
        <div class="flex">
            
            <span class="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700">
                ❤️
            </span>
            <input class="w-full border border-gray-400 p-2 focus:outline-none" type="number" min={1} placeholder="Enter your age"
            required
            onChange={this.onAge}></input>
        </div>
        <br/><br/>
        <button
        onClick={this.register}
        class="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <p className='text-white-800 text-lg '>Register</p>
            </span>
        </button>
        
      
        <br/><br/>
      <TableComponent userData = {this.state.student} changeData = {this.changeBtn} />

      {/* <AlertComponet />  */}
    </div>
    )
  }
}
