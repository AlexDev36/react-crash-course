import React from "react";
import CircleLoader from "react-spinners/CircleLoader"

const Spinner = ({ isLoading }) => {
  return (
    <CircleLoader
        color='#4338ca'
        loading={isLoading}
        cssOverride={override}
        size={150}  
    />
  );
};

const override = {
    display: 'block',
    margin: '100px auto',
    borderColor: 'red'
};
export default Spinner;
