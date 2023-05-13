import TeamCard from "./TeamCard"

import bgLogo from "../assets/img/bg-logo5.png";
import pauloImg from "../assets/img/paulo-henrique.jpg";
import hebertImg from "../assets/img/hebert-bennet.jpg";



const team = [
  {nome: 'Paulo Henrique', instagram: 'https://www.instagram.com/chock_obarbeiro', facebook: '#', foto: pauloImg},
  {nome: 'Hebert Bennet', instagram: 'https://www.instagram.com/hebert_bennett', facebook: '#', foto: hebertImg},
]


const Team = () => {
  return (
    <section className="team mt-20 mb-20 text-center " style={{backgroundImage: `url(${bgLogo})`,  backgroundSize: 'contain',  backgroundPosition: 'center'}}>
      <h1 className="text-4xl font-dance text-[#729476]">Nosso Time</h1>
      <div className="content max-w-6xl mx-auto">
        <div className="card-gallery flex flex-wrap justify-center opacity-100">
          <TeamCard team={team}/>
        </div>
      </div>
    </section>
  )
}

export default Team