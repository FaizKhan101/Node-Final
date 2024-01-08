const { ObjectId } = require("mongodb");
const db = require("../util/database")

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }

    save() {
        return db.getDb().collection("users").insertOne(this)
    }

    static findById(userId) {
        return db.getDb().collection("users").findOne({ _id: new ObjectId(userId) })
    }
}

module.exports = User;