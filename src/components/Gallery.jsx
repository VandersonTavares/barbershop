const images = [
  {url: 'https://picsum.photos/200/300'},
  {url: 'https://picsum.photos/200/300'}
]

import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <section className="gallery text-center" id="gallery">
      <h1 className="text-4xl font-dance text-[#729476]">Galeria</h1>
      <div className="gallery-content mx-auto max-w-6xl">
        <GalleryCard images={images}/>
      </div>
    </section>
  )
}

export default Gallery