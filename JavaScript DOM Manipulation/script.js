document.getElementById("addTask").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskType = document.getElementById("taskType").value;
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Pls Type somthing!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // สร้างรายการใหม่
    const li = document.createElement("li");
    li.classList.add(taskType); // เพิ่มประเภทงาน (งาน, ส่วนตัว, ด่วน)

    // เพิ่มรูปภาพ (สมมุติว่าใช้ภาพจาก URL)
    const img = document.createElement("img");
    img.classList.add("task-image");
    img.src = `https://via.placeholder.com/40?text=${taskType.charAt(0).toUpperCase()}`; // ใส่ภาพตามประเภทงาน

    if (taskType === "work") {
        img.src = "data:image/png;base64,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";  // รูปภาพสำหรับ งาน
    } else if (taskType === "personal") {
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwm4KeZm7M1AcQWSYPSu7Jvn8IgGjkBkf3A&s";  // รูปภาพสำหรับ ส่วนตัว
    } else if (taskType === "nothing") {
        img.src = "https://i.etsystatic.com/50203209/r/il/82687a/6259932980/il_570xN.6259932980_cgug.jpg";  // รูปสำหรับแมวอย่างอ้วน
    }

    const span = document.createElement("span");
    span.textContent = taskText;

    // ปุ่มลบ
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        if (confirm("Are you sure to delete this?")) {
            li.remove();
        }
    });

    // คลิกเพื่อขีดฆ่า (mark as completed)
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // เพิ่มทุกอย่างเข้าไปในรายการ
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // เคลียร์ input
    taskInput.value = "";
});
