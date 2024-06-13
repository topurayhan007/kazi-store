import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const createOrder = async (orderDetails) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/orders/create/`,
      orderDetails
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to create order.");
    }
  } catch (error) {
    console.error("Failed to create order:", error);
    throw new Error("Failed to create order");
  }
};

export default { createOrder };

// CRUD Examples
/* const room = async (stateToken) => {
  const response = await axios.get(`${baseUrl}/room/`, {
    headers: {
      Authorization: `Bearer ${stateToken}`,
    },
  });
  return response.data;
};

const addRoom = async (data, token) => {
  const response = await axios.post(
    `${baseUrl}/room/`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

const editRoom = async (id, data, token) => {
  const response = await axios.put(
    `${baseUrl}/room/${id}/`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const removeRoom = async (id, token) => {
  const response = await axios.delete(
    `${baseUrl}/room/${id}/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
 */
