import Link from 'next/link'
import styles from '../components/layout.module.css'
import termStyles from './terms.module.css'

export default function Terms() {

    return (
        <div className={termStyles.container}>
            <h2 className={termStyles.heading}>RetroGram Terms and Conditions</h2>
            <p>Hello, <br></br>
            <br></br>
            Thank you for agreeing to share your story on RetroGram. RetroGram wishes to post your story on our web platform and share it to the world to see. Here are a few things to note: </p><br></br>
            <ul style={{ listStyle: 'none' }}>
                <li>- RetroGram is completely open-source and free for everyone to access. There are no paid services or
                hidden subscription or viewership fees.</li><br></br>

                <li>- RetroGram does not own rights to your content and as well will not be liable for how your content is used
                outside the RetroGram platform.</li><br></br>

                <li>- You own complete rights to your content and can at any time request by email for us to either edit,
                modify or delete it and other components (e.g comments) attached to your story.</li><br></br>

                <li>- If you grant us (RetroGram) permission to post your story, we will make sure to clearly identify you as the
                source of the information.</li><br></br>

                <li>- All the terms stated above will remain the same for the duration of which RetroGram will be live on the
                internet. If they at any point change we will email you prior to the changes being made.</li>
            </ul>
            <div className={styles.backToHome}>
                <Link href="/add-story">
                    <a>← Back to form</a>
                </Link>
            </div>
        </div>
    )
}