const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (endpoint, options = {}) => {
  const defaultOptions = {
    method: "GET",
    cache: "no-store", // 'no-store' yerine 'default' kullanılabilir
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
      // API'den dönen hata detayını loglama
      const errorDetail = await res.text();
      throw new Error(`Error: ${res.status} ${res.statusText} - ${errorDetail}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error.message);
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
      // Hata detaylarını yakalamak
      const errorDetail = await res.text();
      throw new Error(`Error: ${res.status} ${res.statusText} - ${errorDetail}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Post error:", error.message);
    throw error;
  }
};

const createInquri = async (inquriData) => {
  try {
    const data = await postData("/inquiries", inquriData);
    return data.data;
  } catch (error) {
    console.error("Inquiry creation failed:", error.message);
    throw error;
  }
};

export { fetchData, postData, createInquri };
