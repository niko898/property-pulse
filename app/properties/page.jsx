import PropertyCard from "@/components/PropertyCard";

async function fetchProperties(){
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
    if(!res.ok) {
      throw new Error('Failed to fetch properties');
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  // sort properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
