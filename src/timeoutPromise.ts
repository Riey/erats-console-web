export async function timeoutPromise(ms: number): Promise<void> {
    let timer;
    const promise = new Promise((resolve) => {
        timer = setTimeout(resolve, ms);
    });

    await promise;
    // noinspection JSUnusedAssignment
    clearTimeout(timer);
}