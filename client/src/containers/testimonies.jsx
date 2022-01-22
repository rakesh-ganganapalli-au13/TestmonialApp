import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './styles.css'

function Testimonials() {

    const [testmonies,setTestmonies] = useState([])

    useEffect(()=>{

        axios.get('https://testmonial-test.herokuapp.com/api')
        .then(res=>{
            setTestmonies(res.data.message)
            console.log(res.data)
        })

    },[])

  return <>
    <section id="testimonial" className="pricing-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-title text-center pb-10">
                    <h4 className="title">Our Testimonies</h4>
                  </div> {/* section title */}
                </div>
              </div> {/* row */}
              <div className="row justify-content-center">

                  {testmonies.length?testmonies.map((i,idx)=>{

                      return ( 
                        <div key={idx} className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single-pricing mt-40">
                          <div className="pricing-header text-center">
                            <h5 className="sub-title">Testimonial info</h5>
                          </div>

                          <div className="pricing-list">
                            <ul>
                              <li>
                                  <label>name :</label>
                                  <span> {i.name} </span>
                                </li>
                               <li>
                                  <label>post :</label>  
                                  <span>{i.post}</span>
                               </li>
                               <li>
                                  <label>Description :</label>  
                                  <span>{i.description}</span>
                                </li>
                                <li>
                                  <label>profile :</label>  
                                  <img  src={i.photo} width="30px" height="30px" alt="my-pic" className="lni-check-mark-circle" />
                                </li>
                                <li>
                                  <label>createdAt :</label>  
                                  <span>{i.createdAt}</span>
                                </li>

                                <li>
                                  <label>updatedAt :</label>  
                                  <span>{i.updatedAt}</span>

                                </li>
                    
                            </ul>
                          </div>
                         
                          <div className="buttom-shape">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 112.35"><defs><style dangerouslySetInnerHTML={{__html: ".color-1{fill:#2bdbdc;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}" }} /></defs><title>bottom-part1</title><g id="bottom-part"><g id="Group_747" data-name="Group 747"><path id="Path_294" data-name="Path 294" className="cls-1 color-1" d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z" transform="translate(0 0)" /><path id="Path_297" data-name="Path 297" className="cls-2 color-1" d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z" transform="translate(0 0)" /><path id="Path_296" data-name="Path 296" className="cls-3 color-1" d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z" transform="translate(0 0)" /><path id="Path_295" data-name="Path 295" className="cls-4 color-1" d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z" transform="translate(0 0)" /></g></g></svg>
                          </div>
                        </div> {/* single pricing */}
                       </div>
                      )

                  }):<h3>No testimonies found</h3>}

               
              </div> {/* row */}
            </div> {/* conteiner */}
    </section>
  </>;
}

export default Testimonials;
