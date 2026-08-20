import "../Styles/About.css";

export default function About() {
    return (
        <div className="about">
            <div className="about-card">
                <h1>About This Application</h1>
                <p>
                    This Weather App is a multi-page React project built to show live
                    weather data for cities around the world. It uses client-side
                    routing so users can move between pages instantly, without a full
                    page reload.
                </p>

                <div className="tech-stack">
                    <div className="tech-item">
                        <span className="tech-icon">⚛️</span>
                        <h3>React</h3>
                        <p>Component-based UI and state management with hooks.</p>
                    </div>
                    <div className="tech-item">
                        <span className="tech-icon">🧭</span>
                        <h3>React Router</h3>
                        <p>Client-side navigation between Home, About, and Contact.</p>
                    </div>
                    <div className="tech-item">
                        <span className="tech-icon">🌐</span>
                        <h3>Axios</h3>
                        <p>Fetches live weather data from the OpenWeatherMap API.</p>
                    </div>
                    <div className="tech-item">
                        <span className="tech-icon">💾</span>
                        <h3>Local Storage</h3>
                        <p>Remembers the user's temperature unit across sessions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}