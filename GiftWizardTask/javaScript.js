/**
 * Created by yehuda on 7/18/2017.
 */
function add()
{
    //get the last digit:
    var newNum = $("#digits button").length;
    newNum++; //increase new num by one
    //Adding new button:
    if(newNum<10)
    {
        var btn = document.createElement("BUTTON");

        btn.className ="button";
        btn.id =+newNum;
        btn.innerHTML =newNum;
        btn.setAttribute("onclick","writeDigit(this)");

        var foo = document.getElementById("digits");
        //Append the element in page:
        foo.appendChild(btn);
    }
    else
    {
        alert("Sorry, cant add more then 9 digits!")
    }

}

function writeDigit(num)
{
    var textField = document.getElementById("textField");
    textField.innerHTML += num.id;
}

function deleteDigit()
{
    var textField = document.getElementById("textField");
    var data = textField.value;
    if(data.length==0)
    {
        alert("No elements to delete!")
    }
    else
    {
        data = data.substring(0, data.length - 1);
        textField.innerHTML = data;
    }
}

function calculate()
{
    var textField = document.getElementById("textField");
    var data = textField.value;
    if(data==="")
    {
        alert("Please type a calculation")
    }
    else
    {
        try {
            textField.innerHTML += "="+eval(data);
        }
        catch(err) {
            alert("Wrong lexicography, please fix it and then try again");
        }
    }
}

function startOver()
{
    var textField = document.getElementById("textField");
    textField.innerHTML ="";
}