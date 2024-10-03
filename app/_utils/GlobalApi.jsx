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
  const data = await postData("/inquiries", inquriData);
  
  return data.data;
};

export { createInquri };