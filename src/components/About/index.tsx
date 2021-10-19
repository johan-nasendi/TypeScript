import React from 'react'
import Navbar from '../Navbar'
import Icon from '../../images/tsx.png'
const About = () => {

    let photStyle = {
        height : '30vh',
    }

    return (
        <>
        <Navbar/>
        <div className="px-4 py-5 my-5 text-center shadow">
            <img className="d-block mx-auto mb-4" src={Icon} alt="" width="100" height="90" />
            <h1 className="display-5 fw-bold">TypeScript</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
                TypeScript adds additional syntax to JavaScript to support a tighter 
                integration with your editor. Catch errors early in your editor.
            </p>
            <p className="lead mb-4">
            TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: 
            In a browser, on Node.js or Deno and in your apps.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a href="https://www.typescriptlang.org/id/docs/handbook/react.html" target="_blank" className="btn btn-outline-secondary btn-lg px-4">Learn More</a>
            </div>
            </div>
        </div>
        </>

    )
}

export default About
