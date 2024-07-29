import api from "api/axios";

const exampleModuleApi = {
  postModuleExample: async (email: string, password: string) => {
    try {
      const response = await api.post("auth/login/", {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default exampleModuleApi;
