import React from "react";

const NameSelect = ({ changeName }) => {
  return (
    <div className="">
      <label htmlFor="name-select">Select your Name</label>
      <select
        className="form-select"
        id="name-select"
        aria-label="Default select example"
        onChange={changeName}
        defaultValue="unnamed"
      >
        <option value="unnamed">Choose Name</option>
        <option value="Anton Francis Jeejo NV">Anton Francis Jeejo NV</option>
        <option value="Bala Arun">Bala Arun</option>
        <option value="Balaji Anand">Balaji Anand B</option>
        <option value="Balaji">Balaji G</option>
        <option value="Dharangan">Dharangan</option>
        <option value="Ganthimathi">Ganthimathi V</option>
        <option value="Jesuva Arockiadoss">Jesuva Arockiadoss S</option>
        <option value="Kabilesh">Kabilesh J</option>
        <option value="Mahaskthi">Mahaskthi J</option>
        <option value="Nanthiny">Nanthiny TA</option>
        <option value="Nivetha">Nivetha N</option>
        <option value="Pavitra">Pavitra T</option>
        <option value="Priyadharshini">Priyadharshini L</option>
        <option value="Rajanayaki">Rajanayaki S</option>
        <option value="Rajapriyadharshini">Rajapriyadharshini MS</option>
        <option value="Rathika">Rathika M</option>
        <option value="Roshini">Roshini R</option>
        <option value="Rupa Shri">Rupa Shri</option>
        <option value="Sahaya Joe Ralphin">Sahaya Joe Ralphin X</option>
        <option value="Sam Selvan">Sam Selvan</option>
        <option value="Sankareshwari">Sankareshwari M</option>
        <option value="Saravanan">Saravanan B</option>
        <option value="Shanthi">Shanthi A</option>
        <option value="Shenbaga Abirami">Shenbaga Abirami B</option>
        <option value="Shiva">Shiva A</option>
        <option value="Sundar">Sundar S</option>
        <option value="Swetha">Swetha S</option>
        <option value="Yogessh">Yogessh V</option>
      </select>
    </div>
  );
};

export default NameSelect;
