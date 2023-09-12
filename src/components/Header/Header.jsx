
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 mx-4 border-b-2'>
            <h1 className='text-4xl font-bold '>Knowlegde Cafe</h1>
            <img src={profile} alt="" srcset="" />
        </header>
    );
};

export default Header;