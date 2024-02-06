document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    // อาร์เรย์ส าหรับเก็บรายการ Todo
    let todos = [];
    // เพิ่มรายการ Todo
    function addTodo() {
        const todoText = todoInput.value.trim(); //ฟังก์ชันนี้ดึงค่าจากอิลิเมนต์ input ที่มี id เป็น todoInput และทำการตัดช่องว่างที่อยู่หน้าและหลังข้อความออก จากนั้นกำหนดค่านี้ให้กับตัวแปร todoText
        if (todoText !== "") {
            const todoItem = {
    
            text: todoText,
            completed: false,
    };
    todos.push(todoItem); //เพิ่ม Todo เข้า Array:
    renderTodoList();
    todoInput.value = ""; //ล้างค่า Input Field:
    }
}

    // ลบรายการ Todo
    function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodoList();
    }

    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodoList();
    }

// แสดงรายการ Todo บนหน้าเว็บ
function renderTodoList() {
    console.log(todos);  //ฟังก์ชันนี้นำอาร์เรย์ todos และแสดงในคอนโซล (console) เพื่อดูสถานะปัจจุบันของ todo list 
    todoList.innerHTML = ""; //ลบข้อมูลที่มีอยู่ใน Todo List:
    for (let i = 0; i < todos.length; i++) {
        const todoItem = todos[i];
        const listItem = document.createElement("li");
    listItem.textContent = todoItem.text; //กำหนดข้อความให้เป็น List Item:
    if (todoItem.completed) {
        listItem.classList.add("completed"); //ตรวจสอบสถานะของ Todo และเพิ่ม Class ตามต้องการ
    }
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ลบ";
    deleteButton.addEventListener("click", () => deleteTodo(i));
    const completeButton = document.createElement("button");
    completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
    completeButton.addEventListener("click", () => toggleComplete(i));
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    }
}
    // การกดปุ่ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });
    
    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
});

