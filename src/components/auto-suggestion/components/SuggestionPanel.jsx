import React from 'react';
import Product from './Product';
import Suggestion from './Suggestion';
import Collection from './Collection';
import { SEARCH_SETTING } from '../../../constant';
import { useBlockSettingStore } from '../../../store/useBlockSettingStore';

function SuggestionPanel(props) {
  const blockSettings = useBlockSettingStore((state) => state.blockSettings);

  const { searchResult, maxHeight = 500 } = props;
  const { suggestions, collections, products } = searchResult;

  return (
    <div
      className="shadow-lg absolute w-full overflow-auto border border-gray-500 rounded z-50"
      style={{ maxHeight: maxHeight }}
    >
      {blockSettings[SEARCH_SETTING.SUGGESTION].show &&
        suggestions?.length > 0 && <Suggestion data={suggestions} />}
      {blockSettings[SEARCH_SETTING.COLLECTION].show &&
        collections?.length > 0 && <Collection data={collections} />}
      {blockSettings[SEARCH_SETTING.PRODUCT].show && products?.length > 0 && (
        <Product data={products} />
      )}
    </div>
  );
}

export default SuggestionPanel;
