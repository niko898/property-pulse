const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// get all 
async function fetchProperties() {
  try {
    if(!apiDomain) {
        return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// fetch single item

async function fetchProperty(id) {
  try {
    if(!apiDomain) {
        return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    
    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return res.json();

  } catch (error) {
    console.error(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
