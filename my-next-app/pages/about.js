import React from 'react'
import styles from '../styles/Home.module.css'

const About = () => {
    return (

        //Dummy content below
        <div className={styles.about}>
            <h1>What is Next.js?</h1>
            <p>Next.js is a flexible <strong>React framework</strong> that gives you building blocks to create fast <strong>web applications</strong>.</p>
            <p>But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.</p><h3>Building Blocks of a Web Application</h3>
            <p>There are a few things you need to consider when building modern applications. Such as:</p>
            <ul>
                <li><strong>User Interface</strong> - how users will consume and interact with your application.</li>
                <li><strong>Routing</strong> - how users navigate between different parts of your application.</li>
                <li><strong>Data Fetching</strong> - where your data lives and how to get it.</li>
                <li><strong>Rendering</strong> - when and where you render static or dynamic content.</li>
                <li><strong>Integrations</strong> - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.</li>
                <li><strong>Infrastructure</strong> - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).</li>Home (KR Tiles & Sanitary)
                <li><strong>Performance</strong> - how to optimize your application for end-users.</li>
                <li><strong>Scalability</strong> - how your application adapts as your team, data, and traffic grow.</li>
                <li><strong>Developer Experience</strong> - your team’s experience building and maintaining your application.</li>
            </ul>
            <p>For each part of your application, you will need to decide whether you will build a solution yourself or use other tools such as libraries and frameworks.</p>
            <h3 >What is React?</h3>
            <p><a rel="noopener noreferrer" target="_blank" href="https://beta.reactjs.org/">React</a> is a JavaScript <strong>library</strong> for building interactive <strong>user interfaces</strong>.</p>
            <p>By user interfaces, we mean the elements that users see and interact with on-screen.</p>
            <img src='./img1.PNG' />
            <p>By library, we mean React provides helpful functions to build UI, but leaves it up to the developer where to use those functions in their application.</p>
            <p>Part of React’s success is that it is relatively unopinionated about the other aspects of building applications. This has resulted in a flourishing ecosystem of third-party tools and solutions.</p>
            <p>It also means, however, that building a complete React application from the ground up requires some effort. Developers need to spend time configuring tools and reinventing solutions for common application requirements.</p>
            <h3>What is Next.js?</h3>
            <p>Next.js is a React <strong>framework</strong> that gives you building blocks to create web applications.</p>
            <p>By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</p>
            <img src='./img2.PNG' />
            <p>You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience.</p>
            <p>Whether you’re an individual developer or part of a larger team, you can leverage React and Next.js to build fully interactive, highly dynamic, and performant web applications.</p>
            <p>In the next lessons, we will discuss how you can get started with React and Next.js.</p>
        </div>

    )
}
export default About
