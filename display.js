function showTasks(tasks) {
    console.log("\n=== DAFTAR TUGAS ===");
    if (tasks.length === 0) {
        console.log("Belum ada tugas.");
    } else {
        tasks.forEach((task, index) => {
            const status = task.completed ? "✅ Selesai" : "⏳ Belum selesai";
            console.log(`${index + 1}. ${task.name} - ${status}`);
        });
    }
    console.log("====================\n");
}

module.exports = { showTasks };
