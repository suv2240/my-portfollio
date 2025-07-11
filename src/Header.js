import React from 'react'

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div id='header_section'>
            <div id='logo_section'>
                <h1 id='logo_name'>Suvankar</h1>

            </div>
            <div id='nav_section'>
                {[{ label: "About", id: "about_section" },
                { label: "Skills", id: "skills_section" },
                { label: "Projects", id: "projects_section" },
                { label: "Contact Me", id: "contact_section" }].map(({ label, id }) =>
                (<button key={id} className='btn' onClick={() => scrollToSection(id)}>
                    {label}
                </button>)
                )
                }

            </div>
        </div>
    )
}

export default Header