import { useState, useEffect } from 'react';
import categoryData from '../api/categories.json'
import Category from '../components/ui/Category'


function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData );
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
      <h3 className='text-sm font-semibold mb-3'>Kategoriler</h3>
        <div className="grid grid-cols-10">
          {
            categoryData && categories.map((category,index)=>
            <Category category={category} key={index}></Category>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Categories;
