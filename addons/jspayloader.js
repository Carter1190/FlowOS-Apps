payload = prompt("enter the cmd you would like to execute")
try {
  jsPayload = document.createElement('script'); 
  jsPayload.innerHTML= payload;
  document.body.appendChild(jsPayload);
  alert("Payload finished!");
} 
catch {
  alert('Payload failed, check dev logs for info');
}
