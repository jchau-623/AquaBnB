
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
                <div className="techs">
                        <span>React</span>
                        <span>Redux</span>
                        <span>Express</span>
                        <span>CSS</span>
                        <span>PostgreSQL</span>
                        <span>HTML5</span>
                        <span>JavaScript</span>
                    </div>
                    <div className="my-details">
                        <div>App Academy</div>
                        <div>Justin Chau</div>
                        <a
                            href="https://github.com/jchau-623"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>

        </div>
    );
}

export default Footer;
