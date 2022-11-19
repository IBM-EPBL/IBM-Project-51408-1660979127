import Sidebar from "../components/Sidebar";
import "./home.scss"
import "./Cards.css"


const DashboardHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer text-center">
        <div class>
          <h1 className="text-xl font-Mont md:text-2xl lg:text-4xl mt-5">Welcome to your Dashboard!</h1>
          <br />
          <h3 className="font-mono text-md text-center lg:text-left md:text-left ml-3">Check out your email. Your results have been sent there.</h3>
          <br />
          <br />
          <h3 className="font-Mont text-sm md:text-md lg:text-xl text-center font-bold lg:text-left md:text-left ml-3">Here you can check out different kind of visualizations to get a general idea about the factors increasing causes of getting a cardiac arrest.</h3>
          <br />
          <h3 className="font-Mont text-sm md:text-md lg:text-xl text-center lg:text-left md:text-left ml-3">The visualizations have been made with the help of Tableau</h3>
          <br />
        </div>
        <div className="row">
          <div className="px-5">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <h2 className="text-left"><i className="fa fa-cart-plus f-left"></i><span>85%</span></h2>
                <p className="text-sm">Accuracy</p>
              </div>
            </div>
          </div>

          <div className="px-5">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <h2 className="text-left"><i className="fa fa-cart-plus f-left"></i><span>5</span></h2>
                <p className="text-sm">Visualization Types</p>
              </div>
            </div>
          </div>

          <div className="px-5">
            <div className="card bg-c-yellow order-card">
              <div className="card-block">
                <h2 className="text-left text-xs"><i className="fa fa-cart-plus f-left"></i><span>Random Forest Classifier</span></h2>
                <p className="text-sm">ML Model</p>
              </div>
            </div>
          </div>

          {/* <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
              <div class="card-block">
                <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>486</span></h2>
                <p class="m-b-0">Completed Orders</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
