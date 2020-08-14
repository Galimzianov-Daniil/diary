import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCMBy1mkGcGh4oBdyW8WpysjonThUcxma4",
    authDomain: "timetable-b9e47.firebaseapp.com",
    databaseURL: "https://timetable-b9e47.firebaseio.com",
    projectId: "timetable-b9e47",
    storageBucket: "timetable-b9e47.appspot.com",
    messagingSenderId: "730758476412",
    appId: "1:730758476412:web:b275af6da7c1a708914ff9"
};

class Firebase {

    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.db = firebase.database();
    }

    getUserData = async () => {
        return new Promise(resolve => {
            firebase.auth().onAuthStateChanged(user => {
                resolve(user)
            })
        })
    }

    login = async (email, password) => {
        return await this.auth.signInWithEmailAndPassword(email, password)
    }

    createUser = async (email, password) => {
        return await this.auth.createUserWithEmailAndPassword(email, password)
    }

    signOut = () => this.auth.signOut();

    createTask = (title = "", time = "", date = "", uid) => {
        const task = this.db.ref(`users/${uid}/`).push();
        return task.set({ title, time, date })
    }

    observeTasks = (callback, uid) => {
        return new Promise(resolve => {
            const tasks = this.db.ref("users/" + uid);
            tasks.on("value", snapshot => {
                const serializedTasksList = [];
                const snapshotValue = snapshot.val();

                for (let key in snapshotValue) {
                    serializedTasksList.push({
                        ...snapshotValue[key],
                        id: key
                    })
                }

                callback(serializedTasksList)
                resolve();
            })
        })
    }

    completeTask = (taskKey, uid) => {
        const task = this.db.ref(`users/${uid}/${taskKey}`);
        task.remove().catch((error) => alert(error))
    }

    updateTask = (title = "", time = "", date = "", taskKey, uid) => {
        const task = this.db.ref(`users/${uid}/${taskKey}`);
        return task.update({ title, time, date })
    }

}

export default new Firebase();
