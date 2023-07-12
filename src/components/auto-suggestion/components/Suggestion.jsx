import React from 'react';

function Suggestion(props) {
  const { data } = props;
  return (
    <div>
      <p className="uppercase py-1 px-2 bg-gray-200">Suggestions</p>
      <div>
        {data.map((each) => (
          <p
            className="py-1 px-2 hover:bg-gray-200 duration-200 cursor-pointer"
            key={each.term}
          >
            {each.term}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Suggestion;
