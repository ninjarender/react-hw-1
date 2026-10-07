type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else {
    console.log("Error!");
  }
}

logStatus("loading");
logStatus("success");
logStatus("error");
// logStatus("pending"); // ❌ Argument of type '"pending"' is not assignable to parameter of type 'Status'.
