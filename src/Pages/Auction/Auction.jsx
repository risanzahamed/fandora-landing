import AuctionBanner from "../../Components/AuctionBanner";
import CheckOutSlider from "../../Components/CheckOutSlider";
import MetaCreatorSlider from "../../Components/MetaCreatorSlider";
import Newsletter from "../../Components/Newsletter";

const Auction = () => {
    return (
        <div>
           <AuctionBanner/>
           <MetaCreatorSlider/>
           <CheckOutSlider/>
           <Newsletter/>
        </div>
    );
};

export default Auction;