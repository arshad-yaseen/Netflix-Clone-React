import React,{useEffect} from 'react';
import './Favourites.css'

function Favourites(props) {
    

  return (
      <div>
          <div className="main-wrapper">
              <div className="sections">
                  <img className="poster-image" src="https://i.postimg.cc/FH0bR8mY/Minnal-Murali-Poster.jpg" alt="" />

                  <h1 className="favo-movie-title" >Minnal Murali</h1>
                  
                  <div className="description-wrapper">
                  <p className="description" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nulla dicta earum, eum sapiente iusto illo, dolor consectetur praesentium eius natus inventore et cumque voluptas amet! Numquam nulla repudiandae illo, delectus, adipisci blanditiis ratione mollitia, tempore est fugiat deleniti. Libero inventore et, nobis sed, laboriosam possimus asperiores omnis quis eaque debitis ducimus illum aliquid, officia maxime beatae. Accusamus earum rem non quaerat, deserunt, quae ullam omnis deleniti quod iste atque amet quia fugiat in itaque minus reiciendis, illo doloremque eos ducimus quas commodi? Exercitationem laboriosam laudantium voluptatem culpa ducimus impedit.</p>
                  </div>
                  <i class="fas fa-star ratings-icon"></i>
                  <span className="ratings" >4.7</span>
                  <button onClick={()=>{

                  }} className="more-info-button" >More Info</button>
                  <i class="fas fa-times close-icon"></i>
              </div>
          </div>
      </div>
  )
}

export default Favourites;
