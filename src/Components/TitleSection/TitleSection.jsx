import React from 'react'

function TitleSection(props) {
    const{title,paragraph}=props;
  return (
    <div>
           <div className="my-4 text-center">
        <h2>{title}</h2>
    <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default TitleSection