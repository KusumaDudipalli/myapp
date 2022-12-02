import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Pages/dashboard';
import Contacts from '../Pages/contacts';
// import AddUser from '../Pages/adduser';
// import AddReport from '../Pages/addreport';
import Toys from '../Pages/toys';
import Electronics from '../Pages/electronics';
// import Cart from '../Pages/cart';
import './leftsidenav.css';


export default function Leftsidenavuser(){
    
        function Showleftmenu() {
        document.getElementById("left-dropdown-content").style.display = "block";
        }
    
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            console.log(event.target.className);
        if ((!event.target.matches('.active')) && (!event.target.matches('.left-dropdown-content')) && (!event.target.matches('#menu')) && (!event.target.matches('#leftsidenav'))) {
            document.getElementById("left-dropdown-content").style.display = "none";   
        }
        
        if (!event.target.matches('.unbtn')) {
            document.getElementById("dropdown-content").style.display = "none";    
        }
        }
    

    return (
    <div id = "leftsidenav" className = "parent">
		{/* <button onClick={Showleftmenu}> */}
        <img id="menu" alt="" align="right" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADMzMyhoaFiYmLu7u5FRUUoKCj7+/v8/Pzy8vL19fXn5+f4+Pjc3Nyampo6OjqysrLT09MzMzN9fX3IyMi6urqnp6cZGRlOTk5qamqFhYWUlJTBwcE0NDStra0kJCRxcXGCgoIPDw+NjY1KSkpbW1tvb28YGBhlZWU/Pz9ISTReAAALS0lEQVR4nOVd12LyOgymbLKAEvYepcD7P+ApLX+LZDmRHTuxOd8lbYKFbe1Rq9lGN47G20Y/bbZHnd3l+PZ2nO06m/li2Z8O6624Z30BFhFH9X46371lYnROp0lU9VI10Bqf5p1s2p4xaDbqcdVr5iOepArE/eG2Gle9dAbiZNXWoe4fmlOnT2yvrrd5eCuTqgmR4P1ggLwHkX33djJoXEyR94P2xCk5Ul+YJe8HS1dOa29YiLdkoVmvmrgvdPszW/TdMZhUTF9wskneNy7DCukL+9bpu2NT2T4qn8/LbjRotwed3VHxwWrO6porHnbz5XRSj5DaGST1YSNtc2mdl85XkzljWaPzaZ23svB9kmt/fCMNSiHsgfiQu6B2Oom63PeFyXSfrxBtbZIEMc77za/blvJLu0njI+e185J0uaCZuYxZqi+me5Psd7/1DdIhxSSTvH1RLSTIJvJmneN004yvn09CE9/RamTdyYaJr5AjybiBS4O3pJ6xkWcjP6MEch1m12AzTh6iDHZtzdkRS22kwdAwfXe0+lJ1wNJJjUay/bOlGwcrGYkLC7+olIda1f1Dme3SMS8aZVdwZdnZEMmuhmnjeEl/zb4ELaN+o7/b7NmhmfesJCfDVHJ8zH1DuCG/4WTuG3LQOtMnyNT7A5KJDkq12Iak5Pg08/IWSeCyZHcmvY1XE6+OSEWtAjdfg1rHvPh7I+q9zUoiYQl1mAqT2KJ20CATU0JIsfRmsXcGFBetMMpHqTiLIi+MiXMxqjQstCZILMJRCW1ibtM6Y+CdcNLqC+a9+DJjQlYbLcIBoOuFI2yX8tQYOWLCJacnvLbii0pxdeWDEP46Cta7+Jqp8bVq4iosbaYuoUNRESzR55yHvbC4s/I7xLiEQwTWaqJdrKqGiBavZT+lKkT1Zq30vOiUcYTJ/EHkqCqxkkB4OrW2Ul10BYXyQ+Fp4RIWVG+tIBCMAv5VFPxqbaeyd/4hEU7au+6Ts1LDr3yM8UI7TEexoG+7kpskQDD7l6zHhDNaZUJLDj51NkNwW7jHRv/QHaDFDhgPYT7atr7MIhD2I19uD/Ej7mV6AiivN8RCxuFL+AOsoeaJbuzqKeTmKQWC4M+2hlvovy+OSsJnYKk4yvxvrLFXnd3Jwh4tOstQx3a9i+qoiC5a9SzDHYgdIB6c0TuwrSc3ZesK2+0U8M5InTZI2HP0AzeAbQWZGYW30IcqpAew00WyiWgL/WAzP4gRhbTuhrfacXUNArmvL6TJjiyR6iMUSkABG0rZxFq6epZvpUAa+I34F6SRumwVUugh15vIJkO0zZ5toSD2RT6J/sG3LfwCilcLW4TUAmedT3IgtxQWGIjPqEdyqkcPknBEf0Z8hutaDVr2wVb/EQ3IEoZ/zDYifzE8q5Zo6eB4ZnpSkPkOBToyDFlGRcgpfTKDD94+QvsdmomoioIVMjZWuc3AjBU4Qf6MZ5HYg6tliQpJ1rAlsJYUQzKejymymzh8JijjCj6BpYFAXnN8OqawemPEieBgY9I2WMZqInumB73/rAAOkW1jFbw0AqjXHH4/R+KeJQwzS9gsgJcJAuNms9/PYS78jvUuIqHIKng6CNqrXyMeyhFm7pqsRsgOdsw4O3Tx/8p1+DJmFhyV6WkPXOc75Kb/UqTRgWO+i8zXtYVD/nJ+gFj841N4DfkutvLYKd81HcIHH7cXmoYK6Wu9yeHatI1rOlEpxVtQxEDtxCsnoghoB/+EP6EioJGo6RQgNYNvFgyZovtB32wE0KP2fSIhT3QuB1EV0Gr9ZjVn8SOfATfsrs4itdtzRoMv3d2uhKqcPzFDGSCrmQuf+OhGRAD03B0y0AyqqizNIKBJEOLKGLV0cCcBvWoJ/sB7VorV7Ak2Dr1npTiSOK314LGtenkGAA2oE4rx76pengHAUoorotBAaXT1ABR9IIo9S0+gAazBERL4LlRQFgbgLBd0LxUz2aJtwz62qvFoaF0glUapAu89r4OcKbTVimD3kEIoPVQyZoUccotQ+uVhVAw5zBSUNrHqyCZUdC1oISIdRyEd0VrzYBIqVl0mhfwDX+4WKqW/IAqh941/GMp16itxCGgtIQr5v5Sb8cNvwBCb9h4KtX+WocAD0R7q3kOyM49FKJh1mRQq8FKxr4FNqPiPEKfRlodivbdNqCSDIgr1dZrE8DSEDByVnCtIpymglwZlJQ0d1NJ595DCQrZFL6rbR6RaKg/DFK9oH4KM78v/wMZ/fT/N6/naYLLC9QX9pTB55vSCPm8o/6b/h7jF68eeXi5+CKP24f8hBvz6cfzXz8V4tXwayDm/3TuvnxMFt9VI/+gKgVqdfF+6189NfK38UqjRPDIttXOEk8OmYx+bVIX7fVLE6OZ579/KwoLtyIjhgXz8Npq5+vS8AjtgN32U0AI/Zfq9yTb31sAVYlAa/ros4G7wvFFxed7SO47MamBYgfjrOvSh7ol3smR1Tzq1a2VG8e/geXLh1fmrXdOpP3STQkjIUy2RRg2pk6dUWkOqUwfc5UzWNIcLa2ABjP4+1wHr1HJLRhRZAktaoObJYCqETj1+mRKf54tHRxF41XR6KtTyx62aArOXDAxLo9Z78I3MvhjJ6dy2jzN3xjqKSqPRJZq9Tb6usG2wV4LncaCchBfoT4POIe5P8wI9hlAOk8B9/e8ThZp9CbF/73t9oUQ7wpBHiRXebSLq7E3kPnnecw/dMqrnHm4b7VnSAup4RLaW8rr3JTLm6N6XPvcvxc2SJYq6xz1ocY8OmengbR9hzCWlkWxve0HjXFe59edpP2+cVZ+RE+5nT3akcmf2ZPezrz5yUGRfLh9nI2DukWO++zffIsT9G3P8jv7NKNmr8g7f5swInfHy1+vXrCDMODiOVaEYht1JrAL0cI0gSw8TZnY5LDKwoGD6l/yZuyYU0PHmronFkztHpaIQ/+LOzhPP6YeT8w/F8jm+I1vo8uxiLpgg6lXSf8W6NPcYqsBG1YpFPJglKwb31LyDYuTMMXNYmO2onIQvdoRwSkMVBKF6Dj7Rr9shEkUCNaJlRLKFM5O598LStNJiiYp7R2Zzi2PHNdWulfgiFwpOekSKhFp7lz+I/MqBkFSAx8cWuj6CDv51oyvOA0+ITKUCtb0x0ZZ8U2nYjRpY8Jn/mBwB1Xld99AbAJW2W4jAWq1Fpa9VpcHFBGMobhSQHT6uKh22jSEieIyJ2uxoRrxXrY2DGZAdcYwk/kTkyJyyJWOAAw5mjujj5SSJ7VK9NxPqJBVlMn8I6VkW5W1jSOhpb2aTKehc0l1Jt1GSU272F5bkkqYliP93yWww08ac4H97wLZsbImm4A/M6x2y4UA7my7xruyH7dgIGEWy2TkjW20KQmlt1cKOyhHTHO0LHzZoDBqkhLjDniUuOzNf+2jaFdc6yQe72UxloqyzfzgZvBrJXv49Z1ZxiTa6MtZ2R3NtxDwOtoTl/Qv7vqLMgWudQ1EloLv+zJo7eCtDV6R14D8iTwUWMd5nj1UsyzId51V1pRP1u9KLttk/3ZctWF7WRJxfEDRfrvnr6SbDNOvu/aBch3TCGSQ7uDbGuWQm69WZM4cvLT0QveYOIt0s+ttxIqyvlay3pzN3IO28klyCvmI59250a8/P53l7MFJ8clBVOkgo13FMYlNluktgfwjiseqgXrcv1Y9NoLLz+Yze0Fp79maF7nWIutSuKgJu7Wg5CBqG+2S0J+5lKb0fjE1bv/UdzWrt1VMDRN5WTp1OjDhZFeI7zamjuwcQT/S28rbyqNKq1hqf5gpkDpqNuodt1OKo3k/nObbk6JxOEx9OphzdOBpvG/202R51dpcvg+R42XU288WyPx3WW7F1mfAfKuupuOSq7QAAAAAASUVORK5CYII=" onClick={Showleftmenu} />
        {/* </button> */}
		<div id="left-dropdown-content" className="left-dropdown-content">
                    <Link to='/dashboard' className="active">Dashboard</Link>
                    <Link to='/contacts' className="active">Contact us</Link>
                    {/* <Link to='/adduser' className="active">Add User</Link>
                    <Link to='/addreport' className="active">Add Report</Link> */}
                    <Link to='/toys' className="active">Toys</Link>
                    <Link to='/electronics' className="active">Electronics</Link>
                    {/* <Link to='/cart' className="active">Cart</Link> */}
		</div>
	</div>
    )
}