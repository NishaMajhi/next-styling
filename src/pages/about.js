import styles from '../styles/about.module.css'

export default function aboutUsPage() {
    return (
        <>
            <div className={styles.highlight}>
                <p>This is About Page</p>
            </div>

            <button className='btn btn-primary'>primary</button>
        </>
    )
}