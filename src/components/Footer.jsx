import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <footer>
            © {year} Sampath Kumar Naik
        </footer>
    )
}

export default Footer
