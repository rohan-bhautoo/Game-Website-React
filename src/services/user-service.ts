import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  addUser(newUser: User) {
    return apiClient.post("/users", newUser);
  }

  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }

  updateUser(updatedUser: User) {
    return apiClient.put("/users/" + user.id, updatedUser);
  }
}

export default new UserService();
