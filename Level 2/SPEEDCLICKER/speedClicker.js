var count = 0;
            var btn = document.getElementById("btn");
            var disp = document.getElementById("display");
            var initialValue = localStorage.getItem("number")
            btn.onclick = function () {
                count++;
                disp.innerHTML = count;
                localStorage.setItem("number",count)

            }

disp.innerHTML = count;

var value = document.getElementById("Value")
value.innerHTML = initialValue



