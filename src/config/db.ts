import mongoose from 'mongoose'

class Database {
  constructor() {
    this.mongo()
  }

  mongo() {
    mongoose.connect(`${process.env.MONGO_URL}`, () => {
      console.log('db connected')
    })
  }
}

export default new Database()
