


const CategoryItem=({categories})=> {
    return (
      categories &&
      categories.map((category) => {
        return (
          <option key={category.categoryId} value={category.categoryId} price = {category.price}>
            {category.name}
          </option>
        );
      })
    );
  }


  export default CategoryItem;