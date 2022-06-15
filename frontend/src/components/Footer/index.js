
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
                <div>© 2022 AquaBnb by Justin Chau</div>
                <a
                    href="https://github.com/jchau-623"
                    target="_blank"
                    rel="noreferrer"
                    className="fa-brands fa-github"
                >
                </a>
                <a
                    href="https://www.linkedin.com/in/justin-chau-1123a9142/"
                    target="_blank"
                    rel="noreferrer"
                    className="fa-brands fa-linkedin"
                >
                </a>
            </div>

        </div>
    );
}

export default Footer;
