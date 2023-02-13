import FilterTemplate from "./FilterTemplate";

const Filter = () => {
  const users = [
    {
      name: "James",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Robert",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "John",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

  // const testFilter = users.filter((element) => {
  //     return element.height > 150
  // }   )
  // console.log(testFilter);

  // 2 вариант - сокращенный фильтр
  const testFilter = users
    .filter((element) => element.height > 150)
    .map((newelement) => {
      return (
        <FilterTemplate 
        name={newelement.name} 
        gender={newelement.gender} 
        />
      );
    });
  console.log(testFilter);

  return <>{testFilter}</>;
};
export default Filter;
