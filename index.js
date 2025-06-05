const university = [
    {
      dept: "Computer Science",
      students: [
        { name: "Alice", grades: { DS: 85, Algo: 90 } },
        { name: "Bob", grades: { DS: 70, Algo: 75 } }
      ]
    },
    {
      dept: "Electrical",
      students: [
        { name: "Charlie", grades: { DS: 88, Algo: 65 } },
        { name: "David", grades: { DS: 92, Algo: 80 } }
      ]
    }
  ];
  
  const topStudents = university
    .flatMap(({ dept, students }) =>
      students.map(({ name, grades: { DS, Algo } }) => ({
        name,
        dept,
        total: DS + Algo
      }))
    )
    .sort((a, b) => b.total - a.total)
    .slice(0, 2)
    .map(({ name, dept }) => `${name} from ${dept}`);
  
  console.log(topStudents);
  