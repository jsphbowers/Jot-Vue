import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class NoteService {
  async getNotes(userId) {
    const res = await api.get(`api/notes/${userId}`)
    logger.log(res.data, "THE USERS NOTES")
  }
}

export const notesService = new NoteService();