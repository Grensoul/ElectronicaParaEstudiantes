export function showMessage(message, type="success"){
    Toastify({
        text: message,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type === "success" ? "linear-gradient(to right, #4cd470, #2cc755)" : "linear-gradient(to right, #db7676, #f51414)"
        },
        onClick: function () {}, // Callback after click
      }).showToast();
}

export function showMessageLogout(message, type="success"){
  Toastify({
      text: message,
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: type === "success" ? "linear-gradient(to right, #d99843, #d48722)" : "linear-gradient(to right, #db7676, #f51414)"
      },
      onClick: function () {}, // Callback after click
    }).showToast();
}