export class MessageModel {
  constructor({ author, body, date }) {
    this.author = author;
    this.body = body;
    this.date = date;
  }

  static fromJson({ json }) {
    const jsonData = JSON.parse(json);

    return new MessageModel({
      author: jsonData.author,
      body: jsonData.body,
      date: jsonData.date,
    });
  }
}
