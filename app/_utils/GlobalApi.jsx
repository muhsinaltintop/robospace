const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (endpoint, options = {}) => {
  const defaultOptions = {
    cache: "no-store", // 'no-store' yerine 'default' kullanmayı düşünebilirsiniz
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const finalOptions = { ...defaultOptions, ...options };
  const url = `${BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, finalOptions);
    if (!res.ok) {
      // API'den dönen hata mesajını loglayın
      const errorDetail = await res.text(); 
      throw new Error(`Error: ${res.status} ${res.statusText} - ${errorDetail}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

// const getLogo = async () => {
//   try {
//     const data = await fetchData("/logos?populate=*");
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching logo:", error);
//     throw error;
//   }
// };

// const getSlide = async () => {
//   try {
//     const data = await fetchData("/sliders?populate=*");
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching slide:", error);
//     throw error;
//   }
// };

// const getProperty = async () => {
//   try {
//     const data = await fetchData("/properties?populate=*");
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching property:", error);
//     throw error;
//   }
// };

// const getSingleProperty = async (id) => {
//   try {
//     const data = await fetchData(`/properties/${id}?populate=*`);
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching single property:", error);
//     throw error;
//   }
// };

// const getService = async () => {
//   try {
//     const data = await fetchData(`/services?populate=*`);
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching single property:", error);
//     throw error;
//   }
// };


// const getMenu = async () => {
//   try {
//     const data = await fetchData(`/menus?populate=*`);
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching single property:", error);
//     throw error;
//   }
// };

// const getBlogs = async () => {
//   try {
//     const data = await fetchData(`/blogs?populate=*`);
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching single property:", error);
//     throw error;
//   }
// };

// const getSingleBlog = async (blogTitle) => {
//   try {
//     const data = await fetchData(`/blogs?filters[title][$eqi]=${blogTitle}&populate=*`);
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching single property:", error);
//     throw error;
//   }
// };

// const getPartners = async () => {
//   try {
//     const data = await fetchData(`/partners?populate=*`);
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching single property:", error);
//     throw error;
//   }
// };

console.log("BASE_URL:", BASE_URL);
const postData = async (endpoint, data, options = {}) => {
  const defaultOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data),
  };

  

  const finalOptions = { ...defaultOptions, ...options };
  const url = `${BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, finalOptions);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Post error:", error);
    throw error;
  }
};
const createInquri = async (inquriData) => {
  const data = await postData("/inquries", inquriData);
  console.log(inquriData);
  
  return data.data;
};

export { createInquri };