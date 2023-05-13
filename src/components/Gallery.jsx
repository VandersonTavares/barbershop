const images = [
  {url: 'https://picsum.photos/200/300'},
  {url: 'https://picsum.photos/200/300'}
]

import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <section className="gallery text-center bg-black">
      {/* <h1 className="text-2xl text-white">Galeria</h1> */}
      <div className="gallery-content mx-auto max-w-6xl">
        <GalleryCard images={images}/>
      </div>
    </section>
  )
}

export default Gallery