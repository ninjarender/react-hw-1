type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  console.log(`Current status: ${status}`);
}

logStatus("loading");
logStatus("success");
logStatus("error");
// logStatus("pending"); // ❌ Argument of type '"pending"' is not assignable to parameter of type 'Status'.
