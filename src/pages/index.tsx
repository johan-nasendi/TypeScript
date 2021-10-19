import React,{useState} from 'react'
import '../App.css';
import AddToList from '../components/ListMember/AddToList';
import List from '../components/ListMember/List';
import Navbar from '../components/Navbar';


export interface  IState {
    people : {
      name: string
      age: number
      img: string
      note?: string
    }[]
  }
  
const Home = () => {

    const [people, setPeople] = useState<IState["people"]>([
        {
          name: "Johan Nasendi",
          age : 20,
          img: "https://picsum.photos/id/1/200/300",
          note: "Lorem ipsun"
           
        },
        {
          name: "Jonas Embri",
          age : 21,
          img: "https://picsum.photos/id/1005/200/300",
          note: "Lorem ipsun"
        },
    
      ])

    return (
        <div className="App">
        <Navbar/>
       <h1>List Members</h1>
       <List people={people} />
       <AddToList  setPeople={setPeople} people={people} />

      </div>
    )
}

export default Home
