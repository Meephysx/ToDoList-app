const { addTask, getTasks, completeTask, deleteTask } = require("./tasks");
const { showTasks } = require("./display");
const { ask, closeInput } = require("./input");
const { showMenu } = require("./utils");

async function main() {
    let running = true;

    while (running) {
        showMenu();
        const choice = await ask("Pilih menu (1-5): ");

        switch (choice) {
            case "1":
                const taskName = await ask("Masukkan nama tugas: ");
                addTask(taskName);
                console.log("✅ Tugas berhasil ditambahkan!");
                break;

            case "2":
                showTasks(getTasks());
                break;

            case "3":
                showTasks(getTasks());
                const completeIndex = await ask("Pilih nomor tugas yang ingin ditandai selesai: ");
                if (completeTask(completeIndex - 1)) {
                    console.log("✅ Tugas telah ditandai selesai!");
                } else {
                    console.log("❌ Nomor tugas tidak valid.");
                }
                break;

            case "4":
                showTasks(getTasks());
                const deleteIndex = await ask("Pilih nomor tugas yang ingin dihapus: ");
                if (deleteTask(deleteIndex - 1)) {
                    console.log("✅ Tugas berhasil dihapus!");
                } else {
                    console.log("❌ Nomor tugas tidak valid.");
                }
                break;

            case "5":
                console.log("👋 Keluar dari aplikasi. Terima kasih!");
                running = false;
                closeInput();
                break;

            default:
                console.log("❌ Pilihan tidak valid. Silakan pilih antara 1-5.");
        }
    }
}

main();
