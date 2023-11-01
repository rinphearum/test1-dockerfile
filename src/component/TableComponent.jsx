import React, { Component } from 'react'
import Swal from 'sweetalert2'

export default class TableComponent extends Component {
  detail = (e) => {
    Swal.fire({
      title: `<b style=color:red>ID</b> :${e.id}  
              <b style=color:red>Username</b> : ${e.userName} 
              <b style=color:red>Email</b> : ${e.email} 
              <b style=color:red>age</b> : ${e.age} `,
      


    })
    console.log(e.id);
    
  }


  render() {
    return (
        <div className="w-full">
        <div class=" shadow-md sm:rounded-lg ">
          <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-20 py-3">
                  ID
                </th>
                <th scope="col" class="px-20 py-3">
                  Email
                </th>
                <th scope="col" class="px-20 py-3">
                    Username
                </th>
                <th scope="col" class="px-20 py-3">
                    Age
                </th>
                <th scope="col" class="px-20 py-3">
                    Action
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.userData.map((item) => (
                <tr key={item.id} class="border-b odd:bg-teal-500	 even:bg-white pt-1 ">
                  <td class=" text-black px-6 py-4 text-center">{item.id}</td>
                  <td class="text-black px-6 py-4 text-center">{item.email}</td>
                  <td class="text-black px-6 py-4 text-center">{item.userName}</td>
                  <td class="text-black px-6 py-4 text-center">{item.age}</td>
                  <tr className='text-center'>
                 
                  <button 
                  type="button"
                  onClick={() => {this.props.changeData(item)}}
                  class= {item.status === "Pending"? "mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900":"focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"}

                  >{item.status}
                  </button>
                  
                  <button onClick={() => this.detail(item)} 
                  type="button" 
                  class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    More Detail</button>

                  </tr>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
