import React from 'react';

type Props = {}

const DocView = (props: Props) => {
    var url = "http://ignou.ac.in/userfiles/Formulae%20and%20Table%20Booklet(PGDAST).pdf";
    return (
        <iframe style={{height: "100vh", width: "100vh"}} src={url}></iframe>
    )
}

export default DocView