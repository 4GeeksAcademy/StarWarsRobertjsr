export const Footer = () => {
    return (
        <footer className="footer-bar">
            <div className="footer-section footer-copyright">
                <span>Copyright ⓒ {new Date().getFullYear()} Robert.jsr</span>
            </div>
            <div className="footer-section">
                <span className="footer-social-label">Follow me</span>
                <div className="footer-social-icons">
                    <a href="https://www.instagram.com/robert.jsr/" target="_blank" rel="noopener noreferrer" className="btn" aria-label="Instagram">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://x.com/robert_jsr" target="_blank" rel="noopener noreferrer" className="btn" aria-label="Twitter X">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}