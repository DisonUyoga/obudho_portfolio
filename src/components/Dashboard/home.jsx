import { useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';


const Home = () => {
    const form = useRef();
    const refModel = collection(db, 'firebase-course')

    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const github_url = form.current[2]?.value;
        const linkedIn_url = form.current[3]?.value;
        const image = form.current[4]?.files[0];
       

        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    console.log(downloadUrl)
                    savePortfolio({
                        name,
                        description,
                        github_url,
                        linkedIn_url,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error);
                    savePortfolio({
                        name,
                        description,
                        github_url,
                        linkedIn_url,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error);
                savePortfolio({
                    name,
                    description,
                    github_url,
                    linkedIn_url,
                    image: null
                })
            }
        )
    }

    const savePortfolio = async (portfolio) => {
        console.log(portfolio)
        try {
            await addDoc(refModel, portfolio);
            window.location.reload(false);
        } catch (error) {
            console.log(error)
            alert('Failed to add portfolio');
        }
    }

    return (
        <div className="dashboard">

            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="github_Url" /></p>
                <p><input type="text" placeholder="linkedIn_Url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </form>
        </div>
    )
}

export default Home;