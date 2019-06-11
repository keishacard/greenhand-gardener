const remoteURL = "http://localhost:5002"

export default {
    getUser(id) {
        return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
    },
    getAllUsers() {
        return fetch(`${remoteURL}/users`).then(e => e.json())
    },
    postNewUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(e => e.json())
    },
    getGarden(id) {
        return fetch(`${remoteURL}/gardens/${id}`).then(e => e.json())
    },
    getAllGardens() {
        return fetch(`${remoteURL}/gardens`).then(e => e.json())
    }
}