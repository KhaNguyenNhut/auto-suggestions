import React from 'react';

function Collection(props) {
  const { data } = props;
  return (
    <div>
      <p className="uppercase py-1 px-2 bg-gray-200">Collections</p>
      <div>
        {data.map((each) => (
          <p className='py-1 px-2 hover:bg-gray-200 duration-200 cursor-pointer' key={each.id}>{each.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Collection;
