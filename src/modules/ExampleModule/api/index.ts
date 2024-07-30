import api from "api/axios";

const exampleModuleApi = {
  postModuleExample: async (email: string, password: string) => {
    try {
      const response = await api.post("auth/login/", {
        email,
        password,
      });

      return response.data as { example: string };
    } catch (error) {
      throw error;
    }
  },
};

export default exampleModuleApi;
