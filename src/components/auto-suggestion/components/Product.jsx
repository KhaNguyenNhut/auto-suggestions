import React from 'react';

function Product(props) {
  const { data } = props;
  return (
    <div>
      <p className="uppercase py-1 px-2 bg-gray-200">Products</p>
      <div>
        {data.map((each) => (
          <div
            key={each.id}
            className="flex py-1 px-2 cursor-pointer hover:bg-gray-200 duration-200"
          >
            <img
              className="w-[70px] h-[80px]"
              src={each.image}
              alt={each.title}
            />
            <div className="flex flex-col ml-2">
              <p className="p-1" key={each.id}>
                {each.title}
              </p>
              <span className="text-gray-500">{each.brand}</span>
              <strong>${each.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
