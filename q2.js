async function logTimeForTasks(tasks){
    console.time('Tasks');
    await Promise.all(tasks);
    console.timeEnd('Tasks');
}

logTimeForTasks([
    new Promise(resolve=> setTimeout(resolve, 1000)),
    new Promise(resolve => setTimeout(resolve, 1500))
])

