import modalStyles from './modal.module.css'

export default function Terms() {

    return (
        <div className={modalStyles.terms}>
            <h2 className={modalStyles.heading}>RetroGram Terms and Conditions</h2>
            <p>Hello, </p> <br />
            <p>
                Thank you for agreeing to share your story on RetroGram. RetroGram wishes to post your story on our web platform and share it to the world to see. Here are a few things to note:
            </p> <br />
            <ul style={{ listStyle: 'none', textAlign: 'justify' }}>
                <li>- RetroGram is completely open-source and free for everyone to access. There are no paid services or
                hidden subscription or viewership fees.</li> <br />

                <li>- RetroGram does not own rights to your content and as well will not be liable for how your content is used
                outside the RetroGram platform.</li> <br />

                <li>- You own complete rights to your content and can at any time request by email for us to either edit,
                modify or delete it and other components (e.g comments) attached to your story.</li> <br />

                <li>- If you grant us (RetroGram) permission to post your story, we will make sure to clearly identify you as the
                source of the information.</li> <br />

                <li className={modalStyles.list}>- All the terms stated above will remain the same for the duration of which RetroGram will be live on the
                internet. If they at any point change we will email you prior to the changes being made.</li>
            </ul>
        </div>
    );
}