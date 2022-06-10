import React, {useState}from "react";

function CategoryFilter({CATEGORIES, catSetFilter}) {
  const Btn = (category) => {
    const clickHelper = (e) => {
      catSetFilter(category)
      e.target.className = 'selected'
      selectedBtn.className = ''
      setSelectedBtn(e.target)
    }
    return (<button key={category} className = {''} onClick={e => clickHelper(e)}>{category}</button>)
  }
  const [selectedBtn, setSelectedBtn] = useState({className:''})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map(Btn)}
    </div>
  );
}

export default CategoryFilter;
