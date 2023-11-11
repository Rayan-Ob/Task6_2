import React from 'react'

function AccordionProps(props) {
    const { head, body } = props
    return (
        <div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne">{head}</button>
                </h2>
               
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body mt-5">
                        <p>{body}</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default AccordionProps