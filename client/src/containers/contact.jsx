import React from 'react';

function Contact() {

  return <>
    <section id="contact" className="contact-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-title text-center pb-10">
                    <h4 className="title">Get In touch</h4>
                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                  </div> {/* section title */}
                </div>
              </div> {/* row */}
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="contact-form">
                    <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="single-form form-group">
                            <input type="text" name="name" placeholder="Your Name" data-error="Name is required." required="required" />
                            <div className="help-block with-errors" />
                          </div> {/* single form */}
                        </div>
                        <div className="col-md-6">
                          <div className="single-form form-group">
                            <input type="email" name="email" placeholder="Your Email" data-error="Valid email is required." required="required" />
                            <div className="help-block with-errors" />
                          </div> {/* single form */}
                        </div>
                        <div className="col-md-6">
                          <div className="single-form form-group">
                            <input type="text" name="subject" placeholder="Subject" data-error="Subject is required." required="required" />
                            <div className="help-block with-errors" />
                          </div> {/* single form */}
                        </div>
                        <div className="col-md-6">
                          <div className="single-form form-group">
                            <input type="text" name="phone" placeholder="Phone" data-error="Phone is required." required="required" />
                            <div className="help-block with-errors" />
                          </div> {/* single form */}
                        </div>
                        <div className="col-md-12">
                          <div className="single-form form-group">
                            <textarea placeholder="Your Mesaage" name="message" data-error="Please, leave us a message." required="required" defaultValue={""} />
                            <div className="help-block with-errors" />
                          </div> {/* single form */}
                        </div>
                        <p className="form-message" />
                        <div className="col-md-12">
                          <div className="single-form form-group text-center">
                            <button type="submit" className="main-btn">send message</button>
                          </div> {/* single form */}
                        </div>
                      </div> {/* row */}
                    </form>
                  </div> {/* row */}
                </div>
              </div> {/* row */}
            </div> {/* conteiner */}
    </section>
  </>;
  
}

export default Contact;
