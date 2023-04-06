import "./Catagory.scss"
import Product from "../Product"
import { FcNext } from 'react-icons/fc'

const index = () => {
    return (
        <div style={{ width: '100%', height: 'auto' }}>
            <div className="container">
                <div style={{ float: "left" }}>Clothes</div>
                <div style={{ float: "right" }}><span>View All <FcNext size={20} /></span></div>
            </div>


            <div className="row flex-nowrap overflow-auto">
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
                <div className="col"><Product /></div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>






    )
}

export default index