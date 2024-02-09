//Function      :Navbar
//Description   :This UI element is for the 
export default function Navbar()
{
    return <nav className="nav">
        <a href="/" className="site-title">Site Name</a> 
        <ul>
            <il>
                <a href="/Pricing">Pricing</a>
            </il>
            <il>   
                <a href="/about">About</a>
            </il>
            <il>
                <a href="/Here">Here</a>
            </il>
        </ul>
    </nav>
}