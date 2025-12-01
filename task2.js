const students = [
        {id: "S001", name: "John", s1: 78, s2: 95, s3: 98, s4: 97, s5: 96},
        {id: "S002", name: "Arav", s1: 98, s2: 93, s3: 91, s4: 93, s5: 96},
        {id: "S003", name: "Diya", s1: 88, s2: 88, s3: 89, s4: 84, s5: 81},
        {id: "S004", name: "Raju", s1: 78, s2: 69, s3: 79, s4: 68, s5: 78},
        {id: "S005", name: "Harshith", s1: 93, s2: 55, s3: 56, s4: 93, s5: 63},
        {id: "S006", name: "Kavya", s1: 88, s2: 49, s3: 67, s4: 10, s5: 56},
        {id: "S007", name: "Kumar", s1: 55, s2: 60, s3: 68, s4: 35, s5: 42},
        {id: "S008", name: "Dinesh", s1: 62, s2: 70, s3: 58, s4: 47, s5: 55},
        
        {id: "S009", name: "Neha", s1: 99, s2: 80, s3: 20, s4: 59, s5: 10},
        {id: "S010", name: "Rajesh", s1: 52, s2: 53, s3: 98, s4: 75, s5: 96},
        {id: "S011", name: "XXX", s1: 34, s2: 35, s3: 89, s4: 57, s5: 69},
        {id: "S012", name: "YYY", s1: 34, s2: 35, s3: 89, s4: 57, s5: 69},
        {id: "S013", name: "ZZZ", s1: 34, s2: 35, s3: 89, s4: 57, s5: 69},
        {id: "S014", name: "Dinesh", s1: 62, s2: 70, s3: 58, s4: 47, s5: 55},
        {id: "S015", name: "Neha", s1: 99, s2: 80, s3: 20, s4: 59, s5: 10},
        {id: "S016", name: "Rajesh", s1: 52, s2: 53, s3: 98, s4: 75, s5: 96},
        {id: "S017", name: "XXX", s1: 34, s2: 35, s3: 89, s4: 57, s5: 69},
        {id: "S018", name: "YYY", s1: 34, s2: 35, s3: 89, s4: 57, s5: 69},
        {id: "S019", name: "ZZZ", s1: 34, s2: 35, s3: 89, s4: 57, s5: 69}
    ];
 function loadData(){
        let stable = `<table>
                        <thead>
                            <tr>
                                <th style="width:50px">S#</th>
                                <th style="width:100px">Student ID</th>
                                <th style="width:300px">Student Name</th>
                                <th style="width:75px">S1</th>
                                <th style="width:75px">S2</th>
                                <th style="width:75px">S3</th>
                                <th style="width:75px">S4</th>
                                <th style="width:75px">S5</th>
                                <th style="width:75px">Total</th>
                                <th style="width:75px">Average</th>
                                <th style="width:75px">Grade</th>
                                <th></th>
                            </tr>
                        </thead>`;
        for(i=0; i< students.length; i++){
            const student = students[i];
            const total = student.s1 + student.s2 + student.s3 + student.s4 + student.s5;
            const avg = total / 5;

            let grade = "";
            if(avg >= 90) grade = "A+";
            else if(avg >= 80) grade = "A";
            else if(avg >= 70) grade = "B";
            else if(avg >= 60) grade = "C";
            else grade = "Fail";

            stable += `<tr>
                            <td>${i+1}</td>
                            <td>${student.id}</td>
                            <td style="text-align:left">${student.name}</td>
                            <td>${student.s1}</td>
                            <td>${student.s2}</td>
                            <td>${student.s3}</td>
                            <td>${student.s4}</td>
                            <td>${student.s5}</td>
                            <td>${total}</td>
                            <td>${avg.toFixed(1)}</td>
                            <td>${grade}</td>
                            <td></td>
                        </tr>`;
        }
        stable +=` </table>`
        studentdata.innerHTML = stable;
    }
              