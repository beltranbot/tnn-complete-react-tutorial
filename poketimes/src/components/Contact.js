import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        // when using react router
        // the router is automatically added to the props
        // of child components of the routes
        // props.history.push('/about')
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe similique maxime perspiciatis nihil aliquid cupiditate adipisci. Blanditiis, sit quaerat velit possimus doloribus illo mollitia, voluptatum ea voluptatibus exercitationem dolor.</p>
        </div>
    )
}

export default Contact