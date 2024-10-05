import { useState } from "react";
import Card from "./components/card"
import Navbar from "./components/Navbar"
function App() {
  const data = [
    {
      image: "https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Blinding Lights",
      artistName: "The Weeknd",
      added: false
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1721995218159-a5500a263667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Shape of You",
      artistName: "Ed Sheeran",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D",
      songName: "Rolling in the Deep",
      artistName: "Adele",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1520242739010-44e95bde329e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Bohemian Rhapsody",
      artistName: "Queen",
      added: false
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1721995218159-a5500a263667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Uptown Funk",
      artistName: "Mark Ronson ft. Bruno Mars",
      added: false
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dimage6",
      songName: "Stairway to Heaven",
      artistName: "Led Zeppelin",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D",
      songName: "Hotel California",
      artistName: "Eagles",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1520242739010-44e95bde329e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Billie Jean",
      artistName: "Michael Jackson",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Smells Like Teen Spirit",
      artistName: "Nirvana",
      added: false
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1721995218159-a5500a263667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Hey Jude",
      artistName: "The Beatles",
      added: false
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Imagine",
      artistName: "John Lennon",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D",
      songName: "Wonderwall",
      artistName: "Oasis",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1520242739010-44e95bde329e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Thriller",
      artistName: "Michael Jackson",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dpath/to/image14.jpg",
      songName: "Like a Rolling Stone",
      artistName: "Bob Dylan",
      added: false
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1721995218159-a5500a263667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Someone Like You",
      artistName: "Adele",
      added: false
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Let It Be",
      artistName: "The Beatles",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D",
      songName: "Paint It Black",
      artistName: "Yash",
      added: false
    }
    ];
  const [val,setval] = useState(data)

  const handleclick = (index)=>{
    setval((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex === index) return{...item, added: !item.added};
        return item;
      } )
    })
  }
  return ( 
    <>
      <div className="w-full h-screen bg-zinc-200 ">
        <Navbar data={val}/>
        <div className="px-20 flex gap-5 mt-10 flex-wrap ">
          {val.map((obj,index)=>(<Card key={index} index={index}  data={obj} handleclick={handleclick}/> ))}
        </div>
      </div>
    </> 
  )
}

export default App
