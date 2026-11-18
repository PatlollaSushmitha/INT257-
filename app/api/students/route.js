let students = [
    {
        id: 1,
        name: "Shivuu", 
        age: "20"
    },
    {
        id: 2,
        name: "Sushuu",
        age: "19"
    }
];

// We will be checking this output by using THUNDER CLIENT. - it is a tool for testing API
//GET - get all the details of students.
export async function GET(){
    return Response.json(students);
}

// POST - add a student 
export async function POST(request){
    const data= await request.json();
    const newStudent = {
        id: students.length + 1,
        name: data.name,
        age: data.age
    };
    students.push(newStudent);
    return Response.json(newStudent);
}

// PUT - Update a student
export async function PUT(request){
    const data = await request.json();
    const student = students.find(
        student => student.id === data.id
    );
    if(!student){
        return Response.json(
            {message: "Students not found"},
            {status: 404}
        );
    }
    student.name = data.name
    student.age = data.age
    return Response.json(student);
}

// DELETE 
export async function DELETE(request){
    const data = await request.json();
    const studentExists = students.some(
        student => student.id === data.id
    );
    if( !studentExists){
        return Response.json(
            {message: "Student not fount"},
            {status: 404}
        );
    }
    students = students.filter(
        student => student.id !== data.id
    );
    return Response.json({
        message : "Student deleted Successfully!!"
    });
}