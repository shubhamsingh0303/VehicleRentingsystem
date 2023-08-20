import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
        
                {/* Footer */}
                <footer className="text-center text-lg-start text-dark">
                    <div className="container p-4 pb-0">
                        <hr className="my-3" />
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-start">
                                    {/* eslint-disable-next-line*/}
                                    <a className="m-1 text-decoration-none text-dark fs-5" href='https://getbootstrap.com' target="_blank">Policy</a>
                                    {/* eslint-disable-next-line*/}
                                    <a className="m-1 text-decoration-none text-dark fs-5" href='https://www.cdac.in/index.aspx?id=CH' target="_blank">about us</a>
                                </div>
                                    {/* eslint-disable-next-line*/}
                                <div className="col-md-7 col-lg-8 text-md-end"> 
                                    <div className="p-3 fs-5">
                                    {/* eslint-disable-next-line*/}
                                        © Copyright :<a className="text-dark fs-5" href="https://github.com/shubhamsingh0303/shubhamsingh0303" target="_blank"> Made by Shubham Singh</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Section: Copyright */}
                    </div>
                   
                </footer>
                {/* Footer */}
      

        </Fragment>
    )
}

export default Footer
