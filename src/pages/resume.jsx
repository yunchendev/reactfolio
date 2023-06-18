import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";



import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "resume");

    return (
        <div className='main-container'>
            <Document file={"./yun-resume.pdf"} >
                <Page pageNumber={1}/>
            </Document>
        </div>
    )

    // return (
    //     <React.Fragment>
    //         <Helmet>
    //             <title>{`resume | ${INFO.main.title}`}</title>
    //             <meta name="description" content={currentSEO.description} />
    //             <meta
    //                 name="keywords"
    //                 content={currentSEO.keywords.join(", ")}
    //             />
    //         </Helmet>

    //         <div className="page-content">
    //             <NavBar active="resume" />
    //             <div className="content-wrapper">
    //                 <div className="resume-logo-container">
    //                     <div className="resume-logo">
    //                         <Logo width={46} />
    //                     </div>
    //                 </div>

    //                 <div className="resume-container">
    //                     <div className="resume-main">
    //                         <div className="resume-right-side">
    //                             <div className="title resume-title">
    //                                 {INFO.resume.title}
    //                             </div>

    //                             <div className="subtitle resume-subtitle">
    //                                 {INFO.resume.description}
    //                             </div>
    //                         </div>

    //                         <div className="resume-left-side">
    //                             <div className="resume-image-container">
    //                                 <div className="resume-image-wrapper">
    //                                     <img
    //                                         src="resume.jpg"
    //                                         alt="resume"
    //                                         className="resume-image"
    //                                     />
    //                                 </div>
    //                             </div>
    //                             <div className='main-container'>
    //                                 <Document file={"yun-resume.pdf"} >
    //                                     <Page />
    //                                 </Document>
    //                             </div>

    //                         </div>
    //                     </div>

    //                 </div>
    //                 <div className="page-footer">
    //                     <Footer />
    //                 </div>
    //             </div>
    //         </div>
    //     </React.Fragment>
    // );
};

export default Resume;
