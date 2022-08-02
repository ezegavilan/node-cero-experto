const { v4: uuidv4 } = require('uuid');

class Task {
    id;
    description;
    completedAt;

    constructor(description) {
        this.id = uuidv4();
        this.description = description;
        this.completedAt = null;
    }

}

module.exports = Task;
