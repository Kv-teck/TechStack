import { Link } from "react-router-dom";

const HomeFeature = (features) => {
    const list = features.list;
    return (
        <div className="container-fluid bg-light bg-icon my-5 py-6">
            <div className="container">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <h1 className="display-5 mb-3">Our Features</h1>
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    {
                        list.map((item, key) => {
                            return (
                                <div key={key} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                                        <img className="img-fluid mb-4" src={item.icon} alt="" />
                                        <h4 className="mb-3">{item.label}</h4>
                                        <p className="mb-4">{item.text}</p>
                                        <Link to="" className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" >Read More</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default HomeFeature;