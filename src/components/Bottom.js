import React from 'react'
import './Bottom.css';

const Bottom = () => {
    return (
<div className='footer_section section__padding'>
    <div className='leftside'>
    <h2 className='navbar_logo gradient__text'>AlgoMind</h2>
    <h4>Master DSA, land your dream</h4>
    </div>
    <div className='rightside'>
            <div className="footer-div">
                <a href="/" className="footer-element">Home</a>
                <a href="/" className="footer-element">About Us</a>
                <a href="/" className="footer-element">Testimonials</a>
                <a href="/" className="footer-element">github</a>
                <a href="/" className="footer-element">Contact Us</a>
            </div>
            <div className="footer-div">
                <a href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/" target='blank' className="footer-element">Resources</a>
                <a href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA" target='blank' className="footer-element">DSA tutorials</a>
                <a href="https://www.linkedin.com/jobs/data-structures-jobs/?currentJobId=3542166077&originalSubdomain=in" target='blank' className="footer-element">Carrers</a>
                <a href="/" className="footer-element">Social media</a>
            </div>
            <div className="footer-div">
                <a href="https://leetcode.com/" target='blank' className="footer-element">Leetcode</a>
                <a href="https://www.hackerrank.com/" target='blank' className="footer-element">Hackerrank</a>
                <a href="https://www.codechef.com/" target='blank' className="footer-element">Codechef</a>
                <a href="https://codeforces.com/" target='blank' className="footer-element">Codeforce</a>
            </div>
    </div>
</div>
)
}
export default Bottom