// style={{backgroundImage: `url(https://picsum.photos/200/300)`}}

import { BsInstagram, BsFacebook } from "react-icons/bs"

const TeamCard = ({ team }) => {
    return (
        team.map((item) => (
            <div key={item.nome} className="card w-[200px] h-[300px] m-3 flex items-center justify-center text-white grayscale hover:grayscale-0" style={{backgroundImage: `url(${item.foto})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <h1 className="text-white font-bold text-md">{item.nome}</h1>
                <div className="socials flex gap-2 w-[200px] h-[300px] items-center justify-center opacity-0 hover:opacity-100 text-gray-600 transition ease-in-out delay-150">
                    <a className="hover:text-[#88521a] hover:animate-pulse" href={`${item.instagram}`} target="_blank" rel="noreferrer"><BsInstagram size={40} /></a>
                    <a className="hover:text-[#88521a]" href={`${item.facebook}`} target="_blank" rel="noreferrer"><BsFacebook size={40} /></a>
                </div>
            </div>
        ))
    )
}

export default TeamCard