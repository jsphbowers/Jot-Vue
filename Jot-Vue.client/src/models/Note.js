export class Note {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.creator = data.creator
    this.color = data.color
    this.category = data.category
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)

  }
}