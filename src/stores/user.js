import { defineStore } from "pinia";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

import {auth,db,userCollection} from '@/includes/firebase'

export default defineStore("user",{

    state : () => ({
        userLoggedIn : false
    }),
    actions: {
        async register(values) {
            let userCred = await  createUserWithEmailAndPassword(auth, values.email, values.password);
             await setDoc(doc(db, "users", userCred.user.uid),{
                name: values.name,
                email: values.email,
                age: values.age,
                country: values.country
            });

            await updateProfile(userCred.user,{
                displayName:values.name
            });
            this.userLoggedIn = true;
        },
        async loginUser(values) {

            await signInWithEmailAndPassword(auth,values.email,values.password);

            this.userLoggedIn = true;
        },

        async signOut() {

            await signOut(auth);

            this.userLoggedIn = false;
        }
    }
});
