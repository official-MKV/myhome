import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import SearchSection from "./components/SearchSection";

const Properties = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-darkGreen text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Properties</h1>
      </div>

      <SearchSection />

      {/* Properties Listing */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Properties.map((property) => (
          <div key={property.id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={property.image} alt={property.name} className="w-full h-56 object-cover rounded-lg"/>
            <h2 className="text-xl font-semibold mt-4">{property.name}</h2>
            <p className="text-gray-500">{property.location}</p>
            <p className="text-green-600 font-bold">{property.price}</p>
            <p className="text-gray-500">{property.size}</p>
          </div>
        ))}
      </div>

      <FooterSection/>
    </div>
  );
};

export default Properties;
