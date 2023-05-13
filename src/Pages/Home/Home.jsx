import Banner from "../../Components/Banner";
import Cards from "../../Components/Cards";
import FooterSection from "../../Components/FooterSection";
import JoinConversation from "../../Components/JoinConversation";
import NftContent from "../../Components/NftContent";
import NftMarket from "../../Components/NftMarket";
import NftRights from "../../Components/NftRights";

const Home = () => {
    return (
        <div>
            <Banner/>
            <NftContent/>
            <Cards/>
            <NftRights/>
            <NftMarket/>
            <JoinConversation/>
            <FooterSection/>
        </div>
    );
};

export default Home;