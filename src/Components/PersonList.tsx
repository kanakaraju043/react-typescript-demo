import React from "react";

// type PersonListProps = {
//     names: {
//         first: string
//         last: string
//     }[]
// }

type Name = {
  first: string;
  last: string;
};

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
