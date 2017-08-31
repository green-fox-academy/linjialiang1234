
    // 1. Alert the content of the heading.
    // 2. Write the content of the first paragraph to the console.
    // 3. Alert the content of the second paragraph.
    // 4. Replace the heading's content with 'New content'.
    // 5. Replace the last paragraph's content with the first paragraph's content.

    var heading = document.querySelector("h1");

    alert(heading.innerHTML);

    var para = document.querySelector("p");

    console.log(para.textContent);

    var secPara = document.getElementsByTagName("P");
    alert(secPara[1].innerHTML);

    var heading = document.getElementsByTagName("h1");
    var newpraContent = heading[0].innerHTML;
    heading[0].innerHTML = "New content";

    var paraContent = document.getElementsByClassName("result");
    paraContent[0].innerHTML = newpraContent;

    






