
const Map = () => {
  return (
    <section className="map mt-2 mb-2 h-96">
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=1152&amp;height=400&amp;hl=en&amp;q=Barber%20Ponto%20Chick%20+(Ponto%20Chick)&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </section>
  );
};

export default Map;
