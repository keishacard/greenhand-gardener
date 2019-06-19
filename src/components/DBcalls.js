const remoteURL = "http://localhost:5002"

export default {
    checkUserLogin(email) {
        return fetch(`${remoteURL}/users?email=${email}`).then(res => res.json())
    },


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
        return fetch(`${remoteURL}/gardenPlants?gardenId=${gardenId}&_expand=plant&_expand=garden`).then(res => res.json())
    },

    getAllGardenPlants() {
        return fetch(`${remoteURL}/gardenPlants`).then(res => res.json())
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

    postUserGarden(userId, gardenObj) {
        return fetch(`${remoteURL}/userGardens`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: parseInt(userId),
                garden: gardenObj
            })
        }).then(res => res.json())
    },

    getUserGardens(userId) {
        return fetch(`${remoteURL}/userGardens?userId=${userId}`).then(res => res.json())
    },

    getUserGarden(userGardenId) {
        return fetch(`${remoteURL}/userGardens/${userGardenId}`).then(res => res.json())
    },

    postEditedUserGarden(gardenObj, userGardenId) {
        return fetch(`${remoteURL}/userGardens/${userGardenId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gardenObj)
        }).then(res => res.json())
    },

    deleteUserGarden(userId, userGardenId) {
        return fetch(`${remoteURL}/userGardens/${userGardenId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => e.json())
    },

    getFriend(id) {

    },

    getAllFriends() {

    },

    getFriendGardens() {

    }

}