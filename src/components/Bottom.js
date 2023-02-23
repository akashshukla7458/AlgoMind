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
                <a href="#" className="footer-element">Home</a>
                <a href="#" className="footer-element">About Us</a>
                <a href="#" className="footer-element">Testimonials</a>
                <a href="#" className="footer-element">github</a>
                <a href="#" className="footer-element">Contact Us</a>
            </div>
            <div className="footer-div">
                <a href="#" className="footer-element">Sign In</a>
                <a href="#" className="footer-element">Sign Up</a>
                <a href="#" className="footer-element">Questions</a>
                <a href="#" className="footer-element">Solutions</a>
            </div>
            <div className="footer-div">
                <a href="https://leetcode.com/" className="footer-element">Leetcode</a>
                <a href="https://codeforces.com/" className="footer-element">Hackerrank</a>
                <a href="https://www.codechef.com/" className="footer-element">Codechef</a>
                <a href="https://www.hackerrank.com/" className="footer-element">Codeforce</a>
            </div>
    </div>
</div>
)
}
export default Bottom