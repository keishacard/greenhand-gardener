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
    },

    getGardenPlants(gardenId) {
        return fetch(`${remoteURL}/gardenPlants`)
    },

    editGardens(editedGardens) {
        return fetch(`${remoteURL}/gardens/${editedGardens.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedGardens)
        }).then(e => e.json());
    },

    postNewGardens() {

    },

    deleteGardens() {

    },

    getFriend(id) {

    },

    getAllFriends() {

    },

    getFriendGardens() {

    }

}