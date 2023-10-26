import BodyContent from '../../components/bodyContent/bodyContent';
import SideBar from '../../components/sideBar/sideBar';
import './home.scss';

function Home() {

    return (
        <div className="home-layout">
            <SideBar />
            <BodyContent />
        </div>
    )
}

export default Home;