import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {AiFillTwitterCircle,AiOutlineCopyrightCircle} from 'react-icons/ai'
import {FaFacebookSquare,FaGithub,FaYoutube,FaMailBulk,FaLinkedin} from 'react-icons/fa'
function Footer(){
    return(
        <div class="d-flex flex-column">
        <footer className="page-footer font-small mt-5 bg-dark text-light ">  
            <div className="container-fluid ml-0 text-center text-md-left"> 
                <div className="row pt-3 pb-3">
                    <div className="col-md-8 mt-md-0 mt-3">
                        <h3 className='text-light text-center'><AiOutlineCopyrightCircle/> 2020 - 2021, All rights reserved.</h3>
                    </div> 
                    <hr className="clearfix w-100 d-md-none pb-3" /> 
                    <div className="col-md-4 mb-md-0 mb-3"> 
                    </div>
                </div> 
            </div> 
        </footer> 
    </div>
    )
}
export default Footer